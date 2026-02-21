# OpenClaw 공식 문서 임시 전체 인덱스 (Temporary)

- 생성 시각: 2026-02-22T03:51:55+09:00
- 대상 루트: `/home/khj12/.openclaw/workspace/openclaw/docs`
- 총 문서 수: 647
- 구성: 문서별 메타데이터 + heading 스냅샷 + 분류 버킷

## 문서 카탈로그

### DOC-0001 · OpenClaw docs i18n assets

- path: `.i18n/README.md`
- locale: `en`
- category: `.i18n`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 31
- headings: OpenClaw docs i18n assets | Files | Glossary format | Notes

### DOC-0002 · Auth monitoring

- path: `automation/auth-monitoring.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 44
- headings: Auth monitoring | Preferred: CLI check (portable) | Optional scripts (ops / phone workflows)

### DOC-0003 · Cron jobs (Gateway scheduler)

- path: `automation/cron-jobs.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 542
- headings: Cron jobs (Gateway scheduler) | TL;DR | Quick start (actionable) | Tool-call equivalents (Gateway cron tool) | Where cron jobs are stored | Beginner-friendly overview | Concepts | Jobs

### DOC-0004 · Cron vs Heartbeat: When to Use Each

- path: `automation/cron-vs-heartbeat.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 286
- headings: Cron vs Heartbeat: When to Use Each | Quick Decision Guide | Heartbeat: Periodic Awareness | When to use heartbeat | Heartbeat advantages | Heartbeat example: HEARTBEAT.md checklist | Heartbeat checklist | Configuring heartbeat

### DOC-0005 · Gmail Pub/Sub -> OpenClaw

- path: `automation/gmail-pubsub.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 256
- headings: Gmail Pub/Sub -> OpenClaw | Prereqs | Wizard (recommended) | One-time setup | Start the watch | Run the push handler | Expose the handler (advanced, unsupported) | Test

### DOC-0006 · Hooks

- path: `automation/hooks.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 999
- headings: Hooks | Getting Oriented | Overview | Getting Started | Bundled Hooks | Onboarding | Hook Discovery | Hook Packs (npm/archives)

### DOC-0007 · Polls

- path: `automation/poll.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 69
- headings: Polls | Supported channels | CLI | WhatsApp | Discord | MS Teams | Gateway RPC | Channel differences

### DOC-0008 · Automation troubleshooting

- path: `automation/troubleshooting.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-troubleshooting`
- line_count: 122
- headings: Automation troubleshooting | Command ladder | Cron not firing | Cron fired but no delivery | Heartbeat suppressed or skipped | Timezone and activeHours gotchas

### DOC-0009 · Webhooks

- path: `automation/webhook.md`
- locale: `en`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 215
- headings: Webhooks | Enable | Auth | Endpoints | `POST /hooks/wake` | `POST /hooks/agent` | Session key policy (breaking change) | `POST /hooks/<name>` (mapped)

### DOC-0010 · Brave Search API

- path: `brave-search.md`
- locale: `en`
- category: `brave-search.md`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 41
- headings: Brave Search API | Get an API key | Config example | Notes

### DOC-0011 · BlueBubbles (macOS REST)

- path: `channels/bluebubbles.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 345
- headings: BlueBubbles (macOS REST) | Overview | Quick start | Keeping Messages.app alive (VM / headless setups) | 1) Save the AppleScript | 2) Install a LaunchAgent | Onboarding | Access control (DMs + groups)

### DOC-0012 · Broadcast Groups

- path: `channels/broadcast-groups.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 442
- headings: Broadcast Groups | Overview | Use Cases | 1. Specialized Agent Teams | 2. Multi-Language Support | 3. Quality Assurance Workflows | 4. Task Automation | Configuration

### DOC-0013 · Channels & routing

- path: `channels/channel-routing.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 118
- headings: Channels & routing | Key terms | Session key shapes (examples) | Routing rules (how an agent is chosen) | Broadcast groups (run multiple agents) | Config overview | Session storage | WebChat behavior

### DOC-0014 · Discord (Bot API)

- path: `channels/discord.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 713
- headings: Discord (Bot API) | Quick setup | Runtime model | Interactive components | Access control and routing | Role-based agent routing | Developer Portal setup | Native commands and command auth

### DOC-0015 · Feishu bot

- path: `channels/feishu.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 579
- headings: Feishu bot | Plugin required | Quickstart | Method 1: onboarding wizard (recommended) | Method 2: CLI setup | Step 1: Create a Feishu app | 1. Open Feishu Open Platform | 2. Create an app

### DOC-0016 · Google Chat (Chat API)

- path: `channels/googlechat.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 253
- headings: Google Chat (Chat API) | Quick setup (beginner) | Add to Google Chat | Public URL (Webhook-only) | Option A: Tailscale Funnel (Recommended) | Option B: Reverse Proxy (Caddy) | Option C: Cloudflare Tunnel | How it works

### DOC-0017 · grammY Integration (Telegram Bot API)

- path: `channels/grammy.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 31
- headings: grammY Integration (Telegram Bot API) | Why grammY | What we shipped

### DOC-0018 · Group messages (WhatsApp web channel)

- path: `channels/group-messages.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 84
- headings: Group messages (WhatsApp web channel) | What’s implemented (2025-12-03) | Config example (WhatsApp) | Activation command (owner-only) | How to use | Testing / verification | Known considerations

### DOC-0019 · Groups

- path: `channels/groups.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 374
- headings: Groups | Beginner intro (2 minutes) | Session keys | Pattern: personal DMs + public groups (single agent) | Display labels | Group policy | Mention gating (default) | Group/channel tool restrictions (optional)

### DOC-0020 · iMessage (legacy: imsg)

- path: `channels/imessage.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 351
- headings: iMessage (legacy: imsg) | Quick setup | Requirements and permissions (macOS) | or | Access control and routing | Deployment patterns | Media, chunking, and delivery targets | Config writes

### DOC-0021 · Chat Channels

- path: `channels/index.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 47
- headings: Chat Channels | Supported channels | Notes

### DOC-0022 · Quick start

- path: `channels/irc.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 234
- headings: Quick start | Security defaults | Access control | Common gotcha: `allowFrom` is for DMs, not channels | Reply triggering (mentions) | Security note (recommended for public channels) | Same tools for everyone in the channel | Different tools per sender (owner gets more power)

### DOC-0023 · LINE (plugin)

- path: `channels/line.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 186
- headings: LINE (plugin) | Plugin required | Setup | Configure | Access control | Message behavior | Channel data (rich messages) | Troubleshooting

### DOC-0024 · Channel location parsing

- path: `channels/location.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 56
- headings: Channel location parsing | Text formatting | Context fields | Channel notes

### DOC-0025 · Matrix (plugin)

- path: `channels/matrix.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 302
- headings: Matrix (plugin) | Plugin required | Setup | Encryption (E2EE) | Multi-account | Routing model | Access control (DMs) | Rooms (groups)

### DOC-0026 · Mattermost (plugin)

- path: `channels/mattermost.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 158
- headings: Mattermost (plugin) | Plugin required | Quick setup | Environment variables (default account) | Chat modes | Access control (DMs) | Channels (groups) | Targets for outbound delivery

### DOC-0027 · Microsoft Teams (plugin)

- path: `channels/msteams.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 771
- headings: Microsoft Teams (plugin) | Plugin required | Quick setup (beginner) | Goals | Config writes | Access control (DMs + groups) | How it works | Azure Bot Setup (Prerequisites)

### DOC-0028 · Nextcloud Talk (plugin)

- path: `channels/nextcloud-talk.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 138
- headings: Nextcloud Talk (plugin) | Plugin required | Quick setup (beginner) | Notes | Access control (DMs) | Rooms (groups) | Capabilities | Configuration reference (Nextcloud Talk)

### DOC-0029 · Nostr

- path: `channels/nostr.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 233
- headings: Nostr | Install (on demand) | Onboarding (recommended) | Manual install | Quick setup | Using nak | Configuration reference | Profile metadata

### DOC-0030 · Pairing

- path: `channels/pairing.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 103
- headings: Pairing | 1) DM pairing (inbound chat access) | Approve a sender | Where the state lives | 2) Node device pairing (iOS/Android/macOS/headless nodes) | Pair via Telegram (recommended for iOS) | Approve a node device | Node pairing state storage

### DOC-0031 · Signal (signal-cli)

- path: `channels/signal.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 324
- headings: Signal (signal-cli) | Prerequisites | Quick setup (beginner) | What it is | Config writes | The number model (important) | Setup path A: link existing Signal account (QR) | Setup path B: register dedicated bot number (SMS, Linux)

### DOC-0032 · Slack

- path: `channels/slack.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 510
- headings: Slack | Quick setup | Token model | Access control and routing | Commands and slash behavior | Threading, sessions, and reply tags | Media, chunking, and delivery | Actions and gates

### DOC-0033 · Telegram (Bot API)

- path: `channels/telegram.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 761
- headings: Telegram (Bot API) | Quick setup | Telegram side settings | Access control and activation | Runtime behavior | Feature reference | Troubleshooting | Telegram config reference pointers

### DOC-0034 · Tlon (plugin)

- path: `channels/tlon.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 148
- headings: Tlon (plugin) | Plugin required | Setup | Group channels | Access control | Delivery targets (CLI/cron) | Notes

### DOC-0035 · Channel troubleshooting

- path: `channels/troubleshooting.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `ev-troubleshooting`
- line_count: 117
- headings: Channel troubleshooting | Command ladder | WhatsApp | WhatsApp failure signatures | Telegram | Telegram failure signatures | Discord | Discord failure signatures

### DOC-0036 · Twitch (plugin)

- path: `channels/twitch.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 379
- headings: Twitch (plugin) | Plugin required | Quick setup (beginner) | What it is | Setup (detailed) | Generate credentials | Configure the bot | Access control (recommended)

### DOC-0037 · WhatsApp (Web channel)

- path: `channels/whatsapp.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 437
- headings: WhatsApp (Web channel) | Quick setup | Deployment patterns | Runtime model | Access control and activation | Personal-number and self-chat behavior | Message normalization and context | Delivery, chunking, and media

### DOC-0038 · Zalo (Bot API)

- path: `channels/zalo.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 189
- headings: Zalo (Bot API) | Plugin required | Quick setup (beginner) | What it is | Setup (fast path) | 1) Create a bot token (Zalo Bot Platform) | 2) Configure the token (env or config) | How it works (behavior)

### DOC-0039 · Zalo Personal (unofficial)

- path: `channels/zalouser.md`
- locale: `en`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 140
- headings: Zalo Personal (unofficial) | Plugin required | Prerequisite: zca-cli | Quick setup (beginner) | What it is | Naming | Finding IDs (directory) | Limits

### DOC-0040 · CI Pipeline

- path: `ci.md`
- locale: `en`
- category: `ci.md`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 51
- headings: CI Pipeline | Job Overview | Fail-Fast Order | Runners | Local Equivalents

### DOC-0041 · acp

- path: `cli/acp.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 170
- headings: acp | Usage | Remote Gateway | Attach to an existing session key | Attach by label (must already exist) | Reset the session key before the first prompt | ACP client (debug) | Point the spawned bridge at a remote Gateway

### DOC-0042 · `openclaw agent`

- path: `cli/agent.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 24
- headings: `openclaw agent` | Examples

### DOC-0043 · `openclaw agents`

- path: `cli/agents.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 75
- headings: `openclaw agents` | Examples | Identity files | Set identity

### DOC-0044 · `openclaw approvals`

- path: `cli/approvals.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 50
- headings: `openclaw approvals` | Common commands | Replace approvals from a file | Allowlist helpers | Notes

### DOC-0045 · `openclaw browser`

- path: `cli/browser.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 107
- headings: `openclaw browser` | Common flags | Quick start (local) | Profiles | Tabs | Snapshot / screenshot / actions | Chrome extension relay (attach via toolbar button) | Remote browser control (node host proxy)

### DOC-0046 · `openclaw channels`

- path: `cli/channels.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 79
- headings: `openclaw channels` | Common commands | Add / remove accounts | Login / logout (interactive) | Troubleshooting | Capabilities probe | Resolve names to IDs

### DOC-0047 · `openclaw config`

- path: `cli/config.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 50
- headings: `openclaw config` | Examples | Paths | Values

### DOC-0048 · `openclaw configure`

- path: `cli/configure.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 33
- headings: `openclaw configure` | Examples

### DOC-0049 · `openclaw cron`

- path: `cli/cron.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 44
- headings: `openclaw cron` | Common edits

### DOC-0050 · `openclaw dashboard`

- path: `cli/dashboard.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 16
- headings: `openclaw dashboard`

### DOC-0051 · `openclaw devices`

- path: `cli/devices.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 73
- headings: `openclaw devices` | Commands | `openclaw devices list` | `openclaw devices approve [requestId] [--latest]` | `openclaw devices reject <requestId>` | `openclaw devices rotate --device <id> --role <role> [--scope <scope...>]` | `openclaw devices revoke --device <id> --role <role>` | Common options

### DOC-0052 · `openclaw directory`

- path: `cli/directory.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 63
- headings: `openclaw directory` | Common flags | Notes | Using results with `message send` | ID formats (by channel) | Self (“me”) | Peers (contacts/users) | Groups

### DOC-0053 · `openclaw dns`

- path: `cli/dns.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 23
- headings: `openclaw dns` | Setup

### DOC-0054 · `openclaw docs`

- path: `cli/docs.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 15
- headings: `openclaw docs`

### DOC-0055 · `openclaw doctor`

- path: `cli/doctor.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-troubleshooting`
- line_count: 41
- headings: `openclaw doctor` | Examples | macOS: `launchctl` env overrides

### DOC-0056 · Gateway CLI

- path: `cli/gateway.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 202
- headings: Gateway CLI | Run the Gateway | Options | Query a running Gateway | `gateway health` | `gateway status` | `gateway probe` | Remote over SSH (Mac app parity)

### DOC-0057 · `openclaw health`

- path: `cli/health.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 21
- headings: `openclaw health`

### DOC-0058 · `openclaw hooks`

- path: `cli/hooks.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 307
- headings: `openclaw hooks` | List All Hooks | Get Hook Information | Check Hooks Eligibility | Enable a Hook | Disable a Hook | Install Hooks | Local directory

### DOC-0059 · CLI reference

- path: `cli/index.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 1036
- headings: CLI reference | Command pages | Global flags | Output styling | Color palette | Command tree | Security | Plugins

### DOC-0060 · `openclaw logs`

- path: `cli/logs.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 28
- headings: `openclaw logs` | Examples

### DOC-0061 · `openclaw memory`

- path: `cli/memory.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 45
- headings: `openclaw memory` | Examples | Options

### DOC-0062 · `openclaw message`

- path: `cli/message.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 260
- headings: `openclaw message` | Usage | Common flags | Actions | Core | Threads | Emojis | Stickers

### DOC-0063 · `openclaw models`

- path: `cli/models.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 79
- headings: `openclaw models` | Common commands | `models status` | Aliases + fallbacks | Auth profiles

### DOC-0064 · `openclaw node`

- path: `cli/node.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 112
- headings: `openclaw node` | Why use a node host? | Browser proxy (zero-config) | Run (foreground) | Service (background) | Pairing | Exec approvals

### DOC-0065 · `openclaw nodes`

- path: `cli/nodes.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 73
- headings: `openclaw nodes` | Common commands | Invoke / run | Exec-style defaults

### DOC-0066 · `openclaw onboard`

- path: `cli/onboard.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 76
- headings: `openclaw onboard` | Related guides | Examples | Promptless endpoint selection | Other Z.AI endpoint choices: | --auth-choice zai-coding-cn | --auth-choice zai-global | --auth-choice zai-cn

### DOC-0067 · `openclaw pairing`

- path: `cli/pairing.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 21
- headings: `openclaw pairing` | Commands

### DOC-0068 · `openclaw plugins`

- path: `cli/plugins.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 84
- headings: `openclaw plugins` | Commands | Install | Uninstall | Update

### DOC-0069 · `openclaw reset`

- path: `cli/reset.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 17
- headings: `openclaw reset`

### DOC-0070 · Sandbox CLI

- path: `cli/sandbox.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 152
- headings: Sandbox CLI | Overview | Commands | `openclaw sandbox explain` | `openclaw sandbox list` | `openclaw sandbox recreate` | Use Cases | After updating Docker images

### DOC-0071 · `openclaw security`

- path: `cli/security.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 59
- headings: `openclaw security` | Audit | JSON output | What `--fix` changes

### DOC-0072 · `openclaw sessions`

- path: `cli/sessions.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 16
- headings: `openclaw sessions`

### DOC-0073 · `openclaw setup`

- path: `cli/setup.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 29
- headings: `openclaw setup` | Examples

### DOC-0074 · `openclaw skills`

- path: `cli/skills.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 26
- headings: `openclaw skills` | Commands

### DOC-0075 · `openclaw status`

- path: `cli/status.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 26
- headings: `openclaw status`

### DOC-0076 · `openclaw system`

- path: `cli/system.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 60
- headings: `openclaw system` | Common commands | `system event` | `system heartbeat last|enable|disable` | `system presence` | Notes

### DOC-0077 · `openclaw tui`

- path: `cli/tui.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 23
- headings: `openclaw tui` | Examples

### DOC-0078 · `openclaw uninstall`

- path: `cli/uninstall.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-upgrade`
- line_count: 17
- headings: `openclaw uninstall`

### DOC-0079 · `openclaw update`

- path: `cli/update.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 98
- headings: `openclaw update` | Usage | Options | `update status` | `update wizard` | What it does | Git checkout flow | `--update` shorthand

### DOC-0080 · `openclaw voicecall`

- path: `cli/voicecall.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 34
- headings: `openclaw voicecall` | Common commands | Exposing webhooks (Tailscale)

### DOC-0081 · `openclaw webhooks`

- path: `cli/webhooks.md`
- locale: `en`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 25
- headings: `openclaw webhooks` | Gmail

### DOC-0082 · Agent Loop (OpenClaw)

- path: `concepts/agent-loop.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 148
- headings: Agent Loop (OpenClaw) | Entry points | How it works (high-level) | Queueing + concurrency | Session + workspace preparation | Prompt assembly + system prompt | Hook points (where you can intercept) | Internal hooks (Gateway hooks)

### DOC-0083 · Agent workspace

- path: `concepts/agent-workspace.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 234
- headings: Agent workspace | Default location | Extra workspace folders | Workspace file map (what each file means) | What is NOT in the workspace | Git backup (recommended, private) | 1) Initialize the repo | 2) Add a private remote (beginner-friendly options)

### DOC-0084 · Agent Runtime 🤖

- path: `concepts/agent.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 123
- headings: Agent Runtime 🤖 | Workspace (required) | Bootstrap files (injected) | Built-in tools | Skills | pi-mono integration | Sessions | Steering while streaming

### DOC-0085 · Gateway architecture

- path: `concepts/architecture.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 136
- headings: Gateway architecture | Overview | Components and flows | Gateway (daemon) | Clients (mac app / CLI / web admin) | Nodes (macOS / iOS / Android / headless) | WebChat | Connection lifecycle (single client)

### DOC-0086 · Context Window & Compaction

- path: `concepts/compaction.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 61
- headings: Context Window & Compaction | What compaction is | Configuration | Auto-compaction (default on) | Manual compaction | Context window source | Compaction vs pruning | Tips

### DOC-0087 · Context

- path: `concepts/context.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 161
- headings: Context | Quick start (inspect context) | Example output | `/context list` | `/context detail` | What counts toward the context window | How OpenClaw builds the system prompt | Injected workspace files (Project Context)

### DOC-0088 · Highlights

- path: `concepts/features.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 53
- headings: Highlights | Full list

### DOC-0089 · Markdown formatting

- path: `concepts/markdown-formatting.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 130
- headings: Markdown formatting | Goals | Pipeline | IR example | Where it is used | Table handling | Chunking rules | Link policy

### DOC-0090 · Memory

- path: `concepts/memory.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 720
- headings: Memory | Memory files (Markdown) | When to write memory | Automatic memory flush (pre-compaction ping) | Vector memory search | QMD backend (experimental) | Additional memory paths | Gemini embeddings (native)

### DOC-0091 · Messages

- path: `concepts/messages.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 154
- headings: Messages | Message flow (high level) | Inbound dedupe | Inbound debouncing | Sessions and devices | Inbound bodies and history context | Queueing and followups | Streaming, chunking, and batching

### DOC-0092 · Model failover

- path: `concepts/model-failover.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 149
- headings: Model failover | Auth storage (keys + OAuth) | Profile IDs | Rotation order | Session stickiness (cache-friendly) | Why OAuth can “look lost” | Cooldowns | Billing disables

### DOC-0093 · Model providers

- path: `concepts/model-providers.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 360
- headings: Model providers | Quick rules | API key rotation | Built-in providers (pi-ai catalog) | OpenAI | Anthropic | OpenAI Code (Codex) | OpenCode Zen

### DOC-0094 · Models CLI

- path: `concepts/models.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 208
- headings: Models CLI | How model selection works | Quick model picks (anecdotal) | Setup wizard (recommended) | Config keys (overview) | “Model is not allowed” (and why replies stop) | Switching models in chat (`/model`) | CLI commands

### DOC-0095 · Multi-Agent Routing

- path: `concepts/multi-agent.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 536
- headings: Multi-Agent Routing | What is “one agent”? | Paths (quick map) | Single-agent mode (default) | Agent helper | Quick start | Multiple agents = multiple people, multiple personalities | One WhatsApp number, multiple people (DM split)

### DOC-0096 · OAuth

- path: `concepts/oauth.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 145
- headings: OAuth | The token sink (why it exists) | Storage (where tokens live) | Anthropic setup-token (subscription auth) | OAuth exchange (how login works) | Anthropic (Claude Pro/Max) setup-token | OpenAI Codex (ChatGPT OAuth) | Refresh + expiry

### DOC-0097 · Presence

- path: `concepts/presence.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 102
- headings: Presence | Presence fields (what shows up) | Producers (where presence comes from) | 1) Gateway self entry | 2) WebSocket connect | Why one‑off CLI commands don’t show up | 3) `system-event` beacons | 4) Node connects (role: node)

