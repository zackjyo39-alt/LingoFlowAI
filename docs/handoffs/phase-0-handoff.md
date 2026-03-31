# Phase 0 Handoff

## Objective

Turn the current prototype-only repository into an executable foundation for the mobile-first product direction.

## Inputs

- `docs/implementation-plan.md`
- `docs/flow-engineering.md`
- `docs/adr/0001-mobile-stack-expo-react-native.md`

## Completed

- Reviewed the current implementation plan against repository state, design constraints, and official framework guidance.
- Confirmed the mobile stack direction as `Expo + React Native`.
- Established file-based flow engineering artifacts for future stage handoffs.
- Rewrote `docs/implementation-plan.md` into a phase-gated execution plan with MVP scope cuts, phase exit criteria, parallel-work rules, and corrected ordering.
- Initialized `apps/mobile` with `Expo + TypeScript` and upgraded it to an `Expo Router` shell.
- Added three learner shell routes: onboarding, goals, and dashboard.
- Encoded shared color, spacing, radius, and typography tokens in `packages/design-tokens`.
- Verified the current mobile shell with `npm run typecheck` inside `apps/mobile`.
- Verified Expo config resolution with `npx expo config --json`.

## Decisions

- Learner experience remains `mobile-first`.
- Mobile stack is `Expo + React Native + Expo Router`.
- Admin remains a separate web application.
- Future sessions should use repository handoff files instead of relying on long chat context.
- Shared design semantics now live in `packages/design-tokens` and are consumed by the mobile app.
- For now, the most reliable validation path is running mobile commands from `apps/mobile`, while root scripts delegate into that workspace.

## Deferred

- Defining database schema, API skeleton, and AI service shell.
- Verifying app boot on a real device or simulator.
- Normalizing long-term lockfile/install strategy across root and mobile workspace if the repo later standardizes on one package-management pattern.

## Risks

- The app shell and route structure now exist, but Expo dev server startup could not be confirmed from the current headless sandbox session.
- The data model is specified at the plan level, but not yet encoded into schema files or migrations.
- Cost governance boundaries are defined, but quota and routing logic are not yet implemented.
- Because the mobile app was first scaffolded standalone and then wired into the repository, dependency installation currently relies on `apps/mobile` as the source of truth for reliable React Native resolution.

## Exit Criteria

Phase 0 is complete only when:

- the implementation plan is rewritten into executable phases
- the mobile app skeleton starts in Expo
- shared token rules are encoded
- backend skeleton and AI service boundary exist
- the app can open basic shell screens on device or simulator

## Next Stage

Confirm device or simulator boot for `apps/mobile`, then build the API skeleton, AI service shell, and initial schema contracts behind the existing mobile shell.
