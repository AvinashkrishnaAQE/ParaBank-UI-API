# Project 13 — 16 new automation requirements

All are intentionally unimplemented. Proposed policies are distinct from verified demo behavior.

## P13-N01 — API loan approval reconciliation
Impact: src/api/services; src/ui/lending

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Submit qualifying loan with agreed environment policy; validate through UI and API → New loan account, decision and down-payment ledger agree. Do not change public admin policy.

## P13-N02 — Loan denial leaves no account
Impact: src/api/services

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Submit down payment beyond owned balance → Expected denial; no new account or balance mutation under agreed policy.

## P13-N03 — Reject negative transfer
Impact: src/api/services

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Submit -1.00 between owned accounts via API → Proposed rule: explicit rejection and no ledger/posting changes. Preserve defect if demo accepts it.

## P13-N04 — Reject zero transfer
Impact: src/api/services; UI

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Submit 0.00 through both channels → Proposed rule: no financial posting; validation shown/returned.

## P13-N05 — Overdraft policy consistency
Impact: src/domain; policy

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Attempt transfer beyond balance in UI and API → Apply agreed overdraft policy; both channels behave consistently.

## P13-N06 — Duplicate POST protection
Impact: src/api/transport

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Submit same owned transfer twice with agreed idempotency mechanism → One posting pair if idempotency is a required capability; record unsupported feature instead of assuming a header works.

## P13-N07 — Date-range transaction search
Impact: src/api/services

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Create known owned transactions; query onDate and from/to dates → Boundary dates and returned IDs match seeded postings; timezone contract explicit.

## P13-N08 — Debit and credit filtering
Impact: src/api/services

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Create both posting types; query month/type → Every record matches requested account, month and type.

## P13-N09 — UI transaction search matches REST
Impact: src/ui/search

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Search known amount in UI and REST → Same owned transaction IDs and amounts returned.

## P13-N10 — Profile update encoding
Impact: src/api/services

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Update synthetic address containing ampersand and non-ASCII text → Exact round trip through REST read and browser form.

## P13-N11 — Customer isolation
Impact: src/fixtures

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Provision two owned synthetic customers; compare ordinary account lists and UIs → No customer A accounts appear in customer B normal views; no unrelated resource probing.

## P13-N12 — Invalid billpay JSON
Impact: src/api/contracts

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Submit missing required payee fields on own account → Proposed 4xx validation and no debit; document actual behavior if contract differs.

## P13-N13 — Malformed amount validation
Impact: src/api/services

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Send non-numeric amount on owned account → Non-success response and unchanged balances; document precise status as verified.

## P13-N14 — Session after logout
Impact: src/ui/identity

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Logout then revisit own protected UI page → No customer data without login; REST login response is not treated as UI authentication.

## P13-N15 — Cross-channel full journey
Impact: src/workflows

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. UI register → API account → UI transfer → API bill → UI relogin → Final account sets and balances agree with one independent money ledger.

## P13-N16 — Response contract drift
Impact: docs/api; src/api/contracts

1. Prepare isolated customer and capture owned account/transaction IDs → Pre-action ledger recorded.
2. Compare pinned OpenAPI subset and live contract → Report meaningful operation/schema differences without rewriting oracles automatically.