# Skills Integration Handoff

## Objective

Integrate the external skills reference into the repository in a way that future tasks can apply consistently.

## Inputs

- `AGENTS.md`
- `docs/implementation-plan.md`
- `docs/flow-engineering.md`
- `/Users/rock.xu/github/projects/ai-ml/skills`

## Completed

- Classified the external `skills` repository as a strategic product and business heuristic source rather than a literal implementation checklist.
- Added a repository-local playbook at `docs/skills/README.md`.
- Updated `AGENTS.md` so substantive tasks must consult the local skills playbook.
- Added a checklist for the integration work in `docs/tasks/skills-integration-checklist.md`.

## Decisions

- The project will not copy the external skills verbatim into implementation rules.
- The project will use a distilled local playbook that combines product contract, flow engineering, harness engineering, and external skill heuristics.
- Repository artifacts remain the required handoff mechanism.

## Deferred

- Add stage-specific skills overlays when backend, admin web, or AI service modules become concrete.
- Add executable harnesses for API, schema, and AI service work once those modules exist.

## Risks

- The current integration is process-level and documentation-level; it does not yet enforce behavior mechanically in tooling.
- Future contributors can still skip the playbook unless additional automation or templates are introduced.

## Exit Criteria

- The repository contains a mandatory skills entry point for future sessions.
- The integration is documented in a resumable form.

## Next Stage

Apply the new operating model to the next concrete implementation slice, ideally one that introduces backend or AI service scaffolding with explicit harnesses.