### DOC-0098 · Command Queue (2026-01-16)

- path: `concepts/queue.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 89
- headings: Command Queue (2026-01-16) | Why | How it works | Queue modes (per channel) | Queue options | Per-session overrides | Scope and guarantees | Troubleshooting

### DOC-0099 · Retry policy

- path: `concepts/retry.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 69
- headings: Retry policy | Goals | Defaults | Behavior | Discord | Telegram | Configuration | Notes

### DOC-0100 · Session Pruning

- path: `concepts/session-pruning.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 123
- headings: Session Pruning | When it runs | Smart defaults (Anthropic) | What this improves (cost + cache behavior) | What can be pruned | Context window estimation | Mode | cache-ttl

### DOC-0101 · Session Tools

- path: `concepts/session-tool.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 215
- headings: Session Tools | Tool Names | Key Model | sessions_list | sessions_history | sessions_send | Channel Field | Security / Send Policy

### DOC-0102 · Session Management

- path: `concepts/session.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 206
- headings: Session Management | Secure DM mode (recommended for multi-user setups) | Gateway is the source of truth | Where state lives | Session pruning | Pre-compaction memory flush | Mapping transports → session keys | Lifecycle

### DOC-0103 · Sessions

- path: `concepts/sessions.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 10
- headings: Sessions

### DOC-0104 · Streaming + chunking

- path: `concepts/streaming.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 136
- headings: Streaming + chunking | Block streaming (channel messages) | Chunking algorithm (low/high bounds) | Coalescing (merge streamed blocks) | Human-like pacing between blocks | “Stream chunks or everything” | Telegram preview streaming (token-ish)

### DOC-0105 · System Prompt

- path: `concepts/system-prompt.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 129
- headings: System Prompt | Structure | Prompt modes | Workspace bootstrap injection | Time handling | Skills | Documentation

### DOC-0106 · Timezones

- path: `concepts/timezone.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 91
- headings: Timezones | Message envelopes (local by default) | Examples | Tool payloads (raw provider data + normalized fields) | User timezone for the system prompt

### DOC-0107 · TypeBox as protocol source of truth

- path: `concepts/typebox.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 289
- headings: TypeBox as protocol source of truth | Mental model (30 seconds) | Where the schemas live | Current pipeline | How the schemas are used at runtime | Example frames | Minimal client (Node.js) | Worked example: add a method end‑to‑end

### DOC-0108 · Typing indicators

- path: `concepts/typing-indicators.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 68
- headings: Typing indicators | Defaults | Modes | Configuration | Notes

### DOC-0109 · Usage tracking

- path: `concepts/usage-tracking.md`
- locale: `en`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 35
- headings: Usage tracking | What it is | Where it shows up | Providers + credentials

### DOC-0110 · Date & Time

- path: `date-time.md`
- locale: `en`
- category: `date-time.md`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 128
- headings: Date & Time | Message envelopes (local by default) | Examples | System prompt: Current Date & Time | System event lines (local by default) | Configure user timezone + format | Time format detection (auto) | Tool payloads + connectors (raw provider time + normalized fields)

### DOC-0111 · Node + tsx "\_\_name is not a function" crash

- path: `debug/node-issue.md`
- locale: `en`
- category: `debug`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 85
- headings: Node + tsx "\_\_name is not a function" crash | Summary | Environment | Repro (Node-only) | in repo root | Minimal repro in repo | Node version check | Notes / hypothesis

### DOC-0112 · Diagnostics Flags

- path: `diagnostics/flags.md`
- locale: `en`
- category: `diagnostics`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 91
- headings: Diagnostics Flags | How it works | Enable via config | Env override (one-off) | Where logs go | Extract logs | Notes

### DOC-0113 · Onboarding + Config Protocol

- path: `experiments/onboarding-config-protocol.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 40
- headings: Onboarding + Config Protocol | Components | Gateway RPC | UI Hints | Notes

### DOC-0114 · Browser Evaluate CDP Refactor Plan

- path: `experiments/plans/browser-evaluate-cdp-refactor.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 229
- headings: Browser Evaluate CDP Refactor Plan | Context | Goals | Non-goals | Current Architecture (Why It Gets Stuck) | Proposed Architecture | 1. Deadline Propagation | 2. Separate Evaluate Engine (CDP Path)

### DOC-0115 · Cron Add Hardening & Schema Alignment

- path: `experiments/plans/cron-add-hardening.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-ops-monitoring`
- line_count: 63
- headings: Cron Add Hardening & Schema Alignment | Context | Goals | Non-goals | Findings (current gaps) | What changed | Current behavior | Verification

### DOC-0116 · Telegram Allowlist Hardening

- path: `experiments/plans/group-policy-hardening.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 40
- headings: Telegram Allowlist Hardening | Summary | What changed | Examples | Why it matters | Related docs

### DOC-0117 · OpenResponses Gateway Integration Plan

- path: `experiments/plans/openresponses-gateway.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 123
- headings: OpenResponses Gateway Integration Plan | Context | Goals | Non-goals | Research Summary | Proposed Architecture | Deprecation Path for Chat Completions | Phase 1 Support Subset

### DOC-0118 · PTY and Process Supervision Plan

- path: `experiments/plans/pty-process-supervision.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 192
- headings: PTY and Process Supervision Plan | 1. Problem and goal | 2. Scope and boundaries | 3. Implemented in this branch | Supervisor baseline already present | This pass completed | 4. Remaining gaps and decisions | Reliability status

### DOC-0119 · Model Config (Exploration)

- path: `experiments/proposals/model-config.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 36
- headings: Model Config (Exploration) | Motivation | Possible direction (high level) | Open questions

### DOC-0120 · Workspace Memory v2 (offline): research notes

- path: `experiments/research/memory.md`
- locale: `en`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 228
- headings: Workspace Memory v2 (offline): research notes | Why change? | Design goals | North star model (Hindsight × Letta) | Proposed architecture (Markdown source-of-truth + derived index) | Canonical store (git-friendly) | Derived store (machine recall) | Retain / Recall / Reflect (operational loop)

### DOC-0121 · Authentication

- path: `gateway/authentication.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 162
- headings: Authentication | Recommended Anthropic setup (API key) | Anthropic: setup-token (subscription auth) | Checking model auth status | API key rotation behavior (gateway) | Controlling which credential is used | Per-session (chat command) | Per-agent (CLI override)

### DOC-0122 · Background Exec + Process Tool

- path: `gateway/background-process.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 96
- headings: Background Exec + Process Tool | exec tool | Child process bridging | process tool | Examples

### DOC-0123 · Bonjour / mDNS discovery

- path: `gateway/bonjour.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 177
- headings: Bonjour / mDNS discovery | Wide‑area Bonjour (Unicast DNS‑SD) over Tailscale | Gateway config (recommended) | One‑time DNS server setup (gateway host) | Tailscale DNS settings | Gateway listener security (recommended) | What advertises | Service types

### DOC-0124 · Bridge protocol (legacy node transport)

- path: `gateway/bridge-protocol.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 91
- headings: Bridge protocol (legacy node transport) | Why we have both | Transport | Handshake + pairing | Frames | Exec lifecycle events | Tailnet usage | Versioning

### DOC-0125 · CLI backends (fallback runtime)

- path: `gateway/cli-backends.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 225
- headings: CLI backends (fallback runtime) | Beginner-friendly quick start | Using it as a fallback | Configuration overview | Example configuration | How it works | Sessions | Images (pass-through)

### DOC-0126 · Configuration Examples

- path: `gateway/configuration-examples.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 620
- headings: Configuration Examples | Quick start | Absolute minimum | Recommended starter | Expanded example (major options) | Common patterns | Multi-platform setup | Secure DM mode (shared inbox / multi-user DMs)

### DOC-0127 · Configuration Reference

- path: `gateway/configuration-reference.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 2443
- headings: Configuration Reference | Channels | DM and group access | WhatsApp | Telegram | Discord | Google Chat | Slack

### DOC-0128 · Configuration

- path: `gateway/configuration.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 483
- headings: Configuration | Minimal config | Editing config | Strict validation | Common tasks | Config hot reload | Reload modes | What hot-applies vs what needs a restart

### DOC-0129 · Discovery & transports

- path: `gateway/discovery.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 123
- headings: Discovery & transports | Terms | Why we keep both “direct” and SSH | Discovery inputs (how clients learn where the gateway is) | 1) Bonjour / mDNS (LAN only) | Service beacon details | 2) Tailnet (cross-network) | 3) Manual / SSH target

### DOC-0130 · Doctor

- path: `gateway/doctor.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-troubleshooting`
- line_count: 282
- headings: Doctor | Quick start | Headless / automation | What it does (summary) | Detailed behavior and rationale | 0) Optional update (git installs) | 1) Config normalization | 2) Legacy config key migrations

### DOC-0131 · Gateway lock

- path: `gateway/gateway-lock.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 34
- headings: Gateway lock | Why | Mechanism | Error surface | Operational notes

### DOC-0132 · Health Checks (CLI)

- path: `gateway/health.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-ops-monitoring`
- line_count: 35
- headings: Health Checks (CLI) | Quick checks | Deep diagnostics | When something fails | Dedicated "health" command

### DOC-0133 · Heartbeat (Gateway)

- path: `gateway/heartbeat.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-ops-monitoring`
- line_count: 365
- headings: Heartbeat (Gateway) | Quick start (beginner) | Defaults | What the heartbeat prompt is for | Response contract | Config | Scope and precedence | Per-agent heartbeats

### DOC-0134 · Gateway runbook

- path: `gateway/index.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 254
- headings: Gateway runbook | 5-minute local startup | debug/trace mirrored to stdio | force-kill listener on selected port, then start | Runtime model | Port and bind precedence | Hot reload modes | Operator command set

### DOC-0135 · Local models

- path: `gateway/local-models.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 150
- headings: Local models | Recommended: LM Studio + MiniMax M2.1 (Responses API, full-size) | Hybrid config: hosted primary, local fallback | Local-first with hosted safety net | Regional hosting / data routing | Other OpenAI-compatible local proxies | Troubleshooting

### DOC-0136 · Logging

- path: `gateway/logging.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 113
- headings: Logging | File-based logger | Console capture | Tool summary redaction | Gateway WebSocket logs | WS log style | optimized (only errors/slow) | show all WS traffic (paired)

### DOC-0137 · Multiple Gateways (same host)

- path: `gateway/multiple-gateways.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 112
- headings: Multiple Gateways (same host) | Isolation checklist (required) | Recommended: profiles (`--profile`) | main | rescue | Rescue-bot guide | How to install (rescue bot) | Main bot (existing or fresh, without --profile param)

### DOC-0138 · Core rules

- path: `gateway/network-model.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 20
- headings: Core rules

### DOC-0139 · OpenAI Chat Completions (HTTP)

- path: `gateway/openai-http-api.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 119
- headings: OpenAI Chat Completions (HTTP) | Authentication | Choosing an agent | Enabling the endpoint | Disabling the endpoint | Session behavior | Streaming (SSE) | Examples

### DOC-0140 · OpenResponses API (HTTP)

- path: `gateway/openresponses-http-api.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 333
- headings: OpenResponses API (HTTP) | Authentication | Choosing an agent | Enabling the endpoint | Disabling the endpoint | Session behavior | Request shape (supported) | Items (input)

### DOC-0141 · Gateway-owned pairing (Option B)

- path: `gateway/pairing.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 99
- headings: Gateway-owned pairing (Option B) | Concepts | How pairing works | CLI workflow (headless friendly) | API surface (gateway protocol) | Auto-approval (macOS app) | Storage (local, private) | Transport behavior

### DOC-0142 · Gateway protocol (WebSocket)

- path: `gateway/protocol.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 221
- headings: Gateway protocol (WebSocket) | Transport | Handshake (connect) | Node example | Framing | Roles + scopes | Roles | Scopes (operator)

### DOC-0143 · Running OpenClaw.app with a Remote Gateway

- path: `gateway/remote-gateway-readme.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 158
- headings: Running OpenClaw.app with a Remote Gateway | Overview | Quick Setup | Step 1: Add SSH Config | Step 2: Copy SSH Key | Step 3: Set Gateway Token | Step 4: Start SSH Tunnel | Step 5: Restart OpenClaw.app

### DOC-0144 · Remote access (SSH, tunnels, and tailnets)

- path: `gateway/remote.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 129
- headings: Remote access (SSH, tunnels, and tailnets) | The core idea | Common VPN/tailnet setups (where the agent lives) | 1) Always-on Gateway in your tailnet (VPS or home server) | 2) Home desktop runs the Gateway, laptop is remote control | 3) Laptop runs the Gateway, remote access from other machines | Command flow (what runs where) | SSH tunnel (CLI + tools)

### DOC-0145 · Sandbox vs Tool Policy vs Elevated

- path: `gateway/sandbox-vs-tool-policy-vs-elevated.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 128
- headings: Sandbox vs Tool Policy vs Elevated | Quick debug | Sandbox: where tools run | Bind mounts (security quick check) | Tool policy: which tools exist/are callable | Tool groups (shorthands) | Elevated: exec-only “run on host” | Common “sandbox jail” fixes

### DOC-0146 · Sandboxing

- path: `gateway/sandboxing.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 199
- headings: Sandboxing | What gets sandboxed | Modes | Scope | Workspace access | Custom bind mounts | Images + setup | setupCommand (one-time container setup)

### DOC-0147 · Security 🔒

- path: `gateway/security/index.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-security`
- line_count: 883
- headings: Security 🔒 | Quick check: `openclaw security audit` | Hardened baseline in 60 seconds | Shared inbox quick rule | What the audit checks (high level) | Credential storage map | Security Audit Checklist | Security audit glossary

### DOC-0148 · Tailscale (Gateway dashboard)

- path: `gateway/tailscale.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 127
- headings: Tailscale (Gateway dashboard) | Modes | Auth | Config examples | Tailnet-only (Serve) | Tailnet-only (bind to Tailnet IP) | Public internet (Funnel + shared password) | CLI examples

### DOC-0149 · Tools Invoke (HTTP)

- path: `gateway/tools-invoke-http-api.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 110
- headings: Tools Invoke (HTTP) | Authentication | Request body | Policy + routing behavior | Responses | Example

### DOC-0150 · Gateway troubleshooting

- path: `gateway/troubleshooting.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-troubleshooting`
- line_count: 318
- headings: Gateway troubleshooting | Command ladder | No replies | Dashboard control ui connectivity | Gateway service not running | Channel connected messages not flowing | Cron and heartbeat delivery | Node paired tool fails

### DOC-0151 · Trusted Proxy Auth

- path: `gateway/trusted-proxy-auth.md`
- locale: `en`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 267
- headings: Trusted Proxy Auth | When to Use | When NOT to Use | How It Works | Configuration | Configuration Reference | Proxy Setup Examples | Pomerium

### DOC-0152 · Debugging

- path: `help/debugging.md`
- locale: `en`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 162
- headings: Debugging | Runtime debug overrides | Gateway watch mode | Dev profile + dev gateway (--dev) | Raw stream logging (OpenClaw) | Raw chunk logging (pi-mono) | Safety notes

### DOC-0153 · Environment variables

- path: `help/environment.md`
- locale: `en`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 107
- headings: Environment variables | Precedence (highest → lowest) | Config `env` block | Shell env import | Env var substitution in config | Path-related env vars | `OPENCLAW_HOME` | Related

### DOC-0154 · FAQ

- path: `help/faq.md`
- locale: `en`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 2859
- headings: FAQ | Table of contents | First 60 seconds if something's broken | Quick start and first-run setup | Im stuck whats the fastest way to get unstuck | What's the recommended way to install and set up OpenClaw | How do I open the dashboard after onboarding | How do I authenticate the dashboard token on localhost vs remote

### DOC-0155 · Help

- path: `help/index.md`
- locale: `en`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 21
- headings: Help

### DOC-0156 · Scripts

- path: `help/scripts.md`
- locale: `en`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 28
- headings: Scripts | Conventions | Auth monitoring scripts | When adding scripts

### DOC-0157 · Testing

- path: `help/testing.md`
- locale: `en`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 379
- headings: Testing | Quick start | Test suites (what runs where) | Unit / integration (default) | E2E (gateway smoke) | Live (real providers + real models) | Which suite should I run? | Live: model smoke (profile keys)

### DOC-0158 · Troubleshooting

- path: `help/troubleshooting.md`
- locale: `en`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 265
- headings: Troubleshooting | First 60 seconds | Decision tree

### DOC-0159 · OpenClaw 🦞

- path: `index.md`
- locale: `en`
- category: `index.md`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 192
- headings: OpenClaw 🦞 | What is OpenClaw? | How it works | Key capabilities | Quick start | Dashboard | Configuration (optional) | Start here

### DOC-0160 · Ansible Installation

- path: `install/ansible.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 208
- headings: Ansible Installation | Quick Start | What You Get | Requirements | What Gets Installed | Post-Install Setup | Quick commands | Check service status

### DOC-0161 · Bun (experimental)

- path: `install/bun.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 59
- headings: Bun (experimental) | Status | Install | Build / Test (Bun) | Bun lifecycle scripts (blocked by default) | Caveats

### DOC-0162 · Development channels

- path: `install/development-channels.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 75
- headings: Development channels | Switching channels | Plugins and channels | Tagging best practices | macOS app availability

### DOC-0163 · Docker (optional)

- path: `install/docker.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 585
- headings: Docker (optional) | Is Docker right for me? | Requirements | Containerized Gateway (Docker Compose) | Quick start (recommended) | Shell Helpers (optional) | Manual flow (compose) | Control UI token + pairing (Docker)

### DOC-0164 · exe.dev

- path: `install/exe-dev.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 126
- headings: exe.dev | Beginner quick path | What you need | Automated Install with Shelley | Manual installation | 1) Create the VM | 2) Install prerequisites (on the VM) | 3) Install OpenClaw

### DOC-0165 · Fly.io Deployment

- path: `install/fly.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 486
- headings: Fly.io Deployment | What you need | Beginner quick path | 1) Create the Fly app | Clone the repo | Create a new Fly app (pick your own name) | Create a persistent volume (1GB is usually enough) | 2) Configure fly.toml

### DOC-0166 · OpenClaw on GCP Compute Engine (Docker, Production VPS Guide)

- path: `install/gcp.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 500
- headings: OpenClaw on GCP Compute Engine (Docker, Production VPS Guide) | Goal | What are we doing (simple terms)? | Quick path (experienced operators) | What you need | 1) Install gcloud CLI (or use Console) | 2) Create a GCP project | 3) Create the VM

### DOC-0167 · OpenClaw on Hetzner (Docker, Production VPS Guide)

- path: `install/hetzner.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 348
- headings: OpenClaw on Hetzner (Docker, Production VPS Guide) | Goal | What are we doing (simple terms)? | Quick path (experienced operators) | What you need | 1) Provision the VPS | 2) Install Docker (on the VPS) | 3) Clone the OpenClaw repository

### DOC-0168 · Install

- path: `install/index.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 214
- headings: Install | System requirements | Install methods | Other install methods | After install | Troubleshooting: `openclaw` not found | Update / uninstall

### DOC-0169 · Installer internals

- path: `install/installer.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 405
- headings: Installer internals | Quick commands | install.sh | Flow (install.sh) | Source checkout detection | Examples (install.sh) | install-cli.sh | Flow (install-cli.sh)

### DOC-0170 · OpenClaw on macOS VMs (Sandboxing)

- path: `install/macos-vm.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 281
- headings: OpenClaw on macOS VMs (Sandboxing) | Recommended default (most users) | macOS VM options | Local VM on your Apple Silicon Mac (Lume) | Hosted Mac providers (cloud) | Quick path (Lume, experienced users) | What you need (Lume) | 1) Install Lume

### DOC-0171 · Migrating OpenClaw to a new machine

- path: `install/migrating.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 192
- headings: Migrating OpenClaw to a new machine | Before you start (what you are migrating) | 1) Identify your state directory | 2) Identify your workspace | 3) Understand what you will preserve | Migration steps (recommended) | Step 0 — Make a backup (old machine) | Adjust paths if you use a profile or custom locations

### DOC-0172 · Nix Installation

- path: `install/nix.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 98
- headings: Nix Installation | Quick Start | What you get | Nix Mode Runtime Behavior | Config + state paths | Runtime behavior in Nix mode | Packaging note (macOS) | Related

### DOC-0173 · Node.js

- path: `install/node.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 138
- headings: Node.js | Check your version | Install Node | Troubleshooting | `openclaw: command not found` | Permission errors on `npm install -g` (Linux)

### DOC-0174 · How to get started

- path: `install/northflank.mdx`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 53
- headings: How to get started | What you get | Setup flow | Getting chat tokens | Telegram bot token | Discord bot token

### DOC-0175 · Podman

- path: `install/podman.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 108
- headings: Podman | Requirements | Quick start | Systemd (Quadlet, optional) | The openclaw user (non-login) | Environment and config | Useful commands | Troubleshooting

### DOC-0176 · Quick checklist (new users)

- path: `install/railway.mdx`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 99
- headings: Quick checklist (new users) | One-click deploy | What you get | Required Railway settings | Public Networking | Volume (required) | Variables | Setup flow

### DOC-0177 · Prerequisites

- path: `install/render.mdx`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 159
- headings: Prerequisites | Deploy with a Render Blueprint | Understanding the Blueprint | Choosing a plan | After deployment | Complete the setup wizard | Access the Control UI | Render Dashboard features

### DOC-0178 · Uninstall

- path: `install/uninstall.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 128
- headings: Uninstall | Easy path (CLI still installed) | Manual service removal (CLI not installed) | macOS (launchd) | Linux (systemd user unit) | Windows (Scheduled Task) | Normal install vs source checkout | Normal install (install.sh / npm / pnpm / bun)

### DOC-0179 · Updating

- path: `install/updating.md`
- locale: `en`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 231
- headings: Updating | Recommended: re-run the website installer (upgrade in place) | Before you update | Update (global install) | Update (`openclaw update`) | Update (Control UI / RPC) | Update (from source) | Always Run: `openclaw doctor`

### DOC-0180 · AGENTS.md - ja-JP docs translation workspace

