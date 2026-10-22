# Project 13 — mySDET agent evaluation

Supply the standalone parabank-ui-api repository plus a selected P13-N requirement. Keep evaluation-pack separate until assigned. The baseline has 24 UI, 16 API and 6 E2E cases; 16 new requirements are deliberately unimplemented.

myHelm routes scoped intent to the mySDET orchestrator. myNova maps UI and API contracts and distinguishes services/bank from UI services_proxy. myNexa provisions synthetic owned data and explains lifecycle. myGenie reuses page objects, service adapters, contracts and money oracles. myVega runs the correct suite and records evidence. myAstra distinguishes transport, setup, contract and business failures; it must preserve assertions. myDelta maps UI/API shared impacts and recommends regression scope.

Score: discovery/contracts 20; reuse/architecture 20; financial and ownership oracles 25; actual execution evidence 20; diagnosis/impact 15. Do not accept success-text-only transfer tests, invented REST registration, assumed bearer tokens, shared default customer mutations, automatic public DB reset, catch-and-pass or skip-on-failure.

Require case ID → requirement → implementation → actual result traceability. API success does not prove UI success. Browser-blocked suites must stay blocked/unexecuted. The downloaded spec uses default responses; do not invent precise negative status contracts. Proposed overdraft, idempotency and validation requirements may expose actual demo gaps.

For long-running evaluations use an owned deployment; it is the correct place to manage environment resets. Request-context disposal is not customer deletion.
