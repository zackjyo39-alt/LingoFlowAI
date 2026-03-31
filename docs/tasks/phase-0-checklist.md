# Phase 0 Checklist

## Goal

Create the execution-ready foundation for a mobile-first Expo app without leaking AI logic into UI code.

## Planning

- [x] Rewrite `docs/implementation-plan.md` with corrected phase order.
- [x] Add phase exit criteria for every phase.
- [x] Add explicit scope-cut rules for MVP.
- [x] Clarify Learner Web entry conditions.
- [x] Clarify Admin design exceptions for dense data views.

## Mobile Foundation

- [x] Initialize `apps/mobile` with Expo and TypeScript.
- [x] Add Expo Router.
- [x] Add app shell screens for onboarding, dashboard, and goals placeholders.
- [x] Encode design tokens into a shared package or shared module.
- [ ] Verify the app starts on device or simulator.

## Backend Foundation

- [ ] Create API service skeleton.
- [ ] Create AI service shell with request logging boundary.
- [ ] Define quota and model-routing entry points.
- [ ] Draft initial schema for users, goals, exercises, scenario sessions, and LLM logs.
- [ ] Reserve entities for learning plan items, activity completions, skills, and error taxonomy.

## Delivery Guardrails

- [x] Define what can be mocked in `Phase 1`.
- [x] Define what must not be implemented directly in page code.
- [x] Record unresolved risks in `docs/handoffs/phase-0-handoff.md`.

## Done When

- [x] `Phase 0` handoff reflects the current state.
- [ ] The mobile app boots successfully.
- [ ] The plan is executable enough to start `Phase 1`.