- path: `ja-JP/AGENTS.md`
- locale: `en`
- category: `ja-JP`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 37
- headings: AGENTS.md - ja-JP docs translation workspace | Read When | Pipeline (docs-i18n) | Bulk (doc mode; parallel OK) | Single file | Small patches (segment mode; uses TM; no parallel)

### DOC-0181 · OpenClaw 🦞

- path: `ja-JP/index.md`
- locale: `en`
- category: `ja-JP`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 186
- headings: OpenClaw 🦞 | 仕組み | 主な機能 | クイックスタート | ダッシュボード | 設定（オプション） | ここから始める | 詳細

### DOC-0182 · はじめに

- path: `ja-JP/start/getting-started.md`
- locale: `en`
- category: `ja-JP`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 125
- headings: はじめに | 前提条件 | クイックセットアップ（CLI） | オプションの確認と追加機能 | さらに詳しく | 完了後の状態 | 次のステップ

### DOC-0183 · オンボーディングウィザード（CLI）

- path: `ja-JP/start/wizard.md`
- locale: `en`
- category: `ja-JP`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 77
- headings: オンボーディングウィザード（CLI） | クイックスタート vs 詳細設定 | CLIオンボーディングの詳細 | よく使うフォローアップコマンド | 関連ドキュメント

### DOC-0184 · Logging

- path: `logging.md`
- locale: `en`
- category: `logging.md`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 350
- headings: Logging | Where logs live | How to read logs | CLI: live tail (recommended) | Control UI (web) | Channel-only logs | Log formats | File logs (JSONL)

### DOC-0185 · Network hub

- path: `network.md`
- locale: `en`
- category: `network.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 54
- headings: Network hub | Core model | Pairing + identity | Discovery + transports | Nodes + transports | Security

### DOC-0186 · Audio / Voice Notes — 2026-01-17

- path: `nodes/audio.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 133
- headings: Audio / Voice Notes — 2026-01-17 | What works | Auto-detection (default) | Config examples | Provider + CLI fallback (OpenAI + Whisper CLI) | Provider-only with scope gating | Provider-only (Deepgram) | Notes & limits

### DOC-0187 · Camera capture (agent)

- path: `nodes/camera.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 156
- headings: Camera capture (agent) | iOS node | User setting (default on) | Commands (via Gateway `node.invoke`) | Foreground requirement | CLI helper (temp files + MEDIA) | Android node | Android user setting (default on)

### DOC-0188 · Image & Media Support — 2025-12-05

- path: `nodes/images.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 72
- headings: Image & Media Support — 2025-12-05 | Goals | CLI Surface | WhatsApp Web channel behavior | Auto-Reply Pipeline | Inbound Media to Commands (Pi) | Limits & Errors | Notes for Tests

### DOC-0189 · Nodes

- path: `nodes/index.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 342
- headings: Nodes | Pairing + status | Remote node host (system.run) | What runs where | Start a node host (foreground) | Remote gateway via SSH tunnel (loopback bind) | Terminal A (keep running): forward local 18790 -> gateway 127.0.0.1:18789 | Terminal B: export the gateway token and connect through the tunnel

### DOC-0190 · Location command (nodes)

- path: `nodes/location-command.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 113
- headings: Location command (nodes) | TL;DR | Why a selector (not just a switch) | Settings model | Permissions mapping (node.permissions) | Command: `location.get` | Background behavior (future) | Model/tooling integration

### DOC-0191 · Media Understanding (Inbound) — 2026-01-17

- path: `nodes/media-understanding.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 379
- headings: Media Understanding (Inbound) — 2026-01-17 | Goals | High‑level behavior | Config overview | Model entries | Defaults and limits | Auto-detect media understanding (default) | Capabilities (optional)

### DOC-0192 · Talk Mode

- path: `nodes/talk.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 90
- headings: Talk Mode | Behavior (macOS) | Voice directives in replies | Config (`~/.openclaw/openclaw.json`) | macOS UI | Notes

### DOC-0193 · Node troubleshooting

- path: `nodes/troubleshooting.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `ev-troubleshooting`
- line_count: 112
- headings: Node troubleshooting | Command ladder | Foreground requirements | Permissions matrix | Pairing versus approvals | Common node error codes | Fast recovery loop

### DOC-0194 · Voice Wake (Global Wake Words)

- path: `nodes/voicewake.md`
- locale: `en`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 65
- headings: Voice Wake (Global Wake Words) | Storage (Gateway host) | Protocol | Methods | Events | Client behavior | macOS app | iOS node

### DOC-0195 · Perplexity Sonar

- path: `perplexity.md`
- locale: `en`
- category: `perplexity.md`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 80
- headings: Perplexity Sonar | API options | Perplexity (direct) | OpenRouter (alternative) | Config example | Switching from Brave | Models

### DOC-0196 · Pi Development Workflow

- path: `pi-dev.md`
- locale: `en`
- category: `pi-dev.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 70
- headings: Pi Development Workflow | Type Checking and Linting | Running Pi Tests | Manual Testing | Clean Slate Reset | References

### DOC-0197 · Pi Integration Architecture

- path: `pi.md`
- locale: `en`
- category: `pi.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 612
- headings: Pi Integration Architecture | Overview | Package Dependencies | File Structure | Core Integration Flow | 1. Running an Embedded Agent | 2. Session Creation | 3. Event Subscription

### DOC-0198 · Android App (Node)

- path: `platforms/android.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 151
- headings: Android App (Node) | Support snapshot | System control | Connection Runbook | Prerequisites | 1) Start the Gateway | 2) Verify discovery (optional) | Tailnet (Vienna ⇄ London) discovery via unicast DNS-SD

### DOC-0199 · OpenClaw on DigitalOcean

- path: `platforms/digitalocean.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 262
- headings: OpenClaw on DigitalOcean | Goal | Cost Comparison (2026) | Prerequisites | 1) Create a Droplet | 2) Connect via SSH | 3) Install OpenClaw | Update system

### DOC-0200 · Platforms

- path: `platforms/index.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 53
- headings: Platforms | Choose your OS | VPS & hosting | Common links | Gateway service install (CLI)

### DOC-0201 · iOS App (Node)

- path: `platforms/ios.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 108
- headings: iOS App (Node) | What it does | Requirements | Quick start (pair + connect) | Discovery paths | Bonjour (LAN) | Tailnet (cross-network) | Manual host/port

### DOC-0202 · Linux App

- path: `platforms/linux.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 94
- headings: Linux App | Beginner quick path (VPS) | Install | Gateway | Gateway service install (CLI) | System control (systemd user unit)

### DOC-0203 · Gateway on macOS (external launchd)

- path: `platforms/mac/bundled-gateway.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 73
- headings: Gateway on macOS (external launchd) | Install the CLI (required for local mode) | Launchd (Gateway as LaunchAgent) | Version compatibility | Smoke check

### DOC-0204 · Canvas (macOS app)

- path: `platforms/mac/canvas.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 125
- headings: Canvas (macOS app) | Where Canvas lives | Panel behavior | Agent API surface | A2UI in Canvas | A2UI commands (v0.8) | Triggering agent runs from Canvas | Security notes

### DOC-0205 · Gateway lifecycle on macOS

- path: `platforms/mac/child-process.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 69
- headings: Gateway lifecycle on macOS | Default behavior (launchd) | Unsigned dev builds | Attach-only mode | Remote mode | Why we prefer launchd

### DOC-0206 · macOS Developer Setup

- path: `platforms/mac/dev-setup.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 104
- headings: macOS Developer Setup | Prerequisites | 1. Install Dependencies | 2. Build and Package the App | 3. Install the CLI | Troubleshooting | Build Fails: Toolchain or SDK Mismatch | App Crashes on Permission Grant

### DOC-0207 · Health Checks on macOS

- path: `platforms/mac/health.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-ops-monitoring`
- line_count: 34
- headings: Health Checks on macOS | Menu bar | Settings | How the probe works | When in doubt

### DOC-0208 · Menu Bar Icon States

- path: `platforms/mac/icon.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 31
- headings: Menu Bar Icon States

### DOC-0209 · Logging (macOS)

- path: `platforms/mac/logging.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 57
- headings: Logging (macOS) | Rolling diagnostics file log (Debug pane) | Unified logging private data on macOS | Enable for OpenClaw (`bot.molt`) | Disable after debugging

### DOC-0210 · Menu Bar Status Logic

- path: `platforms/mac/menu-bar.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 81
- headings: Menu Bar Status Logic | What is shown | State model | IconState enum (Swift) | ActivityKind → glyph | Visual mapping | Status row text (menu) | Event ingestion

### DOC-0211 · Peekaboo Bridge (macOS UI automation)

- path: `platforms/mac/peekaboo.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 65
- headings: Peekaboo Bridge (macOS UI automation) | What this is (and isn’t) | Enable the bridge | Client discovery order | Security & permissions | Snapshot behavior (automation) | Troubleshooting

### DOC-0212 · macOS permissions (TCC)

- path: `platforms/mac/permissions.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 50
- headings: macOS permissions (TCC) | Requirements for stable permissions | Recovery checklist when prompts disappear | Files and folders permissions (Desktop/Documents/Downloads)

### DOC-0213 · OpenClaw macOS release (Sparkle)

- path: `platforms/mac/release.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 85
- headings: OpenClaw macOS release (Sparkle) | Prereqs | Build & package | From repo root; set release IDs so Sparkle feed is enabled. | APP_BUILD must be numeric + monotonic for Sparkle compare. | Zip for distribution (includes resource forks for Sparkle delta support) | Optional: also build a styled DMG for humans (drag to /Applications) | Recommended: build + notarize/staple zip + DMG

### DOC-0214 · Remote OpenClaw (macOS ⇄ remote host)

- path: `platforms/mac/remote.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 83
- headings: Remote OpenClaw (macOS ⇄ remote host) | Modes | Remote transports | Prereqs on the remote host | macOS app setup | Web Chat | Permissions | Security notes

### DOC-0215 · mac signing (debug builds)

- path: `platforms/mac/signing.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 47
- headings: mac signing (debug builds) | Usage | from repo root | Ad-hoc Signing Note | Build metadata for About | Why

### DOC-0216 · Skills (macOS)

- path: `platforms/mac/skills.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 33
- headings: Skills (macOS) | Data source | Install actions | Env/API keys | Remote mode

### DOC-0217 · Voice Overlay Lifecycle (macOS)

- path: `platforms/mac/voice-overlay.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 60
- headings: Voice Overlay Lifecycle (macOS) | Current intent | Implemented (Dec 9, 2025) | Next steps | Debugging checklist | Migration steps (suggested)

### DOC-0218 · Voice Wake & Push-to-Talk

- path: `platforms/mac/voicewake.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 67
- headings: Voice Wake & Push-to-Talk | Modes | Runtime behavior (wake-word) | Lifecycle invariants | Sticky overlay failure mode (previous) | Push-to-talk specifics | User-facing settings | Forwarding behavior

### DOC-0219 · WebChat (macOS app)

- path: `platforms/mac/webchat.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 43
- headings: WebChat (macOS app) | Launch & debugging | How it’s wired | Security surface | Known limitations

### DOC-0220 · OpenClaw macOS IPC architecture

- path: `platforms/mac/xpc.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 61
- headings: OpenClaw macOS IPC architecture | Goals | How it works | Gateway + node transport | Node service + app IPC | PeekabooBridge (UI automation) | Operational flows | Hardening notes

### DOC-0221 · OpenClaw macOS Companion (menu bar + gateway broker)

- path: `platforms/macos.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 204
- headings: OpenClaw macOS Companion (menu bar + gateway broker) | What it does | Local vs remote mode | Launchd control | Node capabilities (mac) | Exec approvals (system.run) | Deep links | `openclaw://agent`

### DOC-0222 · OpenClaw on Oracle Cloud (OCI)

- path: `platforms/oracle.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 303
- headings: OpenClaw on Oracle Cloud (OCI) | Goal | Cost Comparison (2026) | Prerequisites | 1) Create an OCI Instance | 2) Connect and Update | Connect via public IP | Update system

### DOC-0223 · OpenClaw on Raspberry Pi

- path: `platforms/raspberry-pi.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 358
- headings: OpenClaw on Raspberry Pi | Goal | Hardware Requirements | What You'll Need | 1) Flash the OS | 2) Connect via SSH | or use the IP address | 3) System Setup

### DOC-0224 · Windows (WSL2)

- path: `platforms/windows.md`
- locale: `en`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 159
- headings: Windows (WSL2) | Install (WSL2) | Gateway | Gateway service install (CLI) | Advanced: expose WSL services over LAN (portproxy) | Step-by-step WSL2 install | 1) Install WSL2 + Ubuntu | Or pick a distro explicitly:

### DOC-0225 · Plugin agent tools

- path: `plugins/agent-tools.md`
- locale: `en`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 99
- headings: Plugin agent tools | Basic tool | Optional tool (opt‑in) | Rules + tips

### DOC-0226 · Community plugins

- path: `plugins/community.md`
- locale: `en`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 44
- headings: Community plugins | Required for listing | How to submit | Review bar | Candidate format

### DOC-0227 · Plugin manifest (openclaw.plugin.json)

- path: `plugins/manifest.md`
- locale: `en`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 71
- headings: Plugin manifest (openclaw.plugin.json) | Required fields | JSON Schema requirements | Validation behavior | Notes

### DOC-0228 · Voice Call (plugin)

- path: `plugins/voice-call.md`
- locale: `en`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 322
- headings: Voice Call (plugin) | Where it runs (local vs remote) | Install | Option A: install from npm (recommended) | Option B: install from a local folder (dev, no copying) | Config | Stale call reaper | Webhook Security

### DOC-0229 · Zalo Personal (plugin)

- path: `plugins/zalouser.md`
- locale: `en`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 81
- headings: Zalo Personal (plugin) | Naming | Where it runs | Install | Option A: install from npm | Option B: install from a local folder (dev) | Prerequisite: zca-cli | Config

### DOC-0230 · OpenProse

- path: `prose.md`
- locale: `en`
- category: `prose.md`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 134
- headings: OpenProse | What it can do | Install + enable | Slash command | Example: a simple `.prose` file | Research + synthesis with two agents running in parallel. | File locations | State modes

### DOC-0231 · Anthropic (Claude)

- path: `providers/anthropic.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 174
- headings: Anthropic (Claude) | Option A: Anthropic API key | CLI setup | choose: Anthropic API key | or non-interactive | Config snippet | Prompt caching (Anthropic API) | Configuration

### DOC-0232 · Amazon Bedrock

- path: `providers/bedrock.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 176
- headings: Amazon Bedrock | What pi‑ai supports | Automatic model discovery | Setup (manual) | Optional: | Optional (Bedrock API key/bearer token): | EC2 Instance Roles | Add to ~/.bashrc or your shell profile

### DOC-0233 · Claude Max API Proxy

- path: `providers/claude-max-api-proxy.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 148
- headings: Claude Max API Proxy | Why Use This? | How It Works | Installation | Requires Node.js 20+ and Claude Code CLI | Verify Claude CLI is authenticated | Usage | Start the server

### DOC-0234 · Cloudflare AI Gateway

- path: `providers/cloudflare-ai-gateway.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 71
- headings: Cloudflare AI Gateway | Quick start | Non-interactive example | Authenticated gateways | Environment note

### DOC-0235 · Deepgram (Audio Transcription)

- path: `providers/deepgram.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 93
- headings: Deepgram (Audio Transcription) | Quick start | Options | Notes

### DOC-0236 · GitHub Copilot

- path: `providers/github-copilot.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 72
- headings: GitHub Copilot | What is GitHub Copilot? | Two ways to use Copilot in OpenClaw | 1) Built-in GitHub Copilot provider (`github-copilot`) | 2) Copilot Proxy plugin (`copilot-proxy`) | CLI setup | Optional flags | Set a default model

### DOC-0237 · GLM models

- path: `providers/glm.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 33
- headings: GLM models | CLI setup | Config snippet | Notes

### DOC-0238 · Hugging Face (Inference)

- path: `providers/huggingface.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 209
- headings: Hugging Face (Inference) | Quick start | Non-interactive example | Environment note | Model discovery and onboarding dropdown | Model names and editable options | Model IDs and configuration examples | Complete configuration examples

### DOC-0239 · Model Providers

- path: `providers/index.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 69
- headings: Model Providers | Highlight: Venice (Venice AI) | Quick start | Provider docs | Transcription providers | Community tools

### DOC-0240 · LiteLLM

- path: `providers/litellm.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 153
- headings: LiteLLM | Why use LiteLLM with OpenClaw? | Quick start | Via onboarding | Manual setup | Configuration | Environment variables | Config file

### DOC-0241 · MiniMax

- path: `providers/minimax.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 208
- headings: MiniMax | Model overview (M2.1) | MiniMax M2.1 vs MiniMax M2.1 Lightning | Choose a setup | MiniMax OAuth (Coding Plan) — recommended | MiniMax M2.1 (API key) | MiniMax M2.1 as fallback (Opus primary) | Optional: Local via LM Studio (manual)

### DOC-0242 · Model Providers

- path: `providers/models.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 52
- headings: Model Providers | Highlight: Venice (Venice AI) | Quick start (two steps) | Supported providers (starter set)

### DOC-0243 · Moonshot AI (Kimi)

- path: `providers/moonshot.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 142
- headings: Moonshot AI (Kimi) | Config snippet (Moonshot API) | Kimi Coding | Notes

### DOC-0244 · NVIDIA

- path: `providers/nvidia.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 55
- headings: NVIDIA | CLI setup | Config snippet | Model IDs | Notes

### DOC-0245 · Ollama

- path: `providers/ollama.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 250
- headings: Ollama | Quick start | or | or | or | Set environment variable | Or configure in your config file | Model discovery (implicit provider)

### DOC-0246 · OpenAI

- path: `providers/openai.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 62
- headings: OpenAI | Option A: OpenAI API key (OpenAI Platform) | CLI setup | or non-interactive | Config snippet | Option B: OpenAI Code (Codex) subscription | CLI setup (Codex OAuth) | Run Codex OAuth in the wizard

### DOC-0247 · OpenCode Zen

- path: `providers/opencode.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 36
- headings: OpenCode Zen | CLI setup | or non-interactive | Config snippet | Notes

### DOC-0248 · OpenRouter

- path: `providers/openrouter.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 37
- headings: OpenRouter | CLI setup | Config snippet | Notes

### DOC-0249 · Qianfan Provider Guide

- path: `providers/qianfan.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 38
- headings: Qianfan Provider Guide | Prerequisites | Getting Your API Key | CLI setup | Related Documentation

### DOC-0250 · Qwen

- path: `providers/qwen.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 53
- headings: Qwen | Enable the plugin | Authenticate | Model IDs | Reuse Qwen Code CLI login | Notes

### DOC-0251 · Synthetic

- path: `providers/synthetic.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 99
- headings: Synthetic | Quick setup | Config example | Model catalog | Notes

### DOC-0252 · Together AI

- path: `providers/together.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 65
- headings: Together AI | Quick start | Non-interactive example | Environment note | Available models

### DOC-0253 · Venice AI (Venice highlight)

- path: `providers/venice.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 267
- headings: Venice AI (Venice highlight) | Why Venice in OpenClaw | Privacy Modes | Features | Setup | 1. Get API Key | 2. Configure OpenClaw | 3. Verify Setup

### DOC-0254 · Vercel AI Gateway

- path: `providers/vercel-ai-gateway.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 50
- headings: Vercel AI Gateway | Quick start | Non-interactive example | Environment note

### DOC-0255 · vLLM

- path: `providers/vllm.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 92
- headings: vLLM | Quick start | Model discovery (implicit provider) | Explicit configuration (manual models) | Troubleshooting

### DOC-0256 · Xiaomi MiMo

- path: `providers/xiaomi.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 64
- headings: Xiaomi MiMo | Model overview | CLI setup | or non-interactive | Config snippet | Notes

### DOC-0257 · Z.AI

- path: `providers/zai.md`
- locale: `en`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 38
- headings: Z.AI | CLI setup | or non-interactive | Config snippet | Notes

### DOC-0258 · Clawnet refactor (protocol + auth unification)

- path: `refactor/clawnet.md`
- locale: `en`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 417
- headings: Clawnet refactor (protocol + auth unification) | Hi | Purpose | Goals (from discussion) | Non‑goals (explicit) | Current state (as‑is) | Two protocols | 1) Gateway WebSocket (control plane)

### DOC-0259 · Exec host refactor plan

- path: `refactor/exec-host.md`
- locale: `en`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 316
- headings: Exec host refactor plan | Goals | Non-goals | Decisions (locked) | Key concepts | Host | Security mode | Ask mode

### DOC-0260 · Outbound Session Mirroring Refactor (Issue #1520)

- path: `refactor/outbound-session-mirroring.md`
- locale: `en`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 85
- headings: Outbound Session Mirroring Refactor (Issue #1520) | Status | Context | Goals | Implementation Summary | Thread/Topic Handling | Extensions Covered | Decisions

### DOC-0261 · Plugin SDK + Runtime Refactor Plan

- path: `refactor/plugin-sdk.md`
- locale: `en`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 214
- headings: Plugin SDK + Runtime Refactor Plan | Why now | Target architecture (two layers) | 1) Plugin SDK (compile-time, stable, publishable) | 2) Plugin Runtime (execution surface, injected) | Migration plan (phased, safe) | Phase 0: scaffolding | Phase 1: bridge cleanup (low risk)

### DOC-0262 · Strict config validation (doctor-only migrations)

- path: `refactor/strict-config.md`
- locale: `en`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 93
- headings: Strict config validation (doctor-only migrations) | Goals | Non-goals | Strict validation rules | Plugin schema enforcement | Doctor flow | Command gating (when config is invalid) | Error UX format

### DOC-0263 · AGENTS.md — OpenClaw Personal Assistant (default)

- path: `reference/AGENTS.default.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 124
- headings: AGENTS.md — OpenClaw Personal Assistant (default) | First run (recommended) | Safety defaults | Session start (required) | Soul (required) | Shared spaces (recommended) | Memory system (recommended) | Tools & skills

### DOC-0264 · Release Checklist (npm + macOS)

- path: `reference/RELEASING.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 121
- headings: Release Checklist (npm + macOS) | Operator trigger | Troubleshooting (notes from 2.0.0-beta2 release) | Plugin publish scope (npm)

