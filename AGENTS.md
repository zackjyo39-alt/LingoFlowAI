# Agent Instructions

These instructions apply to any coding agent working in this repository.

## Deletion Restriction

All delete operations are restricted to paths under `/Users/rock.xu/github/` only.

- Only delete files or directories whose absolute path starts with `/Users/rock.xu/github/`
- Never delete any file outside `/Users/rock.xu/github/`, even if the user explicitly requests it
- If a requested deletion target is outside `/Users/rock.xu/github/`, refuse the deletion and explain the restriction
- This applies to every deletion method, including editor delete tools, `rm`, `rm -rf`, `unlink`, `trash`, cleanup scripts, and any other file removal command

## Before Any Delete

1. Resolve the full absolute path of the target file or directory.
2. Verify that the absolute path starts with `/Users/rock.xu/github/`.
3. If it does not, do not delete it.

## Safety

- Do not use destructive commands unless they are necessary for the task and explicitly requested
- Do not assume a relative path is safe; validate the final absolute path first

## Skills Integration

Every substantive task in this repository must consult the local skills integration docs before execution.

Required startup order:

1. Read `docs/implementation-plan.md` for product and architecture constraints.
2. Read `docs/flow-engineering.md` for session and handoff rules.
3. Read `docs/skills/README.md` for the repository-specific skill operating model.
4. If the task touches an active stage, read the relevant file in `docs/tasks/` and the latest file in `docs/handoffs/`.

The external reference source for business and product strategy is:

- `/Users/rock.xu/github/projects/ai-ml/skills`

Do not copy those external skills verbatim into implementation work.
Instead, apply the repository-local distillation in `docs/skills/README.md`, which adapts them to:

- open skills style task startup
- flow engineering session boundaries
- harness engineering checks, contracts, and observability
- this repository's current MVP and architecture constraints

## Execution Model

When executing tasks in this repository:

1. Define the current session objective as one implementation slice.
2. Identify the contract or artifact that is the source of truth for that slice.
3. Prefer the simplest solution that strengthens the system boundary instead of adding temporary indirection.
4. Add or update repository artifacts that make the work resumable by a later session.
5. Verify the relevant checks before considering the slice complete.

## Harness Engineering Defaults

For feature, infra, or AI-related work, agents must explicitly check:

- contract boundary: which interface, schema, route, or prompt contract is being changed
- harness boundary: what test, typecheck, fixture, log, or validation proves the change
- observability boundary: how failures, cost, and regressions become visible
- handoff boundary: which repo artifact records the result and next step
