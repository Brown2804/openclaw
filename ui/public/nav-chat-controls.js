(() => {
  const LOG = "[openclaw-nav-chat-controls]";

  const findChatTabAnchor = (nav) => {
    const items = Array.from(nav.querySelectorAll(".nav-item"));
    return (
      items.find((el) => {
        const txt = (el.textContent || "").trim().toLowerCase();
        if (txt === "chat") return true;
        const href = (el.getAttribute("href") || "").toLowerCase();
        return href.endsWith("/chat") || href.includes("/chat?") || href.includes("#chat");
      }) || null
    );
  };

  const ensureHost = (nav, chatAnchor) => {
    let host = nav.querySelector(".chat-nav-controls-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "chat-nav-controls-host";
      chatAnchor.insertAdjacentElement("afterend", host);
    }
    return host;
  };

  const sync = () => {
    const app = document.querySelector("openclaw-app");
    if (!app) return;

    const shell = app.querySelector("div.shell") || app.querySelector("div");
    if (!shell) return;

    const nav = shell.querySelector("aside.nav");
    if (!nav) return;

    const chatAnchor = findChatTabAnchor(nav);
    if (!chatAnchor) return;

    const host = ensureHost(nav, chatAnchor);
    const isChatTab = shell.querySelector(".content.content--chat") != null;

    const header =
      shell.querySelector(".content > section.content-header") ||
      shell.querySelector(".content .content-header");
    const controls =
      (header && header.querySelector(".chat-controls")) ||
      shell.querySelector(".content .content-header .chat-controls");

    if (isChatTab) {
      host.style.display = "block";
      if (controls && controls.parentElement !== host) {
        host.appendChild(controls);
      }
    } else {
      host.style.display = "none";
    }

    // User requested removing the header block itself.
    if (header && header.parentElement) {
      header.remove();
    }
  };

  let raf = 0;
  const schedule = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      try {
        sync();
      } catch {
        // ignore
      }
    });
  };

  // Initial + reactive sync for Lit rerenders.
  const observer = new MutationObserver(() => schedule());
  observer.observe(document.documentElement, { childList: true, subtree: true });

  setInterval(schedule, 800);
  schedule();

  console.info(LOG, "loaded");
})();