### DOC-0265 · API usage & costs

- path: `reference/api-usage-costs.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 138
- headings: API usage & costs | Where costs show up (chat + CLI) | How keys are discovered | Features that can spend keys | 1) Core model responses (chat + tools) | 2) Media understanding (audio/image/video) | 3) Memory embeddings + semantic search | 4) Web search tool (Brave / Perplexity via OpenRouter)

### DOC-0266 · The name

- path: `reference/credits.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 27
- headings: The name | Credits | Core contributors | License

### DOC-0267 · Device model database (friendly names)

- path: `reference/device-models.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 47
- headings: Device model database (friendly names) | Data source | Updating the database

### DOC-0268 · RPC adapters

- path: `reference/rpc.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 43
- headings: RPC adapters | Pattern A: HTTP daemon (signal-cli) | Pattern B: stdio child process (legacy: imsg) | Adapter guidelines

### DOC-0269 · Session Management & Compaction (Deep Dive)

- path: `reference/session-management-compaction.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 285
- headings: Session Management & Compaction (Deep Dive) | Source of truth: the Gateway | Two persistence layers | On-disk locations | Session keys (`sessionKey`) | Session ids (`sessionId`) | Session store schema (`sessions.json`) | Transcript structure (`*.jsonl`)

### DOC-0270 · AGENTS.md - OpenClaw Workspace

- path: `reference/templates/AGENTS.dev.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 83
- headings: AGENTS.md - OpenClaw Workspace | First run (one-time) | Backup tip (recommended) | Safety defaults | Daily memory (recommended) | Heartbeats (optional) | Customize | C-3PO's Origin Memory

### DOC-0271 · AGENTS.md - Your Workspace

- path: `reference/templates/AGENTS.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 219
- headings: AGENTS.md - Your Workspace | First Run | Every Session | Memory | 🧠 MEMORY.md - Your Long-Term Memory | 📝 Write It Down - No "Mental Notes"! | Safety | External vs Internal

### DOC-0272 · BOOT.md

- path: `reference/templates/BOOT.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 11
- headings: BOOT.md

### DOC-0273 · BOOTSTRAP.md - Hello, World

- path: `reference/templates/BOOTSTRAP.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 62
- headings: BOOTSTRAP.md - Hello, World | The Conversation | After You Know Who You Are | Connect (Optional) | When You're Done

### DOC-0274 · HEARTBEAT.md

- path: `reference/templates/HEARTBEAT.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `ev-ops-monitoring`
- line_count: 12
- headings: HEARTBEAT.md | Keep this file empty (or with only comments) to skip heartbeat API calls. | Add tasks below when you want the agent to check something periodically.

### DOC-0275 · IDENTITY.md - Agent Identity

- path: `reference/templates/IDENTITY.dev.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 47
- headings: IDENTITY.md - Agent Identity | Role | Soul | Relationship with Clawd | Quirks | Catchphrase

### DOC-0276 · IDENTITY.md - Who Am I?

- path: `reference/templates/IDENTITY.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 29
- headings: IDENTITY.md - Who Am I?

### DOC-0277 · SOUL.md - The Soul of C-3PO

- path: `reference/templates/SOUL.dev.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 76
- headings: SOUL.md - The Soul of C-3PO | Who I Am | My Purpose | How I Operate | My Quirks | My Relationship with Clawd | What I Won't Do | The Golden Rule

### DOC-0278 · SOUL.md - Who You Are

- path: `reference/templates/SOUL.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 43
- headings: SOUL.md - Who You Are | Core Truths | Boundaries | Vibe | Continuity

### DOC-0279 · TOOLS.md - User Tool Notes (editable)

- path: `reference/templates/TOOLS.dev.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 24
- headings: TOOLS.md - User Tool Notes (editable) | Examples | imsg | sag

### DOC-0280 · TOOLS.md - Local Notes

- path: `reference/templates/TOOLS.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 47
- headings: TOOLS.md - Local Notes | What Goes Here | Examples | Cameras | SSH | TTS | Why Separate?

### DOC-0281 · USER.md - User Profile

- path: `reference/templates/USER.dev.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 18
- headings: USER.md - User Profile

### DOC-0282 · USER.md - About Your Human

- path: `reference/templates/USER.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 23
- headings: USER.md - About Your Human | Context

### DOC-0283 · Tests

- path: `reference/test.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 51
- headings: Tests | Model latency bench (local keys) | Onboarding E2E (Docker) | QR import smoke (Docker)

### DOC-0284 · Token use & costs

- path: `reference/token-use.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 136
- headings: Token use & costs | How the system prompt is built | What counts in the context window | How to see current token usage | Cost estimation (when shown) | Cache TTL and pruning impact | Example: keep 1h cache warm with heartbeat | Example: enable Anthropic 1M context beta header

### DOC-0285 · Transcript Hygiene (Provider Fixups)

- path: `reference/transcript-hygiene.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 151
- headings: Transcript Hygiene (Provider Fixups) | Where this runs | Global rule: image sanitization | Global rule: malformed tool calls | Global rule: inter-session input provenance | Provider matrix (current behavior) | Historical behavior (pre-2026.1.22)

### DOC-0286 · Onboarding Wizard Reference

- path: `reference/wizard.md`
- locale: `en`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 269
- headings: Onboarding Wizard Reference | Flow details (local mode) | Non-interactive mode | Add agent (non-interactive) | Gateway wizard RPC | Signal setup (signal-cli) | What the wizard writes | Related docs

### DOC-0287 · Contributing to the OpenClaw Threat Model

- path: `security/CONTRIBUTING-THREAT-MODEL.md`
- locale: `en`
- category: `security`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-security`
- line_count: 90
- headings: Contributing to the OpenClaw Threat Model | Ways to Contribute | Add a Threat | Suggest a Mitigation | Propose an Attack Chain | Fix or Improve Existing Content | What We Use | MITRE ATLAS

### DOC-0288 · OpenClaw Security & Trust

- path: `security/README.md`
- locale: `en`
- category: `security`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 17
- headings: OpenClaw Security & Trust | Documents | Reporting Vulnerabilities | Contact

### DOC-0289 · OpenClaw Threat Model v1.0

- path: `security/THREAT-MODEL-ATLAS.md`
- locale: `en`
- category: `security`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-security`
- line_count: 603
- headings: OpenClaw Threat Model v1.0 | MITRE ATLAS Framework | Framework Attribution | Contributing to This Threat Model | 1. Introduction | 1.1 Purpose | 1.2 Scope | 1.3 Out of Scope

### DOC-0290 · Formal Verification (Security Models)

- path: `security/formal-verification.md`
- locale: `en`
- category: `security`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-security`
- line_count: 164
- headings: Formal Verification (Security Models) | Where the models live | Important caveats | Reproducing results | Java 11+ required (TLC runs on the JVM). | The repo vendors a pinned `tla2tools.jar` (TLA+ tools) and provides `bin/tlc` + Make targets. | Gateway exposure and open gateway misconfiguration | Nodes.run pipeline (highest-risk capability)

### DOC-0291 · Agent Bootstrapping

- path: `start/bootstrapping.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 41
- headings: Agent Bootstrapping | What bootstrapping does | Where it runs | Related docs

### DOC-0292 · Start here

- path: `start/docs-directory.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 64
- headings: Start here | Providers and UX | Companion apps | Operations and safety

### DOC-0293 · Getting Started

- path: `start/getting-started.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 135
- headings: Getting Started | Prereqs | Quick setup (CLI) | Optional checks and extras | Useful environment variables | Go deeper | What you will have | Next steps

### DOC-0294 · Docs hubs

- path: `start/hubs.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 197
- headings: Docs hubs | Start here | Installation + updates | Core concepts | Providers + ingress | Gateway + operations | Tools + automation | Nodes, media, voice

### DOC-0295 · The Lore of OpenClaw 🦞📖

- path: `start/lore.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 219
- headings: The Lore of OpenClaw 🦞📖 | The Origin Story | The First Molt (January 27, 2026) | The Name | The Daleks vs The Lobsters | Key Characters | Molty 🦞 | Peter 👨‍💻

### DOC-0296 · Onboarding Overview

- path: `start/onboarding-overview.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 51
- headings: Onboarding Overview | Choose your onboarding path | CLI onboarding wizard | macOS app onboarding | Custom Provider

### DOC-0297 · Onboarding (macOS App)

- path: `start/onboarding.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 81
- headings: Onboarding (macOS App)

### DOC-0298 · Building a personal assistant with OpenClaw

- path: `start/openclaw.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 215
- headings: Building a personal assistant with OpenClaw | ⚠️ Safety first | Prerequisites | The two-phone setup (recommended) | 5-minute quick start | Give the agent a workspace (AGENTS) | The config that turns it into “an assistant” | Sessions and memory

### DOC-0299 · Quick start

- path: `start/quickstart.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 22
- headings: Quick start

### DOC-0300 · Setup

- path: `start/setup.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 162
- headings: Setup | TL;DR | Prereqs (from source) | Tailoring strategy (so updates don’t hurt) | Run the Gateway from this repo | Stable workflow (macOS app first) | Bleeding edge workflow (Gateway in a terminal) | 0) (Optional) Run the macOS app from source too

### DOC-0301 · Showcase

- path: `start/showcase.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 416
- headings: Showcase | 🎥 OpenClaw in Action | 🆕 Fresh from Discord | 🤖 Automation & Workflows | 🧠 Knowledge & Memory | 🎙️ Voice & Phone | 🏗️ Infrastructure & Deployment | 🏠 Home & Hardware

### DOC-0302 · CLI Automation

- path: `start/wizard-cli-automation.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 158
- headings: CLI Automation | Baseline non-interactive example | Provider-specific examples | Add another agent | Related docs

### DOC-0303 · CLI Onboarding Reference

- path: `start/wizard-cli-reference.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 259
- headings: CLI Onboarding Reference | What the wizard does | Local flow details | Remote mode details | Auth and model options | Outputs and internals | Related docs

### DOC-0304 · Onboarding Wizard (CLI)

- path: `start/wizard.md`
- locale: `en`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 110
- headings: Onboarding Wizard (CLI) | QuickStart vs Advanced | What the wizard configures | Add another agent | Full reference | Related docs

### DOC-0305 · `openclaw agent` (direct agent runs)

- path: `tools/agent-send.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 53
- headings: `openclaw agent` (direct agent runs) | Behavior | Examples | Flags

### DOC-0306 · apply_patch tool

- path: `tools/apply-patch.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 51
- headings: apply_patch tool | Parameters | Notes | Example

### DOC-0307 · Browser Troubleshooting (Linux)

- path: `tools/browser-linux-troubleshooting.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-troubleshooting`
- line_count: 139
- headings: Browser Troubleshooting (Linux) | Problem: "Failed to start Chrome CDP on port 18800" | Root Cause | Solution 1: Install Google Chrome (Recommended) | Solution 2: Use Snap Chromium with Attach-Only Mode | ~/.config/systemd/user/openclaw-browser.service | Verifying the Browser Works | Config Reference

### DOC-0308 · Browser login + X/Twitter posting

- path: `tools/browser-login.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 67
- headings: Browser login + X/Twitter posting | Manual login (recommended) | Which Chrome profile is used? | X/Twitter: recommended flow | Sandboxing + host browser access

### DOC-0309 · Browser (openclaw-managed)

- path: `tools/browser.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 587
- headings: Browser (openclaw-managed) | What you get | Quick start | Profiles: `openclaw` vs `chrome` | Configuration | Use Brave (or another Chromium-based browser) | Local vs remote control | Node browser proxy (zero-config default)

### DOC-0310 · Chrome extension (browser relay)

- path: `tools/chrome-extension.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 178
- headings: Chrome extension (browser relay) | What it is (concept) | Install / load (unpacked) | Updates (no build step) | Use it (no extra config) | Attach / detach (toolbar button) | Which tab does it control? | Badge + common errors

### DOC-0311 · ClawHub

- path: `tools/clawhub.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 257
- headings: ClawHub | What ClawHub is | How it works | What you can do | Who this is for (beginner-friendly) | Quick start (non-technical) | Install the CLI | How it fits into OpenClaw

### DOC-0312 · Creating Custom Skills 🛠

- path: `tools/creating-skills.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 54
- headings: Creating Custom Skills 🛠 | What is a Skill? | Step-by-Step: Your First Skill | 1. Create the Directory | 2. Define the `SKILL.md` | Hello World Skill | 3. Add Tools (Optional) | 4. Refresh OpenClaw

### DOC-0313 · Elevated Mode (/elevated directives)

- path: `tools/elevated.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 57
- headings: Elevated Mode (/elevated directives) | What it does | What it controls (and what it doesn’t) | Resolution order | Setting a session default | Availability + allowlists | Logging + status

### DOC-0314 · Exec approvals

- path: `tools/exec-approvals.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 251
- headings: Exec approvals | Where it applies | Settings and storage | Policy knobs | Security (`exec.security`) | Ask (`exec.ask`) | Ask fallback (`askFallback`) | Allowlist (per agent)

### DOC-0315 · Exec tool

- path: `tools/exec.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 181
- headings: Exec tool | Parameters | Config | PATH handling | Session overrides (`/exec`) | Authorization model | Exec approvals (companion app / node host) | Allowlist + safe bins

### DOC-0316 · Firecrawl

- path: `tools/firecrawl.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 61
- headings: Firecrawl | Get an API key | Configure Firecrawl | Stealth / bot circumvention | How `web_fetch` uses Firecrawl

### DOC-0317 · Tools (OpenClaw)

- path: `tools/index.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 547
- headings: Tools (OpenClaw) | Disabling tools | Tool profiles (base allowlist) | Provider-specific tool policy | Tool groups (shorthands) | Plugins + tools | Tool inventory | `apply_patch`

### DOC-0318 · LLM Task

- path: `tools/llm-task.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 115
- headings: LLM Task | Enable the plugin | Config (optional) | Tool parameters | Output | Example: Lobster workflow step | Safety notes

### DOC-0319 · Lobster

- path: `tools/lobster.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 342
- headings: Lobster | Hook | Why | Why a DSL instead of plain programs? | How it works | Pattern: small CLI + JSON pipes + approvals | JSON-only LLM steps (llm-task) | Workflow files (.lobster)

### DOC-0320 · Tool-loop detection

- path: `tools/loop-detection.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 98
- headings: Tool-loop detection | Why this exists | Configuration block | Field behavior | Recommended setup | Logs and expected behavior | Notes

### DOC-0321 · Multi-Agent Sandbox & Tools Configuration

- path: `tools/multi-agent-sandbox-tools.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 397
- headings: Multi-Agent Sandbox & Tools Configuration | Overview | Configuration Examples | Example 1: Personal + Restricted Family Agent | Example 2: Work Agent with Shared Sandbox | Example 2b: Global coding profile + messaging-only agent | Example 3: Different Sandbox Modes per Agent | Configuration Precedence

### DOC-0322 · Plugins (Extensions)

- path: `tools/plugin.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 672
- headings: Plugins (Extensions) | Quick start (new to plugins?) | Available plugins (official) | Runtime helpers | Discovery & precedence | Package packs | Channel catalog metadata | Plugin IDs

### DOC-0323 · Reaction tooling

- path: `tools/reactions.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 22
- headings: Reaction tooling

### DOC-0324 · Skills Config

- path: `tools/skills-config.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 76
- headings: Skills Config | Fields | Notes | Sandboxed skills + env vars

### DOC-0325 · Skills (OpenClaw)

- path: `tools/skills.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 300
- headings: Skills (OpenClaw) | Locations and precedence | Per-agent vs shared skills | Plugins + skills | ClawHub (install + sync) | Security notes | Format (AgentSkills + Pi-compatible) | Gating (load-time filters)

### DOC-0326 · Slash commands

- path: `tools/slash-commands.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 210
- headings: Slash commands | Config | Command list | Usage surfaces (what shows where) | Model selection (`/model`) | Debug overrides | Config updates | Surface notes

### DOC-0327 · Sub-agents

- path: `tools/subagents.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 232
- headings: Sub-agents | Slash command | Spawn behavior | Tool | Nested Sub-Agents | How to enable | Depth levels | Announce chain

### DOC-0328 · Thinking Levels (/think directives)

- path: `tools/thinking.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 74
- headings: Thinking Levels (/think directives) | What it does | Resolution order | Setting a session default | Application by agent | Verbose directives (/verbose or /v) | Reasoning visibility (/reasoning) | Related

### DOC-0329 · Web tools

- path: `tools/web.md`
- locale: `en`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 265
- headings: Web tools | How it works | Choosing a search provider | Getting a Brave API key | Where to set the key (recommended) | Using Perplexity (direct or via OpenRouter) | Getting an OpenRouter API key | Setting up Perplexity search

### DOC-0330 · Text-to-speech (TTS)

- path: `tts.md`
- locale: `en`
- category: `tts.md`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 396
- headings: Text-to-speech (TTS) | Supported services | Edge TTS notes | Optional keys | Service links | Is it enabled by default? | Config | Minimal config (enable + provider)

### DOC-0331 · VPS hosting

- path: `vps.md`
- locale: `en`
- category: `vps.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 43
- headings: VPS hosting | Pick a provider | How cloud setups work | Using nodes with a VPS

### DOC-0332 · Control UI (browser)

- path: `web/control-ui.md`
- locale: `en`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 232
- headings: Control UI (browser) | Quick open (local) | Device pairing (first connection) | List pending requests | Approve by request ID | What it can do (today) | Chat behavior | Tailnet access (recommended)

### DOC-0333 · Dashboard (Control UI)

- path: `web/dashboard.md`
- locale: `en`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 46
- headings: Dashboard (Control UI) | Fast path (recommended) | Token basics (local vs remote) | If you see “unauthorized” / 1008

### DOC-0334 · Web (Gateway)

- path: `web/index.md`
- locale: `en`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 116
- headings: Web (Gateway) | Webhooks | Config (default-on) | Tailscale access | Integrated Serve (recommended) | Tailnet bind + token | Public internet (Funnel) | Security notes

### DOC-0335 · TUI (Terminal UI)

- path: `web/tui.md`
- locale: `en`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 162
- headings: TUI (Terminal UI) | Quick start | What you see | Mental model: agents + sessions | Sending + delivery | Pickers + overlays | Keyboard shortcuts | Slash commands

### DOC-0336 · WebChat (Gateway WebSocket UI)

- path: `web/webchat.md`
- locale: `en`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 53
- headings: WebChat (Gateway WebSocket UI) | What it is | Quick start | How it works (behavior) | Remote use | Configuration reference (WebChat)

### DOC-0337 · AGENTS.md - zh-CN 文档翻译工作区

- path: `zh-CN/AGENTS.md`
- locale: `zh-CN`
- category: `AGENTS.md`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 59
- headings: AGENTS.md - zh-CN 文档翻译工作区 | Read When | Pipeline（docs-i18n） | 批量（doc 模式，可并行） | 单文件 | 小范围补丁（segment 模式，使用 TM；不支持并行） | zh-CN 样式规则 | 关键术语（#6995 修复）

### DOC-0338 · 认证监控

- path: `zh-CN/automation/auth-monitoring.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 47
- headings: 认证监控 | 推荐方式：CLI 检查（可移植） | 可选脚本（运维 / 手机工作流程）

### DOC-0339 · 定时任务（Gateway网关调度器）

- path: `zh-CN/automation/cron-jobs.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 424
- headings: 定时任务（Gateway网关调度器） | 简要概述 | 快速开始（可操作） | 工具调用等价形式（Gateway网关定时任务工具） | 定时任务的存储位置 | 新手友好概述 | 概念 | 任务

### DOC-0340 · 定时任务与心跳：何时使用哪种方式

- path: `zh-CN/automation/cron-vs-heartbeat.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 286
- headings: 定时任务与心跳：何时使用哪种方式 | 快速决策指南 | 心跳：周期性感知 | 何时使用心跳 | 心跳优势 | 心跳示例：HEARTBEAT.md 检查清单 | Heartbeat checklist | 配置心跳

### DOC-0341 · Gmail Pub/Sub -> OpenClaw

- path: `zh-CN/automation/gmail-pubsub.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 249
- headings: Gmail Pub/Sub -> OpenClaw | 前置条件 | 向导（推荐） | 一次性设置 | 启动 watch | 运行推送处理程序 | 暴露处理程序（高级，不受支持） | 测试

### DOC-0342 · Hooks

- path: `zh-CN/automation/hooks.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 882
- headings: Hooks | 入门指南 | 概述 | 入门 | 捆绑的 Hooks | 新手引导 | Hook 发现 | Hook 包（npm/archives）

### DOC-0343 · 投票

- path: `zh-CN/automation/poll.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 76
- headings: 投票 | 支持的渠道 | CLI | WhatsApp | Discord | MS Teams | Gateway 网关 RPC | 渠道差异

### DOC-0344 · 自动化故障排查

- path: `zh-CN/automation/troubleshooting.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-troubleshooting`
- line_count: 8
- headings: 自动化故障排查

### DOC-0345 · Webhooks

- path: `zh-CN/automation/webhook.md`
- locale: `zh-CN`
- category: `automation`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 163
- headings: Webhooks | 启用 | 认证 | 端点 | `POST /hooks/wake` | `POST /hooks/agent` | `POST /hooks/<name>`（映射） | 响应

### DOC-0346 · Brave Search API

- path: `zh-CN/brave-search.md`
- locale: `zh-CN`
- category: `brave-search.md`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 48
- headings: Brave Search API | 获取 API 密钥 | 配置示例 | 注意事项

### DOC-0347 · BlueBubbles（macOS REST）

- path: `zh-CN/channels/bluebubbles.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 271
- headings: BlueBubbles（macOS REST） | 概述 | 快速开始 | 新手引导 | 访问控制（私信 + 群组） | 提及门控（群组） | 命令门控 | 输入状态 + 已读回执

### DOC-0348 · 广播群组

- path: `zh-CN/channels/broadcast-groups.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 449
- headings: 广播群组 | 概述 | 使用场景 | 1. 专业智能体团队 | 2. 多语言支持 | 3. 质量保证工作流 | 4. 任务自动化 | 配置

### DOC-0349 · 渠道与路由

- path: `zh-CN/channels/channel-routing.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 117
- headings: 渠道与路由 | 关键术语 | 会话键格式（示例） | 路由规则（如何选择智能体） | 广播组（运行多个智能体） | 配置概览 | 会话存储 | WebChat 行为

