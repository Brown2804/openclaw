(() => {
  const ID = "oc-topbar-usage";
  const STYLE_ID = "oc-topbar-usage-style";
  const HIDDEN_SESSION = "usage-widget-status";
  const log = (...a) => console.log("[usage-topbar]", ...a);

  const setText = (id, txt) => {
    const n = document.getElementById(id);
    if (n) {
      n.textContent = txt;
    }
  };

  const ensureStyle = () => {
    if (document.getElementById(STYLE_ID)) {
      return;
    }
    const s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = `
      #${ID}{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid var(--border,rgba(255,255,255,.2));border-radius:8px;background:var(--bg-secondary,rgba(255,255,255,.04));font-size:12px;max-width:78vw;white-space:nowrap;overflow:hidden}
      #${ID} .sep{opacity:.35}
      #${ID} .muted{opacity:.7}
      #${ID} .mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      #${ID} button{all:unset;cursor:pointer;padding:1px 6px;border:1px solid var(--border,rgba(255,255,255,.2));border-radius:6px}
      @media (max-width:900px){#${ID}{font-size:10px;max-width:65vw}}
    `;
    document.head.appendChild(s);
  };

  const ensureHost = () => {
    const topbar = document.querySelector(".topbar");
    const status = topbar && topbar.querySelector(".topbar-status");
    if (!topbar || !status) {
      return null;
    }

    let el = document.getElementById(ID);
    if (el) {
      return el;
    }

    el = document.createElement("div");
    el.id = ID;
    el.innerHTML = `
      <span>Model <b id="oc-u-model" class="mono">-</b></span>
      <span class="sep">|</span>
      <span><span id="oc-u-l1">5h</span> <b id="oc-u-5h">-</b></span>
      <span class="sep">|</span>
      <span><span id="oc-u-l2">Week</span> <b id="oc-u-week">-</b></span>
      <span class="sep">|</span>
      <span>Today tokens <b id="oc-u-tokens">-</b></span>
      <span class="sep">|</span>
      <span id="oc-u-updated" class="muted">boot…</span>
      <button id="oc-u-refresh">refresh</button>
    `;
    topbar.insertBefore(el, status);
    return el;
  };

  const getApp = () => document.querySelector("openclaw-app");
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const parseFromText = (text) => {
    const t = String(text || "");

    // Prefer status-card pattern: "Usage: 5h 89% left ... Day/Week 95% left ..."
    const m5left = t.match(/5h\s+([0-9]{1,3})%\s+left/i);
    const mdleft = t.match(/(?:day|week)\s+([0-9]{1,3})%\s+left/i);

    // Fallback generic percent grabs
    const m5 = t.match(/(?:5h|5-hour)\s*[:|]?\s*([0-9]{1,3}%)/i);
    const md = t.match(/(?:day|daily|week|weekly)\s*[:|]?\s*([0-9]{1,3}%|\$[0-9]+(?:\.[0-9]+)?)/i);

    // Generic provider usage entries (e.g., "claude-opus-... 100% left")
    const usageEntries = Array.from(
      t.matchAll(/([a-z0-9][a-z0-9._\-:/]{2,})\s+([0-9]{1,3})%\s+left/gi),
    )
      .map((m) => ({ name: m[1], pct: Number(m[2]) }))
      .filter((e) => !/^(5h|5-hour|day|daily|week|weekly)$/i.test(e.name));

    const mm =
      t.match(/default\s+([a-z0-9._\-:/]+)\s*\(/i) || t.match(/Model\s*[:|]?\s*([a-z0-9._\-:/]+)/i);

    return {
      fiveLeftPct: m5left ? Number(m5left[1]) : null,
      dayLeftPct: mdleft ? Number(mdleft[1]) : null,
      five: m5 ? m5[1] : null,
      day: md ? md[1] : null,
      model: mm ? mm[1] : null,
      usageEntries,
    };
  };

  const parseAnyContent = (msg) => {
    if (!msg) {
      return "";
    }
    if (typeof msg.content === "string") {
      return msg.content;
    }
    if (Array.isArray(msg.content)) {
      return msg.content.map((c) => (c && c.type === "text" ? c.text : "")).join("\n");
    }
    return "";
  };

  const fetchByHiddenStatusRun = async (client) => {
    await client.request("chat.send", {
      sessionKey: HIDDEN_SESSION,
      message: "/status",
      deliver: false,
      idempotencyKey: `usage-${Date.now()}`,
    });

    const started = Date.now();
    while (Date.now() - started < 9000) {
      const h = await client.request("chat.history", { sessionKey: HIDDEN_SESSION, limit: 20 });
      const msgs = Array.isArray(h?.messages) ? h.messages : [];
      for (let i = msgs.length - 1; i >= 0; i--) {
        const m = msgs[i];
        if (m?.role !== "assistant") {
          continue;
        }
        const txt = parseAnyContent(m);
        const p = parseFromText(txt);
        if (
          p.five ||
          p.day ||
          p.model ||
          p.fiveLeftPct != null ||
          p.dayLeftPct != null ||
          (p.usageEntries && p.usageEntries.length > 0)
        ) {
          return p;
        }
      }
      await sleep(500);
    }
    return {
      five: null,
      day: null,
      model: null,
      fiveLeftPct: null,
      dayLeftPct: null,
      usageEntries: [],
    };
  };

  const fmtDate = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const today = () => fmtDate(new Date());
  const daysAgo = (n) => {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return fmtDate(d);
  };

  const fmtK = (n) => {
    if (n == null || Number.isNaN(n)) {
      return null;
    }
    if (n >= 1_000_000) {
      return `${(n / 1_000_000).toFixed(1)}M`;
    }
    if (n >= 1_000) {
      return `${Math.round(n / 100) / 10}k`;
    }
    return String(n);
  };

  const shortKey = (name) => {
    const n =
      String(name || "")
        .split("/")
        .pop() || "quota";
    return n.length > 14 ? `${n.slice(0, 14)}…` : n;
  };

  let busy = false;
  const refresh = async () => {
    if (busy) {
      return;
    }
    busy = true;
    try {
      setText("oc-u-updated", "updating…");
      const app = getApp();
      if (!app || !app.client || !app.connected) {
        throw new Error("app/client not ready");
      }

      let { five, day, model, fiveLeftPct, dayLeftPct, usageEntries } =
        await fetchByHiddenStatusRun(app.client);

      const hasClassicQuotaSignal =
        (five && five.endsWith("%")) ||
        (day && day.endsWith("%")) ||
        fiveLeftPct != null ||
        dayLeftPct != null;

      // Cost fallback is useful for classic quota cards; skip for provider/model quota cards.
      if (!day && hasClassicQuotaSignal) {
        const cost = await app.client.request("usage.cost", {
          startDate: daysAgo(6),
          endDate: today(),
        });
        const raw = JSON.stringify(cost || {});
        const m = raw.match(/"totalCost"\s*:\s*([0-9]+(?:\.[0-9]+)?)/i);
        if (m) {
          day = `$${Number(m[1]).toFixed(2)}`;
        }
      }

      if (!model) {
        const sess = await app.client.request("sessions.list", { activeMinutes: 30, limit: 1 });
        const raw = JSON.stringify(sess || {});
        const m = raw.match(/"model"\s*:\s*"([^"]+)"/i);
        if (m) {
          model = m[1];
        }
      }

      let k1 = "5h";
      let k2 = "Week";
      let v1 = "n/a";
      let v2 = "n/a";

      if (hasClassicQuotaSignal) {
        v1 =
          (five && five.endsWith("%") ? five : null) ||
          (fiveLeftPct != null ? `${fiveLeftPct}%` : null) ||
          "n/a";
        v2 =
          (day && day.endsWith("%") ? day : null) ||
          (dayLeftPct != null ? `${dayLeftPct}%` : null) ||
          "n/a";
      } else if (Array.isArray(usageEntries) && usageEntries.length > 0) {
        const unique = [];
        const seen = new Set();
        for (const e of usageEntries) {
          if (!e || !Number.isFinite(e.pct)) {
            continue;
          }
          const key = String(e.name || "").toLowerCase();
          if (seen.has(key)) {
            continue;
          }
          seen.add(key);
          unique.push(e);
          if (unique.length >= 2) {
            break;
          }
        }

        if (unique[0]) {
          k1 = shortKey(unique[0].name);
          v1 = `${unique[0].pct}%`;
        }
        if (unique[1]) {
          k2 = shortKey(unique[1].name);
          v2 = `${unique[1].pct}%`;
        } else {
          k2 = "quota-2";
          v2 = "n/a";
        }
      }

      let todayTokens = null;
      try {
        const d = today();
        const u = await app.client.request("sessions.usage", {
          startDate: d,
          endDate: d,
          limit: 1000,
          includeContextWeight: false,
        });
        const sessions = Array.isArray(u?.sessions) ? u.sessions : [];
        let total = 0;
        for (const ss of sessions) {
          total += Number(ss?.usage?.totalTokens || 0);
        }
        if (total > 0) {
          todayTokens = fmtK(total);
        }
      } catch {}

      setText("oc-u-l1", k1);
      setText("oc-u-l2", k2);
      setText("oc-u-5h", v1);
      setText("oc-u-week", v2);
      setText("oc-u-model", model || "n/a");
      setText("oc-u-tokens", todayTokens || "n/a");

      setText("oc-u-updated", new Date().toLocaleTimeString());
      log("status ok", {
        model: model || "n/a",
        k1,
        v1,
        k2,
        v2,
        todayTokens: todayTokens || "n/a",
      });
    } catch (e) {
      setText("oc-u-updated", "error");
      log("refresh failed", String(e));
    } finally {
      busy = false;
    }
  };

  const boot = () => {
    ensureStyle();
    const host = ensureHost();
    if (!host) {
      return setTimeout(boot, 500);
    }
    document.getElementById("oc-u-refresh")?.addEventListener("click", refresh);
    setText("oc-u-updated", "ready");
    setTimeout(refresh, 1200);
    setInterval(refresh, 60 * 1000); // 1 minute auto refresh
    log("booted");
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
