(() => {
  const LOG = "[openclaw-session-title-fix]";
  const state = {
    byKey: new Map(),
    inFlight: false,
    lastFetchAt: 0,
  };

  function getApp() {
    return document.querySelector("openclaw-app");
  }

  function truncate(text, max = 42) {
    if (!text) return text;
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1)}…`;
  }

  function fallbackFromKey(key) {
    if (!key) return "Session";
    if (key === "main" || key === "agent:main:main") return "Main Session";
    const m = key.match(/^agent:[^:]+:([^:]+):(.+)$/);
    if (!m) return truncate(key, 34);
    const channel = m[1];
    const tail = m[2];
    const short = tail.length > 16 ? tail.slice(-8) : tail;
    return `${channel} · ${short}`;
  }

  function summarizeToWords(text, fallback, minWords = 3, maxWords = 4) {
    const blocked = new Set([
      "conversation",
      "info",
      "untrusted",
      "metadata",
      "sender",
      "thread",
      "starter",
      "replied",
      "forwarded",
      "context",
      "json",
      "message",
      "chat",
      "history",
      "since",
      "last",
      "reply",
      "system",
      "role",
      "type",
      "text",
      "body",
      "label",
    ]);

    const tokenize = (value) =>
      String(value || "")
        .replace(/^[\-:•]+\s*/, "")
        .replace(/[“”"'`]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map((w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ""))
        .filter(Boolean)
        .filter((w) => !blocked.has(w.toLowerCase()));

    const words = tokenize(text);
    const fallbackWords = tokenize(fallback);

    while (words.length < minWords && fallbackWords.length > 0) {
      words.push(fallbackWords.shift());
    }
    const out = (words.length ? words : fallbackWords).slice(0, maxWords).join(" ").trim();
    return truncate(out || fallback || "Session", 42);
  }

  function sanitizeMetadataTitle(raw, key) {
    const fallback = fallbackFromKey(key);
    if (typeof raw !== "string" || !raw.trim()) return summarizeToWords(fallback, fallback);

    let text = raw
      .replace(/\[\[\s*reply_to_current\s*\]\]/gi, "")
      .replace(/\[\[\s*reply_to:[^\]]+\]\]/gi, "")
      .replace(/\r/g, "")
      .trim();

    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .map((line) => line.replace(/^\[[^\]]+\]\s*/, ""))
      .filter(Boolean);

    const skip = [
      /^conversation info \(untrusted metadata\):/i,
      /^sender \(untrusted metadata\):/i,
      /^thread starter \(untrusted/i,
      /^replied message \(untrusted/i,
      /^forwarded message context/i,
      /^chat history since last reply/i,
      /^untrusted context \(/i,
      /^```/,
      /^\{\s*$/,
      /^\}\s*$/,
      /^"[a-zA-Z0-9_]+"\s*:/,
      /^system:/i,
      /^conversation info:/i,
      /^sender:/i,
    ];

    const useful = lines
      .filter((line) => !skip.some((rx) => rx.test(line)))
      .map((line) => line.replace(/\s+/g, " ").trim())
      .filter((line) => line.length >= 2)
      .filter((line) => !/^call\s+[a-z]/i.test(line));

    const candidate = useful[0] || lines.find((line) => line.length > 2) || fallback;
    return summarizeToWords(candidate, fallback);
  }

  function applyToSelect() {
    const app = getApp();
    if (!app) return;
    const select = document.querySelector(".chat-controls__session select");
    if (!select) return;
    for (const opt of Array.from(select.options || [])) {
      const key = String(opt.value || "");
      const current = String(opt.textContent || "");
      const mapped = state.byKey.get(key);
      const title = mapped || sanitizeMetadataTitle(current, key);
      if (!mapped) {
        state.byKey.set(key, title);
      }
      if (opt.textContent !== title) {
        opt.textContent = title;
      }
      opt.title = key;
    }
  }

  async function refreshTitles() {
    const app = getApp();
    if (!app || !app.client) return;
    if (state.inFlight) return;
    const now = Date.now();
    if (now - state.lastFetchAt < 3000) return;
    state.lastFetchAt = now;
    state.inFlight = true;
    try {
      const res = await app.client.request("sessions.list", {
        limit: 300,
        includeGlobal: false,
        includeUnknown: false,
        includeDerivedTitles: true,
      });
      const rows = Array.isArray(res?.sessions) ? res.sessions : [];
      if (rows.length === 0) {
        return;
      }

      // Keep app state in sync so base render can show full list.
      app.sessionsResult = res;
      if (typeof app.requestUpdate === "function") app.requestUpdate();

      const select = document.querySelector(".chat-controls__session select");
      if (!select) {
        for (const row of rows) {
          const key = String(row?.key || "");
          if (!key) continue;
          const raw = row?.label || row?.derivedTitle || row?.displayName || key;
          state.byKey.set(key, sanitizeMetadataTitle(String(raw || ""), key));
        }
        return;
      }

      const currentValue = String(select.value || "");
      const byKey = new Map();
      for (const row of rows) {
        const key = String(row?.key || "");
        if (!key) continue;
        const raw = row?.label || row?.derivedTitle || row?.displayName || key;
        const title = sanitizeMetadataTitle(String(raw || ""), key);
        state.byKey.set(key, title);
        byKey.set(key, title);
      }

      // Rebuild options fully to avoid stale/minimal 2-option state.
      select.replaceChildren();
      for (const [key, title] of byKey.entries()) {
        const opt = document.createElement("option");
        opt.value = key;
        opt.title = key;
        opt.textContent = title;
        select.appendChild(opt);
      }

      if (byKey.has(currentValue)) {
        select.value = currentValue;
      }

      applyToSelect();
    } catch {
      // noop
    } finally {
      state.inFlight = false;
    }
  }

  const observer = new MutationObserver(() => {
    applyToSelect();
    void refreshTitles();
  });
  observer.observe(document.documentElement, { subtree: true, childList: true });

  setInterval(() => {
    applyToSelect();
    void refreshTitles();
  }, 1500);

  console.info(LOG, "loaded");
})();