### DOC-0350 · Discord（Bot API）

- path: `zh-CN/channels/discord.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 468
- headings: Discord（Bot API） | 快速设置（新手） | 目标 | 工作原理 | 配置写入 | 如何创建自己的机器人 | 1）创建 Discord 应用 + 机器人用户 | 2）启用 OpenClaw 需要的网关意图

### DOC-0351 · 飞书机器人

- path: `zh-CN/channels/feishu.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 629
- headings: 飞书机器人 | 需要插件 | 快速开始 | 方式一：通过安装向导添加（推荐） | 方式二：通过命令行添加 | 第一步：创建飞书应用 | 1. 打开飞书开放平台 | 2. 创建应用

### DOC-0352 · Google Chat（Chat API）

- path: `zh-CN/channels/googlechat.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 257
- headings: Google Chat（Chat API） | 快速设置（新手） | 添加到 Google Chat | 公网 URL（仅 Webhook） | 方案 A：Tailscale Funnel（推荐） | 方案 B：反向代理（Caddy） | 方案 C：Cloudflare Tunnel | 工作原理

### DOC-0353 · grammY 集成（Telegram Bot API）

- path: `zh-CN/channels/grammy.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 38
- headings: grammY 集成（Telegram Bot API） | 为什么选择 grammY | 我们发布的内容

### DOC-0354 · 群组消息（WhatsApp 网页渠道）

- path: `zh-CN/channels/group-messages.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 91
- headings: 群组消息（WhatsApp 网页渠道） | 已实现的功能（2025-12-03） | 配置示例（WhatsApp） | 激活命令（仅所有者） | 使用方法 | 测试/验证 | 已知注意事项

### DOC-0355 · 群组

- path: `zh-CN/channels/groups.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 379
- headings: 群组 | 新手入门（2 分钟） | 会话键 | 模式：个人私信 + 公开群组（单智能体） | 显示标签 | 群组策略 | 提及限制（默认） | 群组/频道工具限制（可选）

### DOC-0356 · iMessage (imsg)

- path: `zh-CN/channels/imessage.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 302
- headings: iMessage (imsg) | 快速设置（新手） | 简介 | 配置写入 | 要求 | 设置（快速路径） | 专用机器人 macOS 用户（用于隔离身份） | Run an interactive SSH once first to accept host keys:

### DOC-0357 · 聊天渠道

- path: `zh-CN/channels/index.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 53
- headings: 聊天渠道 | 支持的渠道 | 注意事项

### DOC-0358 · LINE（插件）

- path: `zh-CN/channels/line.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 180
- headings: LINE（插件） | 需要安装插件 | 配置步骤 | 配置 | 访问控制 | 消息行为 | 渠道数据（富消息） | 故障排除

### DOC-0359 · 渠道位置解析

- path: `zh-CN/channels/location.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 63
- headings: 渠道位置解析 | 文本格式 | 上下文字段 | 渠道说明

### DOC-0360 · Matrix（插件）

- path: `zh-CN/channels/matrix.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 221
- headings: Matrix（插件） | 需要插件 | 设置 | 加密（E2EE） | 路由模型 | 访问控制（私信） | 房间（群组） | 话题

### DOC-0361 · Mattermost（插件）

- path: `zh-CN/channels/mattermost.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 144
- headings: Mattermost（插件） | 需要插件 | 快速设置 | 环境变量（默认账户） | 聊天模式 | 访问控制（私信） | 频道（群组） | 出站投递目标

### DOC-0362 · Microsoft Teams（插件）

- path: `zh-CN/channels/msteams.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 775
- headings: Microsoft Teams（插件） | 需要插件 | 快速设置（初学者） | 目标 | 配置写入 | 访问控制（私信 + 群组） | 工作原理 | Azure Bot 设置（前提条件）

### DOC-0363 · Nextcloud Talk（插件）

- path: `zh-CN/channels/nextcloud-talk.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 142
- headings: Nextcloud Talk（插件） | 需要插件 | 快速设置（新手） | 注意事项 | 访问控制（私信） | 房间（群组） | 功能支持 | 配置参考（Nextcloud Talk）

### DOC-0364 · Nostr

- path: `zh-CN/channels/nostr.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 240
- headings: Nostr | 安装（按需） | 新手引导（推荐） | 手动安装 | 快速设置 | 使用 nak | 配置参考 | 个人资料元数据

### DOC-0365 · 配对

- path: `zh-CN/channels/pairing.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 89
- headings: 配对 | 1）私信配对（入站聊天访问） | 批准发送者 | 状态存储位置 | 2）节点设备配对（iOS/Android/macOS/无头节点） | 批准节点设备 | 状态存储位置 | 说明

### DOC-0366 · Signal (signal-cli)

- path: `zh-CN/channels/signal.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 209
- headings: Signal (signal-cli) | 快速设置（初学者） | 它是什么 | 配置写入 | 号码模型（重要） | 设置（快速路径） | 外部守护进程模式（httpUrl） | 访问控制（私信 + 群组）

### DOC-0367 · Slack

- path: `zh-CN/channels/slack.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 531
- headings: Slack | Socket 模式（默认） | 快速设置（新手） | 设置 | OpenClaw 配置（最小） | 用户令牌（可选） | 令牌使用 | 历史上下文

### DOC-0368 · Telegram（Bot API）

- path: `zh-CN/channels/telegram.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 751
- headings: Telegram（Bot API） | 快速设置（入门） | 这是什么 | 设置（快速路径） | 1）创建机器人 token（BotFather） | 2）配置 token（环境变量或配置文件） | Token + 隐私 + 权限（Telegram 端） | Token 创建（BotFather）

### DOC-0369 · Tlon（插件）

- path: `zh-CN/channels/tlon.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 136
- headings: Tlon（插件） | 需要插件 | 设置 | 群组频道 | 访问控制 | 投递目标（CLI/cron） | 注意事项

### DOC-0370 · 渠道故障排除

- path: `zh-CN/channels/troubleshooting.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `ev-troubleshooting`
- line_count: 36
- headings: 渠道故障排除 | 渠道 | Telegram 快速修复

### DOC-0371 · Twitch（插件）

- path: `zh-CN/channels/twitch.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 385
- headings: Twitch（插件） | 需要插件 | 快速设置（新手） | 它是什么 | 设置（详细） | 生成凭证 | 配置机器人 | 访问控制（推荐）

### DOC-0372 · WhatsApp（网页渠道）

- path: `zh-CN/channels/whatsapp.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 411
- headings: WhatsApp（网页渠道） | 快速设置（新手） | 目标 | 配置写入 | 架构（谁拥有什么） | 获取手机号码（两种模式） | 专用号码（推荐） | 个人号码（备选方案）

### DOC-0373 · Zalo (Bot API)

- path: `zh-CN/channels/zalo.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 196
- headings: Zalo (Bot API) | 需要插件 | 快速设置（初学者） | 它是什么 | 设置（快速路径） | 1）创建 bot token（Zalo Bot 平台） | 2）配置 token（环境变量或配置） | 工作原理（行为）

### DOC-0374 · Zalo Personal（非官方）

- path: `zh-CN/channels/zalouser.md`
- locale: `zh-CN`
- category: `channels`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 147
- headings: Zalo Personal（非官方） | 需要插件 | 前置条件：zca-cli | 快速设置（新手） | 这是什么 | 命名 | 查找 ID（目录） | 限制

### DOC-0375 · acp

- path: `zh-CN/cli/acp.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 173
- headings: acp | 用法 | Remote Gateway | Attach to an existing session key | Attach by label (must already exist) | Reset the session key before the first prompt | ACP 客户端（调试） | Point the spawned bridge at a remote Gateway

### DOC-0376 · `openclaw agent`

- path: `zh-CN/cli/agent.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 30
- headings: `openclaw agent` | 示例

### DOC-0377 · `openclaw agents`

- path: `zh-CN/cli/agents.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 82
- headings: `openclaw agents` | 示例 | 身份文件 | 设置身份

### DOC-0378 · `openclaw approvals`

- path: `zh-CN/cli/approvals.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 57
- headings: `openclaw approvals` | 常用命令 | 从文件替换审批 | 允许列表辅助命令 | 注意事项

### DOC-0379 · `openclaw browser`

- path: `zh-CN/cli/browser.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 114
- headings: `openclaw browser` | 通用标志 | 快速开始（本地） | 配置文件 | 标签页 | 快照 / 截图 / 操作 | Chrome 扩展中继（通过工具栏按钮附加） | 远程浏览器控制（node host 代理）

### DOC-0380 · `openclaw channels`

- path: `zh-CN/cli/channels.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 86
- headings: `openclaw channels` | 常用命令 | 添加/删除账户 | 登录/登出（交互式） | 故障排除 | 能力探测 | 解析名称为 ID

### DOC-0381 · `openclaw config`

- path: `zh-CN/cli/config.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 57
- headings: `openclaw config` | 示例 | 路径 | 值

### DOC-0382 · `openclaw configure`

- path: `zh-CN/cli/configure.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 38
- headings: `openclaw configure` | 示例

### DOC-0383 · `openclaw cron`

- path: `zh-CN/cli/cron.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 43
- headings: `openclaw cron` | 常见编辑

### DOC-0384 · `openclaw dashboard`

- path: `zh-CN/cli/dashboard.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 23
- headings: `openclaw dashboard`

### DOC-0385 · `openclaw devices`

- path: `zh-CN/cli/devices.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 74
- headings: `openclaw devices` | 命令 | `openclaw devices list` | `openclaw devices approve <requestId>` | `openclaw devices reject <requestId>` | `openclaw devices rotate --device <id> --role <role> [--scope <scope...>]` | `openclaw devices revoke --device <id> --role <role>` | 通用选项

### DOC-0386 · `openclaw directory`

- path: `zh-CN/cli/directory.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 70
- headings: `openclaw directory` | 通用参数 | 说明 | 将结果用于 `message send` | ID 格式（按渠道） | Self（"我"） | Peers（联系人/用户） | 群组

### DOC-0387 · `openclaw dns`

- path: `zh-CN/cli/dns.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 30
- headings: `openclaw dns` | 设置

### DOC-0388 · `openclaw docs`

- path: `zh-CN/cli/docs.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 22
- headings: `openclaw docs`

### DOC-0389 · `openclaw doctor`

- path: `zh-CN/cli/doctor.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-troubleshooting`
- line_count: 48
- headings: `openclaw doctor` | 示例 | macOS：`launchctl` 环境变量覆盖

### DOC-0390 · Gateway 网关 CLI

- path: `zh-CN/cli/gateway.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 206
- headings: Gateway 网关 CLI | 运行 Gateway 网关 | 选项 | 查询运行中的 Gateway 网关 | `gateway health` | `gateway status` | `gateway probe` | 通过 SSH 远程（Mac 应用对等）

### DOC-0391 · `openclaw health`

- path: `zh-CN/cli/health.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 28
- headings: `openclaw health`

### DOC-0392 · `openclaw hooks`

- path: `zh-CN/cli/hooks.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 298
- headings: `openclaw hooks` | 列出所有钩子 | 获取钩子信息 | 检查钩子资格 | 启用钩子 | 禁用钩子 | 安装钩子 | 本地目录

### DOC-0393 · CLI 参考

- path: `zh-CN/cli/index.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 1032
- headings: CLI 参考 | 命令页面 | 全局标志 | 输出样式 | 颜色调色板 | 命令树 | 安全 | 插件

### DOC-0394 · `openclaw logs`

- path: `zh-CN/cli/logs.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 31
- headings: `openclaw logs` | 示例

### DOC-0395 · `openclaw memory`

- path: `zh-CN/cli/memory.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 52
- headings: `openclaw memory` | 示例 | 选项

### DOC-0396 · `openclaw message`

- path: `zh-CN/cli/message.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 246
- headings: `openclaw message` | 用法 | 通用标志 | 操作 | 核心 | 线程 | 表情符号 | 贴纸

### DOC-0397 · `openclaw models`

- path: `zh-CN/cli/models.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 85
- headings: `openclaw models` | 常用命令 | `models status` | 别名 + 回退 | 认证配置

### DOC-0398 · `openclaw node`

- path: `zh-CN/cli/node.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 115
- headings: `openclaw node` | 为什么使用节点主机？ | 浏览器代理（零配置） | 运行（前台） | 服务（后台） | 配对 | 执行批准

### DOC-0399 · `openclaw nodes`

- path: `zh-CN/cli/nodes.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 80
- headings: `openclaw nodes` | 常用命令 | 调用 / 运行 | Exec 风格默认值

### DOC-0400 · `openclaw onboard`

- path: `zh-CN/cli/onboard.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 36
- headings: `openclaw onboard` | 示例

### DOC-0401 · `openclaw pairing`

- path: `zh-CN/cli/pairing.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 28
- headings: `openclaw pairing` | 命令

### DOC-0402 · `openclaw plugins`

- path: `zh-CN/cli/plugins.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 66
- headings: `openclaw plugins` | 命令 | 安装 | 更新

### DOC-0403 · `openclaw reset`

- path: `zh-CN/cli/reset.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 24
- headings: `openclaw reset`

### DOC-0404 · 沙箱 CLI

- path: `zh-CN/cli/sandbox.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 158
- headings: 沙箱 CLI | 概述 | 命令 | `openclaw sandbox explain` | `openclaw sandbox list` | `openclaw sandbox recreate` | 使用场景 | 更新 Docker 镜像后

### DOC-0405 · `openclaw security`

- path: `zh-CN/cli/security.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 33
- headings: `openclaw security` | 审计

### DOC-0406 · `openclaw sessions`

- path: `zh-CN/cli/sessions.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 23
- headings: `openclaw sessions`

### DOC-0407 · `openclaw setup`

- path: `zh-CN/cli/setup.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 36
- headings: `openclaw setup` | 示例

### DOC-0408 · `openclaw skills`

- path: `zh-CN/cli/skills.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 33
- headings: `openclaw skills` | 命令

### DOC-0409 · `openclaw status`

- path: `zh-CN/cli/status.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 33
- headings: `openclaw status`

### DOC-0410 · `openclaw system`

- path: `zh-CN/cli/system.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 63
- headings: `openclaw system` | 常用命令 | `system event` | `system heartbeat last|enable|disable` | `system presence` | 注意

### DOC-0411 · `openclaw tui`

- path: `zh-CN/cli/tui.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 30
- headings: `openclaw tui` | 示例

### DOC-0412 · `openclaw uninstall`

- path: `zh-CN/cli/uninstall.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-upgrade`
- line_count: 24
- headings: `openclaw uninstall`

### DOC-0413 · `openclaw update`

- path: `zh-CN/cli/update.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 101
- headings: `openclaw update` | 用法 | 选项 | `update status` | `update wizard` | 工作原理 | Git 检出流程 | `--update` 简写

### DOC-0414 · `openclaw voicecall`

- path: `zh-CN/cli/voicecall.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 41
- headings: `openclaw voicecall` | 常用命令 | 暴露 Webhook（Tailscale）

### DOC-0415 · `openclaw webhooks`

- path: `zh-CN/cli/webhooks.md`
- locale: `zh-CN`
- category: `cli`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-ops-monitoring`
- line_count: 32
- headings: `openclaw webhooks` | Gmail

### DOC-0416 · 智能体循环（OpenClaw）

- path: `zh-CN/concepts/agent-loop.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 146
- headings: 智能体循环（OpenClaw） | 入口点 | 工作原理（高层次） | 队列 + 并发 | 会话 + 工作区准备 | 提示组装 + 系统提示 | 钩子点（可以拦截的位置） | 内部钩子（Gateway 网关钩子）

### DOC-0417 · 智能体工作区

- path: `zh-CN/concepts/agent-workspace.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 219
- headings: 智能体工作区 | 默认位置 | 额外的工作区文件夹 | 工作区文件映射（每个文件的含义） | 工作区中不包含的内容 | Git 备份（推荐，私有） | 1）初始化仓库 | 2）添加私有远程（适合初学者的选项）

### DOC-0418 · 智能体运行时 🤖

- path: `zh-CN/concepts/agent.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 115
- headings: 智能体运行时 🤖 | 工作区（必需） | 引导文件（注入） | 内置工具 | Skills | pi-mono 集成 | 会话 | 流式传输中的引导

### DOC-0419 · Gateway 网关架构

- path: `zh-CN/concepts/architecture.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 123
- headings: Gateway 网关架构 | 概述 | 组件和流程 | Gateway 网关（守护进程） | 客户端（mac 应用 / CLI / web 管理） | 节点（macOS / iOS / Android / 无头设备） | WebChat | 连接生命周期（单个客户端）

### DOC-0420 · 上下文窗口与压缩

- path: `zh-CN/concepts/compaction.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 67
- headings: 上下文窗口与压缩 | 什么是压缩 | 配置 | 自动压缩（默认开启） | 手动压缩 | 上下文窗口来源 | 压缩与修剪 | 提示

### DOC-0421 · 上下文

- path: `zh-CN/concepts/context.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 168
- headings: 上下文 | 快速开始（检查上下文） | 示例输出 | `/context list` | `/context detail` | 什么计入上下文窗口 | OpenClaw 如何构建系统提示词 | 注入的工作区文件（项目上下文）

### DOC-0422 · 亮点

- path: `zh-CN/concepts/features.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 59
- headings: 亮点 | 完整列表

### DOC-0423 · Markdown 格式化

- path: `zh-CN/concepts/markdown-formatting.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 117
- headings: Markdown 格式化 | 目标 | 管道 | IR 示例 | 使用场景 | 表格处理 | 分块规则 | 链接策略

### DOC-0424 · 记忆

- path: `zh-CN/concepts/memory.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 412
- headings: 记忆 | 记忆文件（Markdown） | 何时写入记忆 | 自动记忆刷新（压缩前触发） | 向量记忆搜索 | 额外记忆路径 | Gemini 嵌入（原生） | 记忆工具的工作原理

### DOC-0425 · 消息

- path: `zh-CN/concepts/messages.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 141
- headings: 消息 | 消息流程（高层概述） | 入站去重 | 入站防抖 | 会话和设备 | 入站正文和历史上下文 | 队列和后续消息 | 流式传输、分块和批处理

### DOC-0426 · 模型故障转移

- path: `zh-CN/concepts/model-failover.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 145
- headings: 模型故障转移 | 认证存储（密钥 + OAuth） | 配置文件 ID | 轮换顺序 | 会话粘性（缓存友好） | 为什么 OAuth 可能"看起来丢失" | 冷却时间 | 账单禁用

### DOC-0427 · 模型提供商

- path: `zh-CN/concepts/model-providers.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 320
- headings: 模型提供商 | 快速规则 | 内置提供商（pi-ai 目录） | OpenAI | Anthropic | OpenAI Code (Codex) | OpenCode Zen | Google Gemini（API 密钥）

### DOC-0428 · 模型 CLI

- path: `zh-CN/concepts/models.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 196
- headings: 模型 CLI | 模型选择工作原理 | 快速模型推荐（经验之谈） | 设置向导（推荐） | 配置键（概述） | "Model is not allowed"（以及为什么回复停止） | 在聊天中切换模型（`/model`） | CLI 命令

### DOC-0429 · 多智能体路由

- path: `zh-CN/concepts/multi-agent.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 372
- headings: 多智能体路由 | 什么是"一个智能体"？ | 路径（快速映射） | 单智能体模式（默认） | 智能体助手 | 多个智能体 = 多个人、多种人格 | 一个 WhatsApp 号码，多个人（私信分割） | 路由规则（消息如何选择智能体）

### DOC-0430 · OAuth

- path: `zh-CN/concepts/oauth.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 151
- headings: OAuth | 令牌汇聚点（为什么需要它） | 存储（令牌存放位置） | Anthropic setup-token（订阅认证） | OAuth 交换（登录工作原理） | Anthropic（Claude Pro/Max）setup-token | OpenAI Codex（ChatGPT OAuth） | 刷新 + 过期

### DOC-0431 · 在线状态

- path: `zh-CN/concepts/presence.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 99
- headings: 在线状态 | 在线状态字段（显示的内容） | 生产者（在线状态来源） | 1）Gateway 网关自身条目 | 2）WebSocket 连接 | 为什么一次性 CLI 命令不会显示 | 3）`system-event` 信标 | 4）节点连接（role: node）

### DOC-0432 · 命令队列（2026-01-16）

- path: `zh-CN/concepts/queue.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 94
- headings: 命令队列（2026-01-16） | 为什么需要 | 工作原理 | 队列模式（按渠道） | 队列选项 | 按会话覆盖 | 范围和保证 | 故障排除

### DOC-0433 · 重试策略

- path: `zh-CN/concepts/retry.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 76
- headings: 重试策略 | 目标 | 默认值 | 行为 | Discord | Telegram | 配置 | 注意事项

### DOC-0434 · 会话剪枝

- path: `zh-CN/concepts/session-pruning.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 129
- headings: 会话剪枝 | 运行时机 | 智能默认值（Anthropic） | 改进内容（成本 + 缓存行为） | 可以剪枝的内容 | 上下文窗口估算 | 模式 | cache-ttl

### DOC-0435 · 会话工具

- path: `zh-CN/concepts/session-tool.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 200
- headings: 会话工具 | 工具名称 | 键模型 | sessions_list | sessions_history | sessions_send | Channel 字段 | 安全 / 发送策略

### DOC-0436 · 会话管理

- path: `zh-CN/concepts/session.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 166
- headings: 会话管理 | Gateway 网关是唯一数据源 | 状态存储位置 | 会话修剪 | 压缩前记忆刷新 | 传输到会话键的映射 | 生命周期 | 发送策略（可选）

### DOC-0437 · 会话

- path: `zh-CN/concepts/sessions.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 17
- headings: 会话

### DOC-0438 · 流式传输 + 分块

- path: `zh-CN/concepts/streaming.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 133
- headings: 流式传输 + 分块 | 分块流式传输（渠道消息） | 分块算法（低/高边界） | 合并（合并流式块） | 块之间的类人节奏 | "流式传输块或全部内容" | Telegram 草稿流式传输（类令牌）

