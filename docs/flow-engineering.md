# LingoFlowAI Flow Engineering

## Purpose

This repository should use short, stage-scoped sessions with file-based handoffs.
The goal is to keep context stable, reduce drift, and let later sessions consume explicit outputs instead of chat history.

## Source Of Truth

- `docs/implementation-plan.md`
  - Product and architecture direction.
- `docs/adr/`
  - Stable technical decisions that should not be re-debated each session.
- `docs/tasks/`
  - Executable checklists for the current stage.
- `docs/handoffs/`
  - Stage outputs, open risks, and next-stage inputs.

## Stage Rules

Each stage should have:

1. A single objective.
2. Clear inputs that must be read first.
3. Clear outputs written back to the repo.
4. Exit criteria.
5. Explicit deferred scope.

Do not treat chat memory as the handoff mechanism.
The handoff mechanism is the repository files.

## Standard Stage Outputs

Each stage should update or create:

- one handoff file in `docs/handoffs/`
- one executable checklist in `docs/tasks/`
- ADRs when a decision is stable enough to freeze

Recommended handoff sections:

- `Objective`
- `Inputs`
- `Completed`
- `Decisions`
- `Deferred`
- `Risks`
- `Exit Criteria`
- `Next Stage`

## Session Pattern

1. Read the required plan, ADR, and handoff files.
2. Execute only the current stage objective.
3. Update checklist status during execution.
4. Write the resulting handoff before ending the session.
5. Start the next session from repository artifacts, not conversation memory.

## Parallel Development

Flow engineering does not forbid parallel work.
It only forbids parallel work on unstable contracts.

Parallel work is allowed when all of the following are true:

- the shared contract is frozen enough for the stage
- each workstream has a clear file or module ownership boundary
- integration rules are known before work starts
- one person or session owns the merge and acceptance step

Recommended parallel pattern:

1. First stabilize the contract.
   Examples: route structure, token shape, API schema, database model.
2. Then split work by ownership.
   Examples: `apps/mobile`, `services/api`, `packages/ui-tokens`.
3. Require each branch or session to update its own checklist and handoff notes.
4. Merge only after contract checks still pass.

Do not parallelize these first:

- schema design before domain entities are agreed
- API implementation before request/response contracts are written
- multiple UI tracks before design token rules are encoded
- AI features before service-layer boundaries and logging rules exist

## Current Repository Interpretation

For this project, the immediate flow is:

1. Harden the implementation plan.
2. Freeze mobile stack and core constraints.
3. Build `Phase 0` foundation.
4. Start `Phase 1` learner flow.

The current priority is not feature breadth.
The current priority is making the plan executable and making the foundation reusable.
