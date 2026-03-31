# LingoFlowAI Skills Integration

## Purpose

This repository does not rely on chat memory as its operating model.
It uses a repository-local skills playbook that adapts the external reference skills in:

- `/Users/rock.xu/github/projects/ai-ml/skills`

Those external skills are strong inputs for product judgment, scope control, and customer-centric prioritization.
They are not a literal per-task checklist for implementation work.
This document converts them into an execution model suitable for LingoFlowAI.

## Operating Principle

Every substantial task should be driven by four layers, in this order:

1. Product contract
2. Flow engineering
3. Harness engineering
4. External skill heuristics

If these layers conflict, resolve them in that order.

## Layer 1: Product Contract

Read first:

- `docs/implementation-plan.md`
- relevant ADRs in `docs/adr/`
- the active checklist in `docs/tasks/`
- the latest stage handoff in `docs/handoffs/`

Use these files to freeze:

- current stage objective
- non-negotiable architecture boundaries
- explicit deferred scope
- artifacts that must be updated before session end

## Layer 2: Flow Engineering

Apply the repository flow rules on every substantive task:

1. Work one slice at a time.
2. Start from repo artifacts, not prior chat context.
3. Freeze unstable contracts before parallelizing.
4. End the session with an updated checklist or handoff when the work is substantial.

Flow engineering in this repository means:

- no broad "boil the ocean" sessions
- no hidden decisions left only in chat
- no parallel implementation on undefined contracts

## Layer 3: Harness Engineering

Every implementation slice should define its harness before or during the change.
The harness is the proof surface that makes the slice testable, reviewable, and resumable.

Minimum harness questions:

1. What is the contract?
   Examples: route params, API schema, token shape, prompt IO, DB schema, design token name.
2. What validates the contract?
   Examples: typecheck, unit test, schema validator, snapshot, fixture, smoke path.
3. What exposes failure?
   Examples: structured logs, request IDs, error states, quota counters, cost logs.
4. What records the result?
   Examples: checklist update, handoff note, ADR, implementation doc.

Do not merge work that changes behavior without also improving one of:

- executable verification
- static correctness
- runtime observability
- repo handoff clarity

## Layer 4: External Skill Heuristics

The external skills should be treated as strategic heuristics, not rigid scripts.

### Scope Discipline

Use `mvp`, `processize`, and `minimalist-review` to force scope cuts:

- prefer the smallest closed loop
- validate the manual or simplest path before adding automation
- reject features that solve hypothetical future problems

### Customer and Community Orientation

Use `find-community`, `validate-idea`, and `first-customers` when deciding product priorities:

- prioritize problems tied to a real learner or operator workflow
- prefer backlog items with evidence of repeated user pain
- avoid vanity features that are hard to trace to value

### Economic Discipline

Use `pricing`, `grow-sustainably`, and `marketing-plan` when the task affects monetization, quotas, cost, or growth:

- model pricing and quota changes must be observable
- spend engineering effort where it improves retention, activation, or cost control
- avoid adding infra or process overhead without a clear return

### Team and Governance Discipline

Use `company-values` to shape engineering behavior:

- ownership over ambiguity
- high-quality artifacts over private context
- direct accountability for correctness, delivery, and handoff quality

## Mandatory Task Startup Checklist

Before making substantive changes, answer these questions in your own working notes or reasoning:

1. What is the single objective of this session?
2. Which file or contract is the source of truth?
3. What scope is explicitly out for this session?
4. What harness will prove the change?
5. What artifact must be updated so the next session can resume cleanly?

If any answer is missing, reduce scope until the slice becomes clear.

## Mandatory Task Closing Checklist

Before declaring a substantive slice complete:

1. Run the relevant verification.
2. Record the outcome or blocker in repository artifacts.
3. Note deferred work explicitly instead of leaving it implicit.
4. Ensure the result can be resumed without chat history.

## Decision Rules

Prefer the technically strongest option when evidence is clear.
Do not preserve weak compatibility layers just because they already exist.
Do not add abstraction before the contract is stable.
Do not push AI behavior into UI code.
Do not add product breadth before the main learning loop is stronger.

## Current Application To LingoFlowAI

For the current repository phase, this playbook implies:

- protect the mobile-first MVP boundary
- keep AI behind a service layer
- make learning records, feedback taxonomy, and observability first-class
- treat admin capabilities for cost and monitoring as essential, not optional polish
- leave explicit handoffs for the next implementation slice