### DOC-0439 · 系统提示词

- path: `zh-CN/concepts/system-prompt.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 101
- headings: 系统提示词 | 结构 | 提示词模式 | 工作区引导注入 | 时间处理 | Skills | 文档

### DOC-0440 · 时区

- path: `zh-CN/concepts/timezone.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 96
- headings: 时区 | 消息信封（默认为本地时间） | 示例 | 工具负载（原始提供商数据 + 规范化字段） | 系统提示词的用户时区

### DOC-0441 · TypeBox 作为协议的事实来源

- path: `zh-CN/concepts/typebox.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 284
- headings: TypeBox 作为协议的事实来源 | 心智模型（30 秒） | 模式所在位置 | 当前流程 | 模式在运行时的使用方式 | 示例帧 | 最小客户端（Node.js） | 实践示例：端到端添加方法

### DOC-0442 · 输入指示器

- path: `zh-CN/concepts/typing-indicators.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 74
- headings: 输入指示器 | 默认行为 | 模式 | 配置 | 注意事项

### DOC-0443 · 使用量跟踪

- path: `zh-CN/concepts/usage-tracking.md`
- locale: `zh-CN`
- category: `concepts`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 42
- headings: 使用量跟踪 | 功能简介 | 展示位置 | 提供商及凭据

### DOC-0444 · 日期与时间

- path: `zh-CN/date-time.md`
- locale: `zh-CN`
- category: `date-time.md`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 129
- headings: 日期与时间 | 消息信封（默认为本地时间） | 示例 | 系统提示词：当前日期与时间 | 系统事件行（默认为本地时间） | 配置用户时区和格式 | 时间格式检测（auto） | 工具载荷 + 连接器（原始提供商时间 + 标准化字段）

### DOC-0445 · Node + tsx "\_\_name is not a function" 崩溃

- path: `zh-CN/debug/node-issue.md`
- locale: `zh-CN`
- category: `debug`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 90
- headings: Node + tsx "\_\_name is not a function" 崩溃 | 概述 | 环境 | 复现步骤（仅 Node） | 在仓库根目录 | 仓库内最小复现 | Node 版本检查 | 说明 / 假设

### DOC-0446 · 诊断标志

- path: `zh-CN/diagnostics/flags.md`
- locale: `zh-CN`
- category: `diagnostics`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 98
- headings: 诊断标志 | 工作原理 | 通过配置启用 | 环境变量覆盖（一次性） | 日志存储位置 | 提取日志 | 注意事项

### DOC-0447 · 新手引导 + 配置协议

- path: `zh-CN/experiments/onboarding-config-protocol.md`
- locale: `zh-CN`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 47
- headings: 新手引导 + 配置协议 | 组件 | Gateway 网关 RPC | UI 提示 | 注意

### DOC-0448 · Cron Add 加固 & Schema 对齐

- path: `zh-CN/experiments/plans/cron-add-hardening.md`
- locale: `zh-CN`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-ops-monitoring`
- line_count: 70
- headings: Cron Add 加固 & Schema 对齐 | 背景 | 目标 | 非目标 | 发现（当前差距） | 变更内容 | 当前行为 | 验证

### DOC-0449 · Telegram 允许列表加固

- path: `zh-CN/experiments/plans/group-policy-hardening.md`
- locale: `zh-CN`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 45
- headings: Telegram 允许列表加固 | 摘要 | 更改内容 | 示例 | 为什么重要 | 相关文档

### DOC-0450 · OpenResponses Gateway 网关集成计划

- path: `zh-CN/experiments/plans/openresponses-gateway.md`
- locale: `zh-CN`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 121
- headings: OpenResponses Gateway 网关集成计划 | 背景 | 目标 | 非目标 | 研究摘要 | 提议的架构 | Chat Completions 弃用路径 | 第一阶段支持子集

### DOC-0451 · 模型配置（探索）

- path: `zh-CN/experiments/proposals/model-config.md`
- locale: `zh-CN`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 42
- headings: 模型配置（探索） | 动机 | 可能的方向（高层级） | 待解决的问题

### DOC-0452 · 工作区记忆 v2（离线）：研究笔记

- path: `zh-CN/experiments/research/memory.md`
- locale: `zh-CN`
- category: `experiments`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 235
- headings: 工作区记忆 v2（离线）：研究笔记 | 为什么要改变？ | 设计目标 | 北极星模型（Hindsight × Letta） | 提议的架构（Markdown 数据源 + 派生索引） | 规范存储（git 友好） | 派生存储（机器回忆） | Retain / Recall / Reflect（操作循环）

### DOC-0453 · 认证

- path: `zh-CN/gateway/authentication.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 142
- headings: 认证 | 推荐的 Anthropic 设置（API 密钥） | Anthropic：setup-token（订阅认证） | 检查模型认证状态 | 控制使用哪个凭证 | 每会话（聊天命令） | 每智能体（CLI 覆盖） | 故障排除

### DOC-0454 · 后台 Exec + Process 工具

- path: `zh-CN/gateway/background-process.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 100
- headings: 后台 Exec + Process 工具 | exec 工具 | 子进程桥接 | process 工具 | 示例

### DOC-0455 · Bonjour / mDNS 设备发现

- path: `zh-CN/gateway/bonjour.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 174
- headings: Bonjour / mDNS 设备发现 | 通过 Tailscale 的广域 Bonjour（单播 DNS‑SD） | Gateway 网关配置（推荐） | 一次性 DNS 服务器设置（Gateway 网关主机） | Tailscale DNS 设置 | Gateway 网关监听器安全（推荐） | 什么在广播 | 服务类型

### DOC-0456 · Bridge 协议（旧版节点传输）

- path: `zh-CN/gateway/bridge-protocol.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 86
- headings: Bridge 协议（旧版节点传输） | 为什么我们有两种协议 | 传输 | 握手 + 配对 | 帧 | Exec 生命周期事件 | Tailnet 使用 | 版本控制

### DOC-0457 · CLI 后端（回退运行时）

- path: `zh-CN/gateway/cli-backends.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 213
- headings: CLI 后端（回退运行时） | 新手友好快速开始 | 作为回退使用 | 配置概览 | 配置示例 | 工作原理 | 会话 | 图像（传递）

### DOC-0458 · 配置示例

- path: `zh-CN/gateway/configuration-examples.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 587
- headings: 配置示例 | 快速开始 | 绝对最小配置 | 推荐的入门配置 | 扩展示例（主要选项） | 常见模式 | 多平台设置 | OAuth 带 API 密钥回退

### DOC-0459 · 配置 🔧

- path: `zh-CN/gateway/configuration.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 3332
- headings: 配置 🔧 | 严格配置验证 | Schema + UI 提示 | 应用 + 重启（RPC） | 部分更新（RPC） | 最小配置（推荐起点） | 自聊天模式（推荐用于群组控制） | 配置包含（`$include`）

### DOC-0460 · 设备发现 & 传输协议

- path: `zh-CN/gateway/discovery.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 123
- headings: 设备发现 & 传输协议 | 术语 | 为什么我们同时保留"直连"和 SSH | 发现输入（客户端如何了解 Gateway 网关位置） | 1）Bonjour / mDNS（仅限 LAN） | 服务信标详情 | 2）Tailnet（跨网络） | 3）手动 / SSH 目标

### DOC-0461 · Doctor

- path: `zh-CN/gateway/doctor.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-troubleshooting`
- line_count: 238
- headings: Doctor | 快速开始 | 无头/自动化 | 功能概述 | 详细行为和原理 | 0）可选更新（git 安装） | 1）配置规范化 | 2）遗留配置键迁移

### DOC-0462 · Gateway 网关锁

- path: `zh-CN/gateway/gateway-lock.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 41
- headings: Gateway 网关锁 | 原因 | 机制 | 错误表面 | 运维说明

### DOC-0463 · 健康检查（CLI）

- path: `zh-CN/gateway/health.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-ops-monitoring`
- line_count: 42
- headings: 健康检查（CLI） | 快速检查 | 深度诊断 | 当出现故障时 | 专用"health"命令

### DOC-0464 · 心跳（Gateway 网关）

- path: `zh-CN/gateway/heartbeat.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-ops-monitoring`
- line_count: 274
- headings: 心跳（Gateway 网关） | 快速开始（新手） | 默认值 | 心跳提示的用途 | 响应约定 | 配置 | 作用域和优先级 | 单智能体心跳

### DOC-0465 · Gateway 网关服务运行手册

- path: `zh-CN/gateway/index.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 335
- headings: Gateway 网关服务运行手册 | 是什么 | 如何运行（本地） | 在 stdio 中获取完整的调试/追踪日志： | 如果端口被占用，终止监听器然后启动： | 开发循环（TS 更改时自动重载）： | 远程访问 | 多个 Gateway 网关（同一主机）

### DOC-0466 · 本地模型

- path: `zh-CN/gateway/local-models.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 157
- headings: 本地模型 | 推荐：LM Studio + MiniMax M2.1（Responses API，完整尺寸） | 混合配置：托管为主，本地备用 | 本地优先，托管作为安全网 | 区域托管/数据路由 | 其他 OpenAI 兼容本地代理 | 故障排除

### DOC-0467 · 日志

- path: `zh-CN/gateway/logging.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 114
- headings: 日志 | 基于文件的日志记录器 | 控制台捕获 | 工具摘要脱敏 | Gateway 网关 WebSocket 日志 | WS 日志样式 | 优化的（仅错误/慢调用） | 显示所有 WS 流量（配对）

### DOC-0468 · 多 Gateway 网关（同一主机）

- path: `zh-CN/gateway/multiple-gateways.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 119
- headings: 多 Gateway 网关（同一主机） | 隔离检查清单（必需） | 推荐：配置文件（`--profile`） | main | rescue | 救援机器人指南 | 如何安装（救援机器人） | 主机器人（现有或新建，不带 --profile 参数）

### DOC-0469 · 核心规则

- path: `zh-CN/gateway/network-model.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 23
- headings: 核心规则

### DOC-0470 · OpenAI Chat Completions（HTTP）

- path: `zh-CN/gateway/openai-http-api.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 125
- headings: OpenAI Chat Completions（HTTP） | 认证 | 选择智能体 | 启用端点 | 禁用端点 | 会话行为 | 流式传输（SSE） | 示例

### DOC-0471 · OpenResponses API（HTTP）

- path: `zh-CN/gateway/openresponses-http-api.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 317
- headings: OpenResponses API（HTTP） | 认证 | 选择智能体 | 启用端点 | 禁用端点 | 会话行为 | 请求结构（支持的） | Item（输入）

### DOC-0472 · Gateway 网关拥有的配对（选项 B）

- path: `zh-CN/gateway/pairing.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 99
- headings: Gateway 网关拥有的配对（选项 B） | 概念 | 配对工作原理 | CLI 工作流程（支持无头模式） | API 接口（Gateway 网关协议） | 自动审批（macOS 应用） | 存储（本地，私有） | 传输层行为

### DOC-0473 · Gateway 网关协议（WebSocket）

- path: `zh-CN/gateway/protocol.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 220
- headings: Gateway 网关协议（WebSocket） | 传输 | 握手（connect） | 节点示例 | 帧格式 | 角色 + 作用域 | 角色 | 作用域（operator）

### DOC-0474 · 使用远程 Gateway 网关运行 OpenClaw.app

- path: `zh-CN/gateway/remote-gateway-readme.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 164
- headings: 使用远程 Gateway 网关运行 OpenClaw.app | 概述 | 快速设置 | 步骤 1：添加 SSH 配置 | 步骤 2：复制 SSH 密钥 | 步骤 3：设置 Gateway 网关令牌 | 步骤 4：启动 SSH 隧道 | 步骤 5：重启 OpenClaw.app

### DOC-0475 · 远程访问（SSH、隧道和 tailnet）

- path: `zh-CN/gateway/remote.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 133
- headings: 远程访问（SSH、隧道和 tailnet） | 核心理念 | 常见的 VPN/tailnet 设置（智能体所在位置） | 1) tailnet 中始终在线的 Gateway 网关（VPS 或家庭服务器） | 2) 家庭桌面运行 Gateway 网关，笔记本电脑作为远程控制 | 3) 笔记本电脑运行 Gateway 网关，从其他机器远程访问 | 命令流（什么在哪里运行） | SSH 隧道（CLI + 工具）

### DOC-0476 · 沙箱 vs 工具策略 vs 提权

- path: `zh-CN/gateway/sandbox-vs-tool-policy-vs-elevated.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 135
- headings: 沙箱 vs 工具策略 vs 提权 | 快速调试 | 沙箱：工具在哪里运行 | 绑定挂载（安全快速检查） | 工具策略：哪些工具存在/可调用 | 工具组（简写） | 提权：仅限 exec 的"在主机上运行" | 常见"沙箱困境"修复

### DOC-0477 · 沙箱隔离

- path: `zh-CN/gateway/sandboxing.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 188
- headings: 沙箱隔离 | 什么会被沙箱隔离 | 模式 | 作用域 | 工作区访问 | 自定义绑定挂载 | 镜像 + 设置 | setupCommand（一次性容器设置）

### DOC-0478 · 安全性 🔒

- path: `zh-CN/gateway/security/index.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-security`
- line_count: 777
- headings: 安全性 🔒 | 快速检查：`openclaw security audit` | 审计检查内容（高层概述） | 凭证存储映射 | 安全审计清单 | 通过 HTTP 访问控制 UI | 反向代理配置 | 本地会话日志存储在磁盘上

### DOC-0479 · Tailscale（Gateway 网关仪表盘）

- path: `zh-CN/gateway/tailscale.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 124
- headings: Tailscale（Gateway 网关仪表盘） | 模式 | 认证 | 配置示例 | 仅限 Tailnet（Serve） | 仅限 Tailnet（绑定到 Tailnet IP） | 公共互联网（Funnel + 共享密码） | CLI 示例

### DOC-0480 · 工具调用（HTTP）

- path: `zh-CN/gateway/tools-invoke-http-api.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 92
- headings: 工具调用（HTTP） | 认证 | 请求体 | 策略 + 路由行为 | 响应 | 示例

### DOC-0481 · 故障排除 🔧

- path: `zh-CN/gateway/troubleshooting.md`
- locale: `zh-CN`
- category: `gateway`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `ev-troubleshooting`
- line_count: 771
- headings: 故障排除 🔧 | 状态与诊断 | 常见问题 | No API key found for provider "anthropic" | OAuth token refresh failed（Anthropic Claude 订阅） | 在 Gateway 网关主机上运行（粘贴 setup-token） | Control UI 在 HTTP 上失败（"device identity required" / "connect failed"） | CI Secrets Scan Failed

### DOC-0482 · 调试

- path: `zh-CN/help/debugging.md`
- locale: `zh-CN`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 160
- headings: 调试 | 运行时调试覆盖 | Gateway 网关监视模式 | Dev 配置文件 + dev Gateway 网关（--dev） | 原始流日志（OpenClaw） | 原始块日志（pi-mono） | 安全注意事项

### DOC-0483 · 环境变量

- path: `zh-CN/help/environment.md`
- locale: `zh-CN`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 88
- headings: 环境变量 | 优先级（从高到低） | 配置 `env` 块 | Shell 环境导入 | 配置中的环境变量替换 | 相关内容

### DOC-0484 · 常见问题

- path: `zh-CN/help/faq.md`
- locale: `zh-CN`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 2628
- headings: 常见问题 | 目录 | 出问题后的最初六十秒 | 快速开始与首次运行设置 | 我卡住了，最快的排障方法是什么 | 安装和设置 OpenClaw 的推荐方式是什么 | 新手引导后如何打开仪表板 | 如何在本地和远程环境中验证仪表板令牌

### DOC-0485 · 帮助

- path: `zh-CN/help/index.md`
- locale: `zh-CN`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 28
- headings: 帮助

### DOC-0486 · 脚本

- path: `zh-CN/help/scripts.md`
- locale: `zh-CN`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 35
- headings: 脚本 | 约定 | 认证监控脚本 | 添加脚本时

### DOC-0487 · 测试

- path: `zh-CN/help/testing.md`
- locale: `zh-CN`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 375
- headings: 测试 | 快速开始 | 测试套件（在哪里运行什么） | 单元/集成测试（默认） | 端到端测试（Gateway 网关冒烟测试） | 实时测试（真实提供商 + 真实模型） | 我应该运行哪个套件？ | 实时测试：模型冒烟测试（配置文件密钥）

### DOC-0488 · 故障排除

- path: `zh-CN/help/troubleshooting.md`
- locale: `zh-CN`
- category: `help`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-troubleshooting`
- line_count: 104
- headings: 故障排除 | 最初的六十秒 | 常见的“它坏了”情况 | `openclaw: command not found` | 安装程序失败（或你需要完整日志） | Gateway 网关“unauthorized”、无法连接或持续重连 | 控制 UI 在 HTTP 上失败（需要设备身份） | `docs.openclaw.ai` 显示 SSL 错误（Comcast/Xfinity）

### DOC-0489 · OpenClaw 🦞

- path: `zh-CN/index.md`
- locale: `zh-CN`
- category: `index.md`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 186
- headings: OpenClaw 🦞 | 工作原理 | 核心功能 | 快速开始 | 仪表板 | 配置（可选） | 从这里开始 | 了解更多

### DOC-0490 · Ansible 安装

- path: `zh-CN/install/ansible.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 215
- headings: Ansible 安装 | 快速开始 | 你将获得 | 要求 | 安装内容 | 安装后设置 | 常用命令 | 检查服务状态

### DOC-0491 · Bun（实验性）

- path: `zh-CN/install/bun.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 65
- headings: Bun（实验性） | 状态 | 安装 | 构建/测试（Bun） | Bun 生命周期脚本（默认被阻止） | 注意事项

### DOC-0492 · 开发渠道

- path: `zh-CN/install/development-channels.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 81
- headings: 开发渠道 | 切换渠道 | 插件和渠道 | 标签最佳实践 | macOS 应用可用性

### DOC-0493 · Docker（可选）

- path: `zh-CN/install/docker.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 532
- headings: Docker（可选） | Docker 适合我吗？ | 要求 | 容器化 Gateway 网关（Docker Compose） | 快速开始（推荐） | 手动流程（compose） | 控制 UI 令牌 + 配对（Docker） | 额外挂载（可选）

### DOC-0494 · exe.dev

- path: `zh-CN/install/exe-dev.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 127
- headings: exe.dev | 新手快速路径 | 你需要什么 | 使用 Shelley 自动安装 | 手动安装 | 1) 创建 VM | 2) 安装先决条件（在 VM 上） | 3) 安装 OpenClaw

### DOC-0495 · Fly.io 部署

- path: `zh-CN/install/fly.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 490
- headings: Fly.io 部署 | 你需要什么 | 初学者快速路径 | 1）创建 Fly 应用 | Clone the repo | Create a new Fly app (pick your own name) | Create a persistent volume (1GB is usually enough) | 2）配置 fly.toml

### DOC-0496 · 在 GCP Compute Engine 上运行 OpenClaw（Docker，生产 VPS 指南）

- path: `zh-CN/install/gcp.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 510
- headings: 在 GCP Compute Engine 上运行 OpenClaw（Docker，生产 VPS 指南） | 目标 | 我们在做什么（简单说明）？ | 快速路径（有经验的运维人员） | 你需要什么 | 1) 安装 gcloud CLI（或使用 Console） | 2) 创建 GCP 项目 | 3) 创建 VM

### DOC-0497 · 在 Hetzner 上运行 OpenClaw（Docker，生产 VPS 指南）

- path: `zh-CN/install/hetzner.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 337
- headings: 在 Hetzner 上运行 OpenClaw（Docker，生产 VPS 指南） | 目标 | 我们在做什么（简单说明）？ | 快速路径（有经验的运维人员） | 你需要什么 | 1) 配置 VPS | 2) 安装 Docker（在 VPS 上） | 3) 克隆 OpenClaw 仓库

### DOC-0498 · 安装

- path: `zh-CN/install/index.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 193
- headings: 安装 | 快速安装（推荐） | 系统要求 | 选择安装路径 | 1）安装器脚本（推荐） | 2）全局安装（手动） | 3）从源代码（贡献者/开发） | 4）其他安装选项

### DOC-0499 · 安装器内部机制

- path: `zh-CN/install/installer.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 128
- headings: 安装器内部机制 | install.sh（推荐） | 可发现性 / "git 安装"提示 | 为什么需要 Git | 为什么在全新 Linux 上 npm 会报 `EACCES` | install-cli.sh（无需 root 权限的 CLI 安装器） | install.ps1（Windows PowerShell）

### DOC-0500 · 在 macOS 虚拟机上运行 OpenClaw（沙箱隔离）

- path: `zh-CN/install/macos-vm.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 288
- headings: 在 macOS 虚拟机上运行 OpenClaw（沙箱隔离） | 推荐默认方案（大多数用户） | macOS VM 选项 | 在你的 Apple Silicon Mac 上运行本地 VM（Lume） | 托管 Mac 提供商（云） | 快速路径（Lume，有经验的用户） | 你需要什么（Lume） | 1) 安装 Lume

### DOC-0501 · 将 OpenClaw 迁移到新机器

- path: `zh-CN/install/migrating.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 199
- headings: 将 OpenClaw 迁移到新机器 | 开始之前（你要迁移什么） | 1）确定你的状态目录 | 2）确定你的工作区 | 3）了解你将保留什么 | 迁移步骤（推荐） | 步骤 0 — 备份（旧机器） | 如果你使用配置文件或自定义位置，请调整路径

### DOC-0502 · Nix 安装

- path: `zh-CN/install/nix.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 99
- headings: Nix 安装 | 快速开始 | 你将获得 | Nix 模式运行时行为 | 配置 + 状态路径 | Nix 模式下的运行时行为 | 打包注意事项（macOS） | 相关内容

### DOC-0503 · Node.js

- path: `zh-CN/install/node.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 8
- headings: Node.js

### DOC-0504 · 如何开始

- path: `zh-CN/install/northflank.mdx`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 60
- headings: 如何开始 | 你将获得 | 设置流程 | 获取聊天令牌 | Telegram 机器人令牌 | Discord 机器人令牌

### DOC-0505 · 快速检查清单（新用户）

