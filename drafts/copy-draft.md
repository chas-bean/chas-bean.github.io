# Resume Copy — Locked Drafts (assemble into resume.html when all roles done)

Target framing: Founding Engineer / Staff Engineer @ ethical tech (startup-first).
Principle: depth + ownership + leadership signal; keep some breadth.

---

## Vertice (acquired Vendr) — Senior Software Engineer II  [LOCKED]
Jul 2023 – Present · Remote
Context: Series B AI-powered SaaS pricing & negotiation platform — $216M raised,
~$30M ARR; ~400 orgs; acquired May 2026.

1. Provide **first-class support and data requests** for customers, including
   **Anthropic, Brex, Duolingo, Grammarly, Gong, TIME, Twilio**, through the
   Vendr→Vertice acquisition.
2. Co-owned the real-time **agentic backend** powering Ruth, Vendr's autonomous
   negotiation agent — a streaming LLM service serving **5K MAU** and **~60K LLM
   calls/mo**, with history, document extraction, and resumable sessions, plus
   tracing and evals.
3. Solo-architected the **full-stack multiplayer chat system** for running
   autonomous negotiations end-to-end with Ruth — coordinating 4 agents over a
   canonical **append-only event timeline** with point-in-time, VFS-backed
   memory.
4. Designed and built an **integrations foundation** that ingests documents in
   real time to surface savings and trigger renewals — shipping **file storage
   connectors** with Google Drive, Dropbox, and Box.
5. Cut **per-turn LLM cost by 65%** across **3B tokens/mo** — optimizing
   tool-call chains, payloads, encodings, prompt caching, and hot-path queries —
   holding spend to **~$8K/mo**.
6. Single-handedly built a Honey-style **Chrome extension** that detects SaaS
   vendor sites and surfaces Vendr's pricing savings & insights on-page —
   adopted by **500+ users** across orgs.
7. Co-built a published SDK, public pricing APIs (OpenAPI), and an MCP server
   that let partners like **Zip** and **TrustRadius** embed Vendr's pricing intelligence into their
   products — **3.1M requests/mo** at a **57ms p50**, **2.7M MCP events/mo**.

PARKED optional adds (if space): automations platform (greenfield triggers/
actions/variables/webhooks); internal AI-first contract-analysis editor.

---

## Plain Sight — Chief Technology Officer  [LOCKED]
Aug 2019 – Jun 2022 · Detroit, MI
Context: Seed-funded in-person networking app featured on **Product Hunt** and the
**Apple App Store** — $2M raised.
Stack: React, Next.js, React Native, PostgreSQL, Heroku, Keycloak.

1. Owned technical direction as CTO — led **3 engineers plus contractors**, ran
   white-glove email & push marketing campaigns, and personally hosted the
   in-person meetups the product was built around.
2. Steered the company through **2 full pivots in 3 years** — from geofenced
   in-person networking, to a remote social feed when COVID hit, to an in-person
   **events & ticketing** platform.
3. Built and shipped the web + mobile apps end-to-end with automated CI/CD and
   release monitoring — a **99.27% crash-free rate** over **200+ releases** to
   **10k+ users**.
4. Delivered **20+ production features** — Stripe payments, ticketing &
   check-ins, real-time push, search, and recommendations — with end-to-end
   test coverage.

---

## IndustryStar — Senior Software Engineer  [LOCKED — stack omitted, 3 bullets]
Dec 2015 – Aug 2019 · Ann Arbor, MI
Context: supply-chain management platform at a self-funded startup (**2nd
engineering hire**).
(Dated stack — C#/.NET/AngularJS/Azure/etc. — intentionally kept OUT of headline
Skills per Chas.)

1. Led front-end development as the **2nd engineering hire** — driving a **full
   rewrite that cut duplicated/dead code by 30%+** — and shaped product direction
   across release estimates, vision, and UX.
2. Shipped full-stack features end-to-end — **real-time collaborative
   spreadsheets**, supplier search, templated emails, and subscriptions — and
   redesigned the REST API architecture.
3. **Mentored and recruited** junior engineers and interns.

---

## Toucan — Senior Software Engineer II  [LOCKED]
*(acquired by Babbel, 2023)* · Jan – Mar 2023 · Remote (Los Angeles)
Context: Series A language-learning browser extension — $30M raised; 1.5M+
downloads, 12 languages; featured by Google & Microsoft.

1. Built **A/B-tested monetization features** that lifted conversion **33% in one
   month**.
2. Shipped browser-extension features delivering **2B+ in-context language lessons**
   to ~**1M users**.

---

## Professional Summary  [LOCKED]
Full-stack engineer and former startup CTO with **10+ years** taking products from
zero to scale at venture-backed startups. I build **developer platforms and full-stack products** — APIs, SDKs, and agentic systems — end to end, from design through infra; most recently an **autonomous SaaS negotiation agent**. Happiest building **ethical products**
with small, high-trust teams.

---

## Skills  [LOCKED]
- **Languages & UI:** TypeScript, React, React Native, Next.js, Remix, Node.js,
  Tailwind, GraphQL
- **AI & Real-time:**
  - *Streaming:* SSE, WSS, Node.js web streams, Redis streams, Suspense, streaming SSR
  - *Memory:* VFS, conversation persistence, tool calls
  - *Monitoring:* Braintrust, CloudWatch, Sentry
  - *Orchestration:* pgboss, OpenRouter, MCP, AI SDK, Zuplo
- **AWS / Cloud:** Lambda, ECS, S3, SQS, SNS, API Gateway, Step Functions, EventBridge, WAF, CloudFront
- **IaC:** CDK, CloudFormation, SST
- **Databases:** PostgreSQL, DynamoDB, IndexedDB, Prisma
- **Build & Test:** Bun, Vite, Projen, GitHub Actions, Playwright
- **Integrations:** Stripe, Metronome, Clerk, Keycloak, Segment, Braze
(Dropped per Chas: C#, .NET, Azure, AngularJS, CosmosDB, Groovy, Braintree.)
