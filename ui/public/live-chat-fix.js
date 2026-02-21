(() => {
  const LOG = "[openclaw-live-chat-fix]";
  const state = {
    lastHistoryAt: 0,
    historyInFlight: false,
    lastHistorySig: "",
    refreshedRunIds: new Set(),
    lastToolSig: "",
  };

  function getApp() {
    return document.querySelector("openclaw-app");
  }

  function extractText(message) {
    if (typeof message === "string") return message;
    if (!message || typeof message !== "object") return "";
    if (typeof message.text === "string") return message.text;
    const content = message.content;
    if (!Array.isArray(content)) return "";
    const parts = [];
    for (const item of content) {
      if (!item || typeof item !== "object") continue;
      if (item.type === "text" && typeof item.text === "string") {
        parts.push(item.text);
      }
    }
    return parts.join("\n");
  }

  function formatOutput(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (value && typeof value === "object") {
      if (typeof value.text === "string") return value.text;
      if (Array.isArray(value.content)) {
        const t = extractText(value);
        if (t) return t;
      }
    }
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }

  function buildToolMessages(app) {
    const events = Array.isArray(app?.eventLogBuffer) ? app.eventLogBuffer : [];
    const ordered = [...events].reverse();
    const map = new Map();
    const order = [];
    let latestRunId = null;
    let latestToolTs = 0;

    for (const evt of ordered) {
      if (!evt || evt.event !== "agent") continue;
      const payload = evt.payload || {};
      if (payload.stream !== "tool") continue;
      const sessionKey = typeof payload.sessionKey === "string" ? payload.sessionKey : "";
      if (sessionKey && sessionKey !== app.sessionKey) continue;

      const data = payload.data || {};
      const toolCallId = typeof data.toolCallId === "string" ? data.toolCallId : "";
      if (!toolCallId) continue;

      const runId = typeof payload.runId === "string" ? payload.runId : null;
      if (runId) latestRunId = runId;
      const evTs = Number(evt.ts || payload.ts || 0);
      if (Number.isFinite(evTs) && evTs > latestToolTs) latestToolTs = evTs;

      const phase = typeof data.phase === "string" ? data.phase : "";
      const name = typeof data.name === "string" ? data.name : "tool";
      let entry = map.get(toolCallId);
      if (!entry) {
        entry = {
          toolCallId,
          runId,
          name,
          args: undefined,
          output: "",
          ts: evTs || Date.now(),
        };
        map.set(toolCallId, entry);
        order.push(toolCallId);
      }

      entry.name = name;
      if (phase === "start" && data.args !== undefined) {
        entry.args = data.args;
      }
      if (phase === "update" && data.partialResult !== undefined) {
        entry.output = formatOutput(data.partialResult);
      }
      if (phase === "result" && data.result !== undefined) {
        entry.output = formatOutput(data.result);
      }
    }

    const trimmedOrder = order.slice(-50);
    const messages = trimmedOrder
      .map((id) => map.get(id))
      .filter(Boolean)
      .map((entry) => ({
        role: "assistant",
        toolCallId: entry.toolCallId,
        runId: entry.runId,
        timestamp: entry.ts,
        content: [
          { type: "toolcall", name: entry.name, arguments: entry.args ?? {} },
          ...(entry.output ? [{ type: "toolresult", name: entry.name, text: entry.output }] : []),
        ],
      }));

    return { messages, latestRunId, latestToolTs };
  }

  function collectChatState(app) {
    const events = Array.isArray(app?.eventLogBuffer) ? app.eventLogBuffer : [];
    const ordered = [...events].reverse();
    let latestDelta = null;
    const finalByRun = new Map();

    for (const evt of ordered) {
      if (!evt || evt.event !== "chat") continue;
      const payload = evt.payload || {};
      if (payload.sessionKey !== app.sessionKey) continue;
      const runId = typeof payload.runId === "string" ? payload.runId : null;
      const phase = payload.state;
      if (phase === "delta") {
        const text = extractText(payload.message);
        if (typeof text === "string" && text.length > 0) {
          latestDelta = {
            runId,
            text,
            ts: Number(evt.ts || Date.now()),
          };
        }
      } else if (runId && (phase === "final" || phase === "aborted" || phase === "error")) {
        finalByRun.set(runId, phase);
      }
    }

    return { latestDelta, finalByRun };
  }

  async function refreshHistory(app, force = false) {
    if (!app?.client || !app?.connected) return;
    if (state.historyInFlight) return;
    const now = Date.now();
    if (!force && now - state.lastHistoryAt < 1200) return;

    state.lastHistoryAt = now;
    state.historyInFlight = true;
    try {
      const res = await app.client.request("chat.history", {
        sessionKey: app.sessionKey,
        limit: 200,
      });
      const messages = Array.isArray(res?.messages) ? res.messages : [];
      const sig = `${app.sessionKey}:${messages.length}:${JSON.stringify(messages.at(-1) ?? null).slice(0, 400)}`;
      if (sig !== state.lastHistorySig) {
        state.lastHistorySig = sig;
        app.chatMessages = messages;
        app.chatThinkingLevel = res?.thinkingLevel ?? null;
        if (typeof app.requestUpdate === "function") app.requestUpdate();
      }
    } catch {
      // ignore
    } finally {
      state.historyInFlight = false;
    }
  }

  async function tick() {
    const app = getApp();
    if (!app || !app.connected) return;

    const { messages, latestRunId } = buildToolMessages(app);
    const toolSig = `${messages.length}:${messages.map((m) => `${m.toolCallId}:${(m.content?.length || 0)}`).join("|")}`;
    if (toolSig !== state.lastToolSig) {
      state.lastToolSig = toolSig;
      app.chatToolMessages = messages;
      if (!app.chatRunId && latestRunId) {
        app.chatRunId = latestRunId;
      }
      if (typeof app.requestUpdate === "function") app.requestUpdate();
    }

    const { latestDelta, finalByRun } = collectChatState(app);

    if (latestDelta && (!app.chatRunId || app.chatRunId === latestDelta.runId || !latestDelta.runId)) {
      if (!app.chatRunId && latestDelta.runId) {
        app.chatRunId = latestDelta.runId;
      }
      if (app.chatStream !== latestDelta.text) {
        app.chatStream = latestDelta.text;
        if (!app.chatStreamStartedAt) app.chatStreamStartedAt = Date.now();
        if (typeof app.requestUpdate === "function") app.requestUpdate();
      }
    }

    if (app.chatRunId && finalByRun.has(app.chatRunId)) {
      const doneRun = app.chatRunId;
      app.chatStream = null;
      app.chatRunId = null;
      app.chatStreamStartedAt = null;
      if (typeof app.requestUpdate === "function") app.requestUpdate();
      if (!state.refreshedRunIds.has(doneRun)) {
        state.refreshedRunIds.add(doneRun);
        await refreshHistory(app, true);
      }
      return;
    }

    const shouldPassiveSync = app.tab === "chat" && !app.chatManualRefreshInFlight;
    if (app.chatSending || app.chatRunId || latestDelta || shouldPassiveSync) {
      await refreshHistory(app, false);
    }
  }

  setInterval(() => {
    tick().catch(() => {});
  }, 600);

  console.info(LOG, "loaded");
})();