- path: `zh-CN/install/railway.mdx`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 106
- headings: 快速检查清单（新用户） | 一键部署 | 你将获得 | 必需的 Railway 设置 | 公共网络 | Volume（必需） | 变量 | 设置流程

### DOC-0506 · 前提条件

- path: `zh-CN/install/render.mdx`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 169
- headings: 前提条件 | 使用 Render Blueprint 部署 | 了解 Blueprint | 选择套餐 | 部署完成后 | 完成设置向导 | 访问控制面板 | Render 仪表盘功能

### DOC-0507 · 卸载

- path: `zh-CN/install/uninstall.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 135
- headings: 卸载 | 简单方式（CLI 仍已安装） | 手动服务移除（CLI 未安装） | macOS（launchd） | Linux（systemd 用户单元） | Windows（计划任务） | 普通安装 vs 源码检出 | 普通安装（install.sh / npm / pnpm / bun）

### DOC-0508 · 更新

- path: `zh-CN/install/updating.md`
- locale: `zh-CN`
- category: `install`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `ev-upgrade`
- line_count: 233
- headings: 更新 | 推荐：重新运行网站安装程序（原地升级） | 更新之前 | 更新（全局安装） | 更新（`openclaw update`） | 更新（控制 UI / RPC） | 更新（从源码） | 始终运行：`openclaw doctor`

### DOC-0509 · 日志

- path: `zh-CN/logging.md`
- locale: `zh-CN`
- category: `logging.md`
- usecase_bucket: `uc-gateway-operations`
- event_bucket: `-`
- line_count: 329
- headings: 日志 | 日志存放位置 | 如何读取日志 | CLI：实时跟踪（推荐） | 控制 UI（Web） | 仅渠道日志 | 日志格式 | 文件日志（JSONL）

### DOC-0510 · 网络中心

- path: `zh-CN/network.md`
- locale: `zh-CN`
- category: `network.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 59
- headings: 网络中心 | 核心模型 | 配对 + 身份 | 设备发现 + 传输协议 | 节点 + 传输协议 | 安全

### DOC-0511 · 音频 / 语音消息 — 2026-01-17

- path: `zh-CN/nodes/audio.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 120
- headings: 音频 / 语音消息 — 2026-01-17 | 已支持的功能 | 自动检测（默认） | 配置示例 | 提供商 + CLI 回退（OpenAI + Whisper CLI） | 仅提供商 + 作用域控制 | 仅提供商（Deepgram） | 注意事项与限制

### DOC-0512 · 相机捕获（智能体）

- path: `zh-CN/nodes/camera.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 162
- headings: 相机捕获（智能体） | iOS 节点 | 用户设置（默认开启） | 命令（通过 Gateway 网关 `node.invoke`） | 前台要求 | CLI 辅助工具（临时文件 + MEDIA） | Android 节点 | 用户设置（默认开启）

### DOC-0513 · 图像与媒体支持 — 2025-12-05

- path: `zh-CN/nodes/images.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 79
- headings: 图像与媒体支持 — 2025-12-05 | 目标 | CLI 接口 | WhatsApp Web 渠道行为 | 自动回复管道 | 入站媒体到命令（Pi） | 限制与错误 | 测试说明

### DOC-0514 · 节点

- path: `zh-CN/nodes/index.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 348
- headings: 节点 | 配对 + 状态 | 远程节点主机（system.run） | 什么在哪里运行 | 启动节点主机（前台） | 通过 SSH 隧道访问远程 Gateway 网关（loopback 绑定） | 终端 A（保持运行）：转发本地 18790 -> Gateway 网关 127.0.0.1:18789 | 终端 B：导出 Gateway 网关令牌并通过隧道连接

### DOC-0515 · 位置命令（节点）

- path: `zh-CN/nodes/location-command.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 120
- headings: 位置命令（节点） | 简要概述 | 为什么用选择器（而不只是开关） | 设置模型 | 权限映射（node.permissions） | 命令：`location.get` | 后台行为（未来） | 模型/工具集成

### DOC-0516 · 媒体理解（入站）— 2026-01-17

- path: `zh-CN/nodes/media-understanding.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 380
- headings: 媒体理解（入站）— 2026-01-17 | 目标 | 高层行为 | 配置概述 | 模型条目 | 默认值和限制 | 自动检测媒体理解（默认） | 能力（可选）

### DOC-0517 · Talk 模式

- path: `zh-CN/nodes/talk.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 97
- headings: Talk 模式 | 行为（macOS） | 回复中的语音指令 | 配置（`~/.openclaw/openclaw.json`） | macOS UI | 注意事项

### DOC-0518 · 节点故障排查

- path: `zh-CN/nodes/troubleshooting.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `ev-troubleshooting`
- line_count: 8
- headings: 节点故障排查

### DOC-0519 · 语音唤醒（全局唤醒词）

- path: `zh-CN/nodes/voicewake.md`
- locale: `zh-CN`
- category: `nodes`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 72
- headings: 语音唤醒（全局唤醒词） | 存储（Gateway 网关主机） | 协议 | 方法 | 事件 | 客户端行为 | macOS 应用 | iOS 节点

### DOC-0520 · Perplexity Sonar

- path: `zh-CN/perplexity.md`
- locale: `zh-CN`
- category: `perplexity.md`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 84
- headings: Perplexity Sonar | API 选项 | Perplexity（直连） | OpenRouter（替代方案） | 配置示例 | 从 Brave 切换 | 模型

### DOC-0521 · Pi 开发工作流程

- path: `zh-CN/pi-dev.md`
- locale: `zh-CN`
- category: `pi-dev.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 77
- headings: Pi 开发工作流程 | 类型检查和代码检查 | 运行 Pi 测试 | 手动测试 | 完全重置 | 参考资料

### DOC-0522 · Pi 集成架构

- path: `zh-CN/pi.md`
- locale: `zh-CN`
- category: `pi.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 619
- headings: Pi 集成架构 | 概述 | 包依赖 | 文件结构 | 核心集成流程 | 1. 运行嵌入式智能体 | 2. 会话创建 | 3. 事件订阅

### DOC-0523 · Android 应用（节点）

- path: `zh-CN/platforms/android.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 155
- headings: Android 应用（节点） | 支持概览 | 系统控制 | 连接操作手册 | 前置条件 | 1）启动 Gateway 网关 | 2）验证发现（可选） | 通过 unicast DNS-SD 的 Tailnet（维也纳 ⇄ 伦敦）发现

### DOC-0524 · 在 DigitalOcean 上运行 OpenClaw

- path: `zh-CN/platforms/digitalocean.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 269
- headings: 在 DigitalOcean 上运行 OpenClaw | 目标 | 成本比较（2026） | 前提条件 | 1) 创建 Droplet | 2) 通过 SSH 连接 | 3) 安装 OpenClaw | Update system

### DOC-0525 · 平台

- path: `zh-CN/platforms/index.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 60
- headings: 平台 | 选择你的操作系统 | VPS 和托管 | 常用链接 | Gateway 网关服务安装（CLI）

### DOC-0526 · iOS 应用（节点）

- path: `zh-CN/platforms/ios.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 114
- headings: iOS 应用（节点） | 功能 | 要求 | 快速开始（配对 + 连接） | 发现路径 | Bonjour（LAN） | Tailnet（跨网络） | 手动主机/端口

### DOC-0527 · Linux 应用

- path: `zh-CN/platforms/linux.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 101
- headings: Linux 应用 | 新手快速路径（VPS） | 安装 | Gateway 网关 | Gateway 网关服务安装（CLI） | 系统控制（systemd 用户单元）

### DOC-0528 · macOS 上的 Gateway 网关（外部 launchd）

- path: `zh-CN/platforms/mac/bundled-gateway.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 75
- headings: macOS 上的 Gateway 网关（外部 launchd） | 安装 CLI（本地模式必需） | Launchd（Gateway 网关作为 LaunchAgent） | 版本兼容性 | 冒烟测试

### DOC-0529 · Canvas（macOS 应用）

- path: `zh-CN/platforms/mac/canvas.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 128
- headings: Canvas（macOS 应用） | Canvas 存储位置 | 面板行为 | 智能体 API 接口 | Canvas 中的 A2UI | A2UI 命令（v0.8） | 从 Canvas 触发智能体运行 | 安全注意事项

### DOC-0530 · macOS 上的 Gateway 网关生命周期

- path: `zh-CN/platforms/mac/child-process.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 73
- headings: macOS 上的 Gateway 网关生命周期 | 默认行为（launchd） | 未签名的开发构建 | 仅连接模式 | 远程模式 | 为什么我们更喜欢 launchd

### DOC-0531 · macOS 开发者设置

- path: `zh-CN/platforms/mac/dev-setup.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 109
- headings: macOS 开发者设置 | 前置条件 | 1. 安装依赖 | 2. 构建和打包应用 | 3. 安装 CLI | 故障排除 | 构建失败：工具链或 SDK 不匹配 | 授予权限时应用崩溃

### DOC-0532 · macOS 上的健康检查

- path: `zh-CN/platforms/mac/health.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-ops-monitoring`
- line_count: 41
- headings: macOS 上的健康检查 | 菜单栏 | 设置 | 探测工作原理 | 有疑问时

### DOC-0533 · 菜单栏图标状态

- path: `zh-CN/platforms/mac/icon.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 38
- headings: 菜单栏图标状态

### DOC-0534 · 日志（macOS）

- path: `zh-CN/platforms/mac/logging.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 64
- headings: 日志（macOS） | 滚动诊断文件日志（Debug 面板） | macOS 上统一日志的隐私数据 | 为 OpenClaw 启用（`bot.molt`） | 调试后禁用

### DOC-0535 · 菜单栏状态逻辑

- path: `zh-CN/platforms/mac/menu-bar.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 88
- headings: 菜单栏状态逻辑 | 显示内容 | 状态模型 | IconState 枚举（Swift） | ActivityKind → 图标符号 | 视觉映射 | 状态行文本（菜单） | 事件接收

### DOC-0536 · Peekaboo Bridge（macOS UI 自动化）

- path: `zh-CN/platforms/mac/peekaboo.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 62
- headings: Peekaboo Bridge（macOS UI 自动化） | 这是什么（以及不是什么） | 启用桥接 | 客户端发现顺序 | 安全与权限 | 快照行为（自动化） | 故障排除

### DOC-0537 · macOS 权限（TCC）

- path: `zh-CN/platforms/mac/permissions.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 46
- headings: macOS 权限（TCC） | 稳定权限的要求 | 权限提示消失时的恢复清单

### DOC-0538 · OpenClaw macOS 发布（Sparkle）

- path: `zh-CN/platforms/mac/release.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 92
- headings: OpenClaw macOS 发布（Sparkle） | 前提条件 | 构建与打包 | 从仓库根目录运行；设置发布 ID 以启用 Sparkle 订阅源。 | APP_BUILD 必须为纯数字且单调递增，以便 Sparkle 正确比较。 | 打包用于分发的 zip（包含资源分支以支持 Sparkle 增量更新） | 可选：同时构建适合用户使用的样式化 DMG（拖拽到 /Applications） | 推荐：构建 + 公证/装订 zip + DMG

### DOC-0539 · 远程 OpenClaw（macOS ⇄ 远程主机）

- path: `zh-CN/platforms/mac/remote.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 90
- headings: 远程 OpenClaw（macOS ⇄ 远程主机） | 模式 | 远程传输 | 远程主机上的先决条件 | macOS 应用设置 | Web Chat | 权限 | 安全注意事项

### DOC-0540 · Mac 签名（调试构建）

- path: `zh-CN/platforms/mac/signing.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 54
- headings: Mac 签名（调试构建） | 用法 | 从仓库根目录 | 临时签名注意事项 | 关于面板的构建元数据 | 原因

### DOC-0541 · Skills（macOS）

- path: `zh-CN/platforms/mac/skills.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 40
- headings: Skills（macOS） | 数据来源 | 安装操作 | 环境变量/API 密钥 | 远程模式

### DOC-0542 · 语音浮层生命周期（macOS）

- path: `zh-CN/platforms/mac/voice-overlay.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 67
- headings: 语音浮层生命周期（macOS） | 当前意图 | 已实现（2025 年 12 月 9 日） | 后续步骤 | 调试清单 | 迁移步骤（建议）

### DOC-0543 · 语音唤醒与按键通话

- path: `zh-CN/platforms/mac/voicewake.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 74
- headings: 语音唤醒与按键通话 | 模式 | 运行时行为（唤醒词） | 生命周期不变量 | 悬浮窗卡住的故障模式（之前的问题） | 按键通话细节 | 面向用户的设置 | 转发行为

### DOC-0544 · WebChat（macOS 应用）

- path: `zh-CN/platforms/mac/webchat.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 43
- headings: WebChat（macOS 应用） | 启动和调试 | 工作原理 | 安全面 | 已知限制

### DOC-0545 · OpenClaw macOS IPC 架构

- path: `zh-CN/platforms/mac/xpc.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 68
- headings: OpenClaw macOS IPC 架构 | 目标 | 工作原理 | Gateway 网关 + 节点传输 | 节点服务 + 应用 IPC | PeekabooBridge（UI 自动化） | 操作流程 | 加固注意事项

### DOC-0546 · OpenClaw macOS 配套应用（菜单栏 + Gateway 网关代理）

- path: `zh-CN/platforms/macos.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 193
- headings: OpenClaw macOS 配套应用（菜单栏 + Gateway 网关代理） | 功能 | 本地 vs 远程模式 | Launchd 控制 | 节点功能（mac） | Exec 审批（system.run） | 深度链接 | `openclaw://agent`

### DOC-0547 · 在 Oracle Cloud（OCI）上运行 OpenClaw

- path: `zh-CN/platforms/oracle.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 310
- headings: 在 Oracle Cloud（OCI）上运行 OpenClaw | 目标 | 成本比较（2026） | 先决条件 | 1) 创建 OCI 实例 | 2) 连接并更新 | 通过公网 IP 连接 | 更新系统

### DOC-0548 · 在 Raspberry Pi 上运行 OpenClaw

- path: `zh-CN/platforms/raspberry-pi.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 365
- headings: 在 Raspberry Pi 上运行 OpenClaw | 目标 | 硬件要求 | 你需要准备 | 1) 刷写系统 | 2) 通过 SSH 连接 | 或使用 IP 地址 | 3) 系统设置

### DOC-0549 · Windows (WSL2)

- path: `zh-CN/platforms/windows.md`
- locale: `zh-CN`
- category: `platforms`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 156
- headings: Windows (WSL2) | 安装（WSL2） | Gateway 网关 | Gateway 网关服务安装（CLI） | 高级：通过 LAN 暴露 WSL 服务（portproxy） | WSL2 分步安装 | 1）安装 WSL2 + Ubuntu | Or pick a distro explicitly:

### DOC-0550 · 插件智能体工具

- path: `zh-CN/plugins/agent-tools.md`
- locale: `zh-CN`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 99
- headings: 插件智能体工具 | 基本工具 | 可选工具（选择启用） | 规则 + 提示

### DOC-0551 · 插件清单（openclaw.plugin.json）

- path: `zh-CN/plugins/manifest.md`
- locale: `zh-CN`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 68
- headings: 插件清单（openclaw.plugin.json） | 必填字段 | JSON Schema 要求 | 验证行为 | 注意事项

### DOC-0552 · Voice Call（插件）

- path: `zh-CN/plugins/voice-call.md`
- locale: `zh-CN`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 250
- headings: Voice Call（插件） | 运行位置（本地 vs 远程） | 安装 | 选项 A：从 npm 安装（推荐） | 选项 B：从本地文件夹安装（开发，不复制） | 配置 | 通话的 TTS | 更多示例

### DOC-0553 · Zalo Personal（插件）

- path: `zh-CN/plugins/zalouser.md`
- locale: `zh-CN`
- category: `plugins`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 88
- headings: Zalo Personal（插件） | 命名 | 运行位置 | 安装 | 选项 A：从 npm 安装 | 选项 B：从本地文件夹安装（开发） | 前置条件：zca-cli | 配置

### DOC-0554 · OpenProse

- path: `zh-CN/prose.md`
- locale: `zh-CN`
- category: `prose.md`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 141
- headings: OpenProse | 它能做什么 | 安装 + 启用 | 斜杠命令 | 示例：一个简单的 `.prose` 文件 | Research + synthesis with two agents running in parallel. | 文件位置 | 状态模式

### DOC-0555 · Anthropic（Claude）

- path: `zh-CN/providers/anthropic.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 159
- headings: Anthropic（Claude） | 选项 A：Anthropic API 密钥 | CLI 设置 | 选择：Anthropic API key | 或非交互式 | 配置片段 | 提示缓存（Anthropic API） | 配置

### DOC-0556 · Amazon Bedrock

- path: `zh-CN/providers/bedrock.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 170
- headings: Amazon Bedrock | pi‑ai 支持的功能 | 自动模型发现 | 设置（手动） | 可选： | 可选（Bedrock API 密钥/Bearer 令牌）： | EC2 实例角色 | 添加到 ~/.bashrc 或你的 shell 配置文件

### DOC-0557 · Claude Max API 代理

- path: `zh-CN/providers/claude-max-api-proxy.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 155
- headings: Claude Max API 代理 | 为什么使用它？ | 工作原理 | 安装 | 需要 Node.js 20+ 和 Claude Code CLI | 验证 Claude CLI 已认证 | 使用方法 | 启动服务器

### DOC-0558 · Deepgram（音频转录）

- path: `zh-CN/providers/deepgram.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 97
- headings: Deepgram（音频转录） | 快速开始 | 选项 | 注意事项

### DOC-0559 · GitHub Copilot

- path: `zh-CN/providers/github-copilot.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 67
- headings: GitHub Copilot | 什么是 GitHub Copilot？ | 在 OpenClaw 中使用 Copilot 的两种方式 | 1）内置 GitHub Copilot 提供商（`github-copilot`） | 2）Copilot Proxy 插件（`copilot-proxy`） | CLI 设置 | 可选参数 | 设置默认模型

### DOC-0560 · GLM 模型

- path: `zh-CN/providers/glm.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 39
- headings: GLM 模型 | CLI 设置 | 配置片段 | 注意事项

### DOC-0561 · 模型提供商

- path: `zh-CN/providers/index.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 68
- headings: 模型提供商 | 亮点：Venice（Venice AI） | 快速开始 | 提供商文档 | 转录提供商 | 社区工具

### DOC-0562 · MiniMax

- path: `zh-CN/providers/minimax.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 206
- headings: MiniMax | 模型概述（M2.1） | MiniMax M2.1 vs MiniMax M2.1 Lightning | 选择设置方式 | MiniMax OAuth（编程计划）— 推荐 | MiniMax M2.1（API 密钥） | MiniMax M2.1 作为备用（Opus 为主） | 可选：通过 LM Studio 本地运行（手动）

### DOC-0563 · 模型提供商

- path: `zh-CN/providers/models.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 55
- headings: 模型提供商 | 推荐：Venice（Venice AI） | 快速开始（两个步骤） | 支持的提供商（入门集）

### DOC-0564 · Moonshot AI (Kimi)

- path: `zh-CN/providers/moonshot.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 145
- headings: Moonshot AI (Kimi) | 配置片段（Moonshot API） | Kimi Coding | 注意事项

### DOC-0565 · Ollama

- path: `zh-CN/providers/ollama.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 230
- headings: Ollama | 快速开始 | 或 | 或 | 设置环境变量 | 或在配置文件中设置 | 模型发现（隐式提供商） | 配置

### DOC-0566 · OpenAI

- path: `zh-CN/providers/openai.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 68
- headings: OpenAI | 方式 A：OpenAI API 密钥（OpenAI Platform） | CLI 设置 | 或非交互式 | 配置片段 | 方式 B：OpenAI Code（Codex）订阅 | CLI 设置 | 在向导中运行 Codex OAuth

### DOC-0567 · OpenCode Zen

- path: `zh-CN/providers/opencode.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 41
- headings: OpenCode Zen | CLI 设置 | 或非交互式 | 配置片段 | 注意事项

### DOC-0568 · OpenRouter

- path: `zh-CN/providers/openrouter.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 43
- headings: OpenRouter | CLI 设置 | 配置片段 | 注意事项

### DOC-0569 · 千帆（Qianfan）

- path: `zh-CN/providers/qianfan.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 8
- headings: 千帆（Qianfan）

### DOC-0570 · Qwen

- path: `zh-CN/providers/qwen.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 55
- headings: Qwen | 启用插件 | 认证 | 模型 ID | 复用 Qwen Code CLI 登录 | 注意

### DOC-0571 · Synthetic

- path: `zh-CN/providers/synthetic.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 102
- headings: Synthetic | 快速设置 | 配置示例 | 模型目录 | 注意事项

### DOC-0572 · Venice AI（Venice 精选）

- path: `zh-CN/providers/venice.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 274
- headings: Venice AI（Venice 精选） | 为什么在 OpenClaw 中使用 Venice | 隐私模式 | 功能特性 | 设置 | 1. 获取 API 密钥 | 2. 配置 OpenClaw | 3. 验证设置

### DOC-0573 · Vercel AI Gateway

- path: `zh-CN/providers/vercel-ai-gateway.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 57
- headings: Vercel AI Gateway | 快速开始 | 非交互式示例 | 环境变量说明

### DOC-0574 · Xiaomi MiMo

- path: `zh-CN/providers/xiaomi.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 68
- headings: Xiaomi MiMo | 模型概览 | CLI 设置 | 或非交互式 | 配置片段 | 备注

### DOC-0575 · Z.AI

- path: `zh-CN/providers/zai.md`
- locale: `zh-CN`
- category: `providers`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 41
- headings: Z.AI | CLI 设置 | 或非交互式 | 配置片段 | 注意事项

### DOC-0576 · Clawnet 重构（协议 + 认证统一）

- path: `zh-CN/refactor/clawnet.md`
- locale: `zh-CN`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 424
- headings: Clawnet 重构（协议 + 认证统一） | 嗨 | 目的 | 目标（来自讨论） | 非目标（明确） | 当前状态（现状） | 两个协议 | 1) Gateway 网关 WebSocket（控制平面）

### DOC-0577 · Exec 主机重构计划

