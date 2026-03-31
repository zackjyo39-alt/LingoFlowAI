# Phase 0 Detailed Execution Plan: Foundation & Skeletons

## 0. Multi-Agent Audit Log (Debate & Anti-Sycophancy Review)

This section logs the simulated multi-persona audit over the Phase 0 requirements to ensure absolute architectural integrity, adherence to "Zero Trust" (challenge all assumptions), and "Anti-Sycophancy" (reject pleasing the user at the cost of technical truth).

**Frontend Architect (FA):** The memory states the stack is Next.js for frontend. However, `docs/implementation-plan.md` explicitly mandates `Expo + React Native` as the "mobile-first MVP" for the learner app (`apps/mobile`), while keeping `Admin Web (Next.js)` deferred. I will enforce `Expo` as the primary Phase 0 UI stack. We must not build a Next.js UI yet.
**Backend/AI Architect (BA):** Memory says Python/FastAPI backend, but the JS monorepo setup (`packages/`, `package.json` in root) hints at a TS backend (e.g., Express/Nest). However, to adhere strictly to the system requirements and memory, `services/api` will be defined as FastAPI + PostgreSQL, with LiteLLM for routing. I must define strict boundaries for the AI Service Shell right now. No direct LLM calls from Expo.
**QA/Harness Engineer (QA):** We must stop adding features. Phase 0 is *only* the skeleton. No real AI, no complex login. Each task below must explicitly define the four Harness Boundaries: Contract, Harness, Observability, and Handoff. If an engineer cannot test the API shell without an LLM key, Phase 0 fails. Mock the LLM responses.

*Resolution:* The plan below strictly scopes Phase 0 to establishing directory structures, core routing, mock endpoints, and design token integration. It explicitly blocks real feature development until Phase 1.

---

## 1. Execution Slices

This plan is broken down into parallelizable workstreams. Do not proceed to Phase 1 until all Phase 0 tasks pass their harness checks.

### Task 1.1: Initialize `packages/api-contracts`
**Objective:** Establish the shared source of truth for API schemas and typing between Mobile App and API service.

* **Contract Boundary:** OpenAPI spec (e.g., `openapi.yaml`) or shared Zod/Pydantic schemas for `/api/health` and basic auth mocks.
* **Harness Boundary:** Schema validation scripts (e.g., `npm run generate-types` or `spectral lint`) must pass on the contract files.
* **Observability Boundary:** N/A for pure contracts, but failure to generate types blocks build pipeline.
* **Handoff Boundary:** A generated `types.ts` or `client.ts` file in the package, consumable by `apps/mobile`.

### Task 1.2: Encode Design System to `packages/ui-tokens`
**Objective:** Translate `stitch_insights/lingoflow_ai/DESIGN.md` into raw code tokens.

* **Contract Boundary:** Exported JS/TS objects containing colors (e.g., `Vibrant Indigo`, `Mint`), typography scales (Plus Jakarta Sans, Inter), and spacing rules (no 1px borders, use specific `sp-12` tokens).
* **Harness Boundary:** A simple test verifying all required semantic keys (e.g., `colors.primary`, `spacing.xl`) exist and map to the exact hex/rem values in DESIGN.md.
* **Observability Boundary:** Build process completes without TS errors.
* **Handoff Boundary:** A published/linked local package `ui-tokens` that `apps/mobile` imports for styling.

### Task 1.3: Initialize `services/api` (Backend & AI Shell)
**Objective:** Scaffold the FastAPI backend, DB connection placeholder, and the AI Service Shell.

* **Contract Boundary:**
  - `GET /api/health` returning `200 OK`.
  - Mock `POST /api/ai/chat` (AI Shell) returning static schema-compliant responses.
  - Mock Database connection string (PostgreSQL).
* **Harness Boundary:** Pytest unit tests hitting `/api/health` and the mock AI shell endpoint.
* **Observability Boundary:** Structured logs (e.g., JSON logs via Loguru/structlog) capturing HTTP request ID, path, latency, and simulated token usage for the AI Shell.
* **Handoff Boundary:** A running Docker container or local FastAPI dev server `README` explaining how to start the service.

### Task 1.4: Initialize `apps/mobile` (Expo Skeleton)
**Objective:** Setup the Expo React Native app with routing and theme injection.

* **Contract Boundary:** Expo Router filesystem setup with a base `/` route (Empty Dashboard placeholder) and an `/onboarding` mock route.
* **Harness Boundary:** `npx expo export` or unit tests (Jest) verifying the root layout renders without crashing. Typechecking against `packages/api-contracts`.
* **Observability Boundary:** Setup Sentry placeholder/mock logger capturing fatal app crashes or unhandled promise rejections.
* **Handoff Boundary:** Instructions on running `npx expo start` and a screenshot/artifact showing the app boots in a simulator with the `ui-tokens` primary background color.

## 2. Phase 0 Acceptance & Handoff Checklist
*QA/Harness Engineering Final Gate*

- [ ] `packages/api-contracts` is the singular truth for types.
- [ ] UI components use `packages/ui-tokens` instead of hardcoded hex values.
- [ ] The `services/api` AI Shell does not hit real LLM providers yet.
- [ ] `apps/mobile` routing works locally.
- [ ] Every execution slice above has its Harness tested.

Once checked, create `docs/handoffs/phase-0-handoff.md` and move to Phase 1.