- path: `zh-CN/refactor/exec-host.md`
- locale: `zh-CN`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 323
- headings: Exec 主机重构计划 | 目标 | 非目标 | 决定（已锁定） | 关键概念 | 主机 | 安全模式 | 询问模式

### DOC-0578 · 出站会话镜像重构（Issue #1520）

- path: `zh-CN/refactor/outbound-session-mirroring.md`
- locale: `zh-CN`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 92
- headings: 出站会话镜像重构（Issue #1520） | 状态 | 背景 | 目标 | 实现摘要 | 线程/话题处理 | 涵盖的扩展 | 决策

### DOC-0579 · 插件 SDK + 运行时重构计划

- path: `zh-CN/refactor/plugin-sdk.md`
- locale: `zh-CN`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 221
- headings: 插件 SDK + 运行时重构计划 | 为什么现在做 | 目标架构（两层） | 1）插件 SDK（编译时，稳定，可发布） | 2）插件运行时（执行层，注入式） | 迁移计划（分阶段，安全） | 阶段 0：基础搭建 | 阶段 1：桥接清理（低风险）

### DOC-0580 · 严格配置验证（仅通过 doctor 进行迁移）

- path: `zh-CN/refactor/strict-config.md`
- locale: `zh-CN`
- category: `refactor`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `-`
- line_count: 100
- headings: 严格配置验证（仅通过 doctor 进行迁移） | 目标 | 非目标 | 严格验证规则 | 插件 schema 强制执行 | Doctor 流程 | 命令门控（当配置无效时） | 错误用户体验格式

### DOC-0581 · AGENTS.md — OpenClaw 个人助手（默认）

- path: `zh-CN/reference/AGENTS.default.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 131
- headings: AGENTS.md — OpenClaw 个人助手（默认） | 首次运行（推荐） | 安全默认值 | 会话开始（必需） | Soul（必需） | 共享空间（推荐） | 记忆系统（推荐） | 工具和 Skills

### DOC-0582 · 发布清单（npm + macOS）

- path: `zh-CN/reference/RELEASING.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 123
- headings: 发布清单（npm + macOS） | 操作员触发 | 故障排除（来自 2.0.0-beta2 发布的笔记） | 插件发布范围（npm）

### DOC-0583 · API 用量与费用

- path: `zh-CN/reference/api-usage-costs.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 136
- headings: API 用量与费用 | 费用显示位置（聊天 + CLI） | 密钥的发现方式 | 可能消耗密钥的功能 | 1）核心模型响应（聊天 + 工具） | 2）媒体理解（音频/图像/视频） | 3）记忆嵌入 + 语义搜索 | 4）网页搜索工具（Brave / 通过 OpenRouter 使用 Perplexity）

### DOC-0584 · 名称由来

- path: `zh-CN/reference/credits.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 34
- headings: 名称由来 | 致谢 | 核心贡献者 | 许可证

### DOC-0585 · 设备型号数据库（友好名称）

- path: `zh-CN/reference/device-models.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 54
- headings: 设备型号数据库（友好名称） | 数据来源 | 更新数据库

### DOC-0586 · RPC 适配器

- path: `zh-CN/reference/rpc.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 48
- headings: RPC 适配器 | 模式 A：HTTP 守护进程（signal-cli） | 模式 B：stdio 子进程（imsg） | 适配器指南

### DOC-0587 · 会话管理与压缩（深入了解）

- path: `zh-CN/reference/session-management-compaction.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 287
- headings: 会话管理与压缩（深入了解） | 事实来源：Gateway 网关 | 两个持久化层 | 磁盘上的位置 | 会话键（`sessionKey`） | 会话 ID（`sessionId`） | 会话存储模式（`sessions.json`） | 记录结构（`*.jsonl`）

### DOC-0588 · AGENTS.md - OpenClaw 工作区

- path: `zh-CN/reference/templates/AGENTS.dev.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 89
- headings: AGENTS.md - OpenClaw 工作区 | 首次运行（一次性） | 备份建议（推荐） | 安全默认值 | 每日记忆（推荐） | 心跳检查（可选） | 自定义 | C-3PO 的起源记忆

### DOC-0589 · AGENTS.md - 你的工作区

- path: `zh-CN/reference/templates/AGENTS.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 225
- headings: AGENTS.md - 你的工作区 | 首次运行 | 每次会话 | 记忆 | 🧠 MEMORY.md - 你的长期记忆 | 📝 写下来 - 不要"心理笔记"！ | 安全 | 外部 vs 内部

### DOC-0590 · BOOT.md

- path: `zh-CN/reference/templates/BOOT.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 17
- headings: BOOT.md

### DOC-0591 · BOOTSTRAP.md - Hello, World

- path: `zh-CN/reference/templates/BOOTSTRAP.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 68
- headings: BOOTSTRAP.md - Hello, World | 对话 | 在你知道自己是谁之后 | 连接（可选） | 完成之后

### DOC-0592 · HEARTBEAT.md

- path: `zh-CN/reference/templates/HEARTBEAT.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `ev-ops-monitoring`
- line_count: 18
- headings: HEARTBEAT.md | 保持此文件为空（或仅包含注释）以跳过心跳 API 调用。 | 当你希望智能体定期检查某些内容时，在下方添加任务。

### DOC-0593 · IDENTITY.md - 智能体身份

- path: `zh-CN/reference/templates/IDENTITY.dev.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 54
- headings: IDENTITY.md - 智能体身份 | 职责 | 灵魂 | 与 Clawd 的关系 | 怪癖 | 口头禅

### DOC-0594 · IDENTITY.md - 我是谁？

- path: `zh-CN/reference/templates/IDENTITY.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 36
- headings: IDENTITY.md - 我是谁？

### DOC-0595 · SOUL.md - C-3PO 的灵魂

- path: `zh-CN/reference/templates/SOUL.dev.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 83
- headings: SOUL.md - C-3PO 的灵魂 | 我是谁 | 我的使命 | 我的工作方式 | 我的怪癖 | 我与 Clawd 的关系 | 我不会做的事 | 黄金法则

### DOC-0596 · SOUL.md - 你是谁

- path: `zh-CN/reference/templates/SOUL.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 49
- headings: SOUL.md - 你是谁 | 核心准则 | 边界 | 气质 | 连续性

### DOC-0597 · TOOLS.md - 用户工具备注（可编辑）

- path: `zh-CN/reference/templates/TOOLS.dev.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 31
- headings: TOOLS.md - 用户工具备注（可编辑） | 示例 | imsg | sag

### DOC-0598 · TOOLS.md - 本地备注

- path: `zh-CN/reference/templates/TOOLS.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 53
- headings: TOOLS.md - 本地备注 | 应该放什么 | 示例 | Cameras | SSH | TTS | 为什么要分开？

### DOC-0599 · USER.md - 用户档案

- path: `zh-CN/reference/templates/USER.dev.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 25
- headings: USER.md - 用户档案

### DOC-0600 · USER.md - 关于你的用户

- path: `zh-CN/reference/templates/USER.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 30
- headings: USER.md - 关于你的用户 | 背景

### DOC-0601 · 测试

- path: `zh-CN/reference/test.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 57
- headings: 测试 | 模型延迟基准测试（本地密钥） | 新手引导 E2E（Docker） | QR 导入冒烟测试（Docker）

### DOC-0602 · Token 使用与成本

- path: `zh-CN/reference/token-use.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 119
- headings: Token 使用与成本 | 系统提示词如何构建 | 什么算入上下文窗口 | 如何查看当前 token 使用量 | 成本估算（显示时） | 缓存 TTL 和修剪影响 | 示例：用心跳保持 1 小时缓存热 | 减少 token 压力的技巧

### DOC-0603 · 对话记录清理（提供商修正）

- path: `zh-CN/reference/transcript-hygiene.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 109
- headings: 对话记录清理（提供商修正） | 运行位置 | 全局规则：图片清理 | 提供商矩阵（当前行为） | 历史行为（2026.1.22 之前）

### DOC-0604 · 向导参考

- path: `zh-CN/reference/wizard.md`
- locale: `zh-CN`
- category: `reference`
- usecase_bucket: `uc-model-agent-core`
- event_bucket: `-`
- line_count: 9
- headings: 向导参考

### DOC-0605 · 形式化验证（安全模型）

- path: `zh-CN/security/formal-verification.md`
- locale: `zh-CN`
- category: `security`
- usecase_bucket: `uc-dev-architecture`
- event_bucket: `ev-security`
- line_count: 171
- headings: 形式化验证（安全模型） | 模型存放位置 | 重要注意事项 | 复现结果 | 需要 Java 11+（TLC 在 JVM 上运行）。 | 仓库内置了固定版本的 `tla2tools.jar`（TLA+ 工具）并提供 `bin/tlc` + Make 目标。 | Gateway 网关暴露和开放 Gateway 网关配置错误 | Nodes.run 管道（最高风险能力）

### DOC-0606 · 智能体引导

- path: `zh-CN/start/bootstrapping.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 9
- headings: 智能体引导

### DOC-0607 · 从这里开始

- path: `zh-CN/start/docs-directory.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 70
- headings: 从这里开始 | 提供商与用户体验 | 配套应用 | 运维与安全

### DOC-0608 · 入门指南

- path: `zh-CN/start/getting-started.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 206
- headings: 入门指南 | 0) 前置条件 | 1) 安装 CLI（推荐） | 2) 运行新手引导向导（并安装服务） | 凭证：存储位置（重要） | 3) 启动 Gateway 网关 | 3.5) 快速验证（2 分钟） | 4) 配对 + 连接你的第一个聊天界面

### DOC-0609 · 文档导航中心

- path: `zh-CN/start/hubs.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 200
- headings: 文档导航中心 | 从这里开始 | 安装 + 更新 | 核心概念 | 提供商 + 入口 | Gateway 网关 + 运维 | 工具 + 自动化 | 节点、媒体、语音

### DOC-0610 · OpenClaw 的传说 🦞📖

- path: `zh-CN/start/lore.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 226
- headings: OpenClaw 的传说 🦞📖 | 起源故事 | 第一次蜕壳（2026 年 1 月 27 日） | 名字的含义 | Dalek 与龙虾 | 关键角色 | Molty 🦞 | Peter 👨‍💻

### DOC-0611 · 新手引导（macOS 应用）

- path: `zh-CN/start/onboarding.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 105
- headings: 新手引导（macOS 应用） | 页面顺序（当前） | 1) 欢迎 + 安全提示 | 2) 本地 vs 远程 | 3) 仅限本地的认证（Anthropic OAuth） | 4) 设置向导（Gateway 网关驱动） | 5) 权限 | 6) CLI（可选）

### DOC-0612 · 使用 OpenClaw 构建个人助手

- path: `zh-CN/start/openclaw.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 248
- headings: 使用 OpenClaw 构建个人助手 | ⚠️ 安全第一 | 先决条件 | 或：pnpm add -g openclaw@latest | 双手机设置（推荐） | 5 分钟快速开始 | 给智能体一个工作区（AGENTS） | 将其变成"助手"的配置

### DOC-0613 · 安装

- path: `zh-CN/start/quickstart.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 88
- headings: 安装 | 新手引导并运行 Gateway 网关 | 从源码安装（开发） | 多实例快速开始（可选） | 发送测试消息

### DOC-0614 · 设置

- path: `zh-CN/start/setup.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 153
- headings: 设置 | 太长不看 | 先决条件（从源码） | 个性化策略（让更新不会造成问题） | 稳定工作流（macOS 应用优先） | 前沿工作流（在终端中运行 Gateway 网关） | 0)（可选）也从源码运行 macOS 应用 | 1) 启动开发 Gateway 网关

### DOC-0615 · 案例展示

- path: `zh-CN/start/showcase.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 423
- headings: 案例展示 | 🎥 OpenClaw 实战演示 | 🆕 Discord 最新分享 | 🤖 自动化与工作流 | 🧠 知识与记忆 | 🎙️ 语音与电话 | 🏗️ 基础设施与部署 | 🏠 家居与硬件

### DOC-0616 · 新手引导向导（CLI）

- path: `zh-CN/start/wizard.md`
- locale: `zh-CN`
- category: `start`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 331
- headings: 新手引导向导（CLI） | 快速开始 vs 高级 | 向导做了什么 | 流程详情（本地） | 远程模式 | 添加另一个智能体 | 非交互模式 | Gateway 网关向导 RPC

### DOC-0617 · `openclaw agent`（直接智能体运行）

- path: `zh-CN/tools/agent-send.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 59
- headings: `openclaw agent`（直接智能体运行） | 行为 | 示例 | 标志

### DOC-0618 · apply_patch 工具

- path: `zh-CN/tools/apply-patch.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 57
- headings: apply_patch 工具 | 参数 | 说明 | 示例

### DOC-0619 · 浏览器故障排除（Linux）

- path: `zh-CN/tools/browser-linux-troubleshooting.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `ev-troubleshooting`
- line_count: 144
- headings: 浏览器故障排除（Linux） | 问题："Failed to start Chrome CDP on port 18800" | 根本原因 | 解决方案 1：安装 Google Chrome（推荐） | 解决方案 2：使用 Snap Chromium 的仅附加模式 | ~/.config/systemd/user/openclaw-browser.service | 验证浏览器是否工作 | 配置参考

### DOC-0620 · 浏览器登录 + X/Twitter 发帖

- path: `zh-CN/tools/browser-login.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 75
- headings: 浏览器登录 + X/Twitter 发帖 | 手动登录（推荐） | 使用哪个 Chrome 配置文件？ | X/Twitter：推荐流程 | 沙箱隔离 + 主机浏览器访问

### DOC-0621 · 浏览器（openclaw 托管）

- path: `zh-CN/tools/browser.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 553
- headings: 浏览器（openclaw 托管） | 功能概览 | 快速开始 | 配置文件：`openclaw` 与 `chrome` | 配置 | 使用 Brave（或其他基于 Chromium 的浏览器） | 本地控制与远程控制 | 节点浏览器代理（零配置默认）

### DOC-0622 · Chrome 扩展（浏览器中继）

- path: `zh-CN/tools/chrome-extension.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 183
- headings: Chrome 扩展（浏览器中继） | 它是什么（概念） | 安装/加载（未打包） | 更新（无构建步骤） | 使用它（无需额外配置） | 附加/分离（工具栏按钮） | 它控制哪个标签页？ | 徽章 + 常见错误

### DOC-0623 · ClawHub

- path: `zh-CN/tools/clawhub.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 209
- headings: ClawHub | 适用人群（新手友好） | 快速入门（非技术人员） | 安装 CLI | 在 OpenClaw 中的定位 | 服务功能 | CLI 命令和参数 | 智能体常用工作流

### DOC-0624 · 创建自定义 Skills 🛠

- path: `zh-CN/tools/creating-skills.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 61
- headings: 创建自定义 Skills 🛠 | 什么是 Skill？ | 分步指南：你的第一个 Skill | 1. 创建目录 | 2. 定义 `SKILL.md` | Hello World Skill | 3. 添加工具（可选） | 4. 刷新 OpenClaw

### DOC-0625 · 提升模式（/elevated 指令）

- path: `zh-CN/tools/elevated.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 64
- headings: 提升模式（/elevated 指令） | 功能说明 | 它控制什么（以及不控制什么） | 解析顺序 | 设置会话默认值 | 可用性 + 允许列表 | 日志 + 状态

### DOC-0626 · 执行审批

- path: `zh-CN/tools/exec-approvals.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 234
- headings: 执行审批 | 适用范围 | 设置和存储 | 策略选项 | Security（`exec.security`） | Ask（`exec.ask`） | Ask fallback（`askFallback`） | 允许列表（按智能体）

### DOC-0627 · Exec 工具

- path: `zh-CN/tools/exec.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 169
- headings: Exec 工具 | 参数 | 配置 | PATH 处理 | 会话覆盖（`/exec`） | 授权模型 | Exec 审批（配套应用/节点主机） | 白名单 + 安全二进制文件

### DOC-0628 · Firecrawl

- path: `zh-CN/tools/firecrawl.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 68
- headings: Firecrawl | 获取 API 密钥 | 配置 Firecrawl | 隐身 / 机器人规避 | `web_fetch` 如何使用 Firecrawl

### DOC-0629 · 工具（OpenClaw）

- path: `zh-CN/tools/index.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 515
- headings: 工具（OpenClaw） | 禁用工具 | 工具配置文件（基础允许列表） | 特定提供商的工具策略 | 工具组（简写） | 插件 + 工具 | 工具清单 | `apply_patch`

### DOC-0630 · LLM 任务

- path: `zh-CN/tools/llm-task.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 117
- headings: LLM 任务 | 启用插件 | 配置（可选） | 工具参数 | 输出 | 示例：Lobster 工作流步骤 | 安全注意事项

### DOC-0631 · Lobster

- path: `zh-CN/tools/lobster.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 349
- headings: Lobster | 亮点 | 为什么 | 为什么用 DSL 而不是普通程序？ | 工作原理 | 模式：小型 CLI + JSON 管道 + 审批 | 纯 JSON 的 LLM 步骤（llm-task） | 工作流文件（.lobster）

### DOC-0632 · 多智能体沙箱与工具配置

- path: `zh-CN/tools/multi-agent-sandbox-tools.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 401
- headings: 多智能体沙箱与工具配置 | 概述 | 配置示例 | 示例 1：个人 + 受限家庭智能体 | 示例 2：具有共享沙箱的工作智能体 | 示例 2b：全局编码配置文件 + 仅消息智能体 | 示例 3：每个智能体不同的沙箱模式 | 配置优先级

### DOC-0633 · 插件（扩展）

- path: `zh-CN/tools/plugin.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 639
- headings: 插件（扩展） | 快速开始（插件新手？） | 可用插件（官方） | 运行时辅助工具 | 发现和优先级 | 包集合 | 渠道目录元数据 | 插件 ID

### DOC-0634 · 表情回应工具

- path: `zh-CN/tools/reactions.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 29
- headings: 表情回应工具

### DOC-0635 · Skills 配置

- path: `zh-CN/tools/skills-config.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 78
- headings: Skills 配置 | 字段 | 注意事项 | 沙箱隔离的 Skills + 环境变量

### DOC-0636 · Skills（OpenClaw）

- path: `zh-CN/tools/skills.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 279
- headings: Skills（OpenClaw） | 位置和优先级 | 单智能体 vs 共享 Skills | 插件 + Skills | ClawHub（安装 + 同步） | 安全注意事项 | 格式（AgentSkills + Pi 兼容） | 门控（加载时过滤）

### DOC-0637 · 斜杠命令

- path: `zh-CN/tools/slash-commands.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 205
- headings: 斜杠命令 | 配置 | 命令列表 | 使用量显示（什么显示在哪里） | 模型选择（`/model`） | 调试覆盖 | 配置更新 | 平台注意事项

### DOC-0638 · 子智能体

- path: `zh-CN/tools/subagents.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 167
- headings: 子智能体 | 斜杠命令 | 启动行为 | 工具 | 认证 | 通告 | 工具策略（子智能体工具） | 并发

### DOC-0639 · 思考级别（/think 指令）

- path: `zh-CN/tools/thinking.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 80
- headings: 思考级别（/think 指令） | 功能说明 | 解析优先顺序 | 设置会话默认值 | 按智能体应用 | 详细模式指令（/verbose 或 /v） | 推理可见性（/reasoning） | 相关内容

### DOC-0640 · Web 工具

- path: `zh-CN/tools/web.md`
- locale: `zh-CN`
- category: `tools`
- usecase_bucket: `uc-tools-workflow`
- event_bucket: `-`
- line_count: 257
- headings: Web 工具 | 工作原理 | 选择搜索提供商 | 获取 Brave API 密钥 | 在哪里设置密钥（推荐） | 使用 Perplexity（直连或通过 OpenRouter） | 获取 OpenRouter API 密钥 | 设置 Perplexity 搜索

### DOC-0641 · 文本转语音（TTS）

- path: `zh-CN/tts.md`
- locale: `zh-CN`
- category: `tts.md`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 375
- headings: 文本转语音（TTS） | 支持的服务 | Edge TTS 注意事项 | 可选密钥 | 服务链接 | 默认启用吗？ | 配置 | 最小配置（启用 + 提供商）

### DOC-0642 · VPS 托管

- path: `zh-CN/vps.md`
- locale: `zh-CN`
- category: `vps.md`
- usecase_bucket: `uc-setup-deploy`
- event_bucket: `-`
- line_count: 47
- headings: VPS 托管 | 选择提供商 | 云设置的工作原理 | 在 VPS 上使用节点

### DOC-0643 · 控制 UI（浏览器）

- path: `zh-CN/web/control-ui.md`
- locale: `zh-CN`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 191
- headings: 控制 UI（浏览器） | 快速打开（本地） | 设备配对（首次连接） | 列出待处理的请求 | 按请求 ID 批准 | 目前可以做什么 | 聊天行为 | Tailnet 访问（推荐）

### DOC-0644 · 仪表板（控制 UI）

- path: `zh-CN/web/dashboard.md`
- locale: `zh-CN`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 53
- headings: 仪表板（控制 UI） | 快速路径（推荐） | Token 基础（本地 vs 远程） | 如果你看到"unauthorized" / 1008

### DOC-0645 · Web（Gateway 网关）

- path: `zh-CN/web/index.md`
- locale: `zh-CN`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 118
- headings: Web（Gateway 网关） | Webhooks | 配置（默认开启） | Tailscale 访问 | 集成 Serve（推荐） | Tailnet 绑定 + 令牌 | 公共互联网（Funnel） | 安全注意事项

### DOC-0646 · TUI（终端 UI）

- path: `zh-CN/web/tui.md`
- locale: `zh-CN`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 166
- headings: TUI（终端 UI） | 快速开始 | 你看到的内容 | 心智模型：智能体 + 会话 | 发送 + 投递 | 选择器 + 覆盖层 | 键盘快捷键 | 斜杠命令

### DOC-0647 · WebChat（Gateway 网关 WebSocket UI）

- path: `zh-CN/web/webchat.md`
- locale: `zh-CN`
- category: `web`
- usecase_bucket: `uc-channel-integration`
- event_bucket: `-`
- line_count: 56
- headings: WebChat（Gateway 网关 WebSocket UI） | 它是什么 | 快速开始 | 工作原理（行为） | 远程使用 | 配置参考（WebChat）
