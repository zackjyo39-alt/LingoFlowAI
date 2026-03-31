# ADR 0001: Mobile Stack Is Expo + React Native

## Status

Accepted

## Date

2026-03-22

## Context

The repository currently contains high-fidelity HTML prototypes and a design-system-driven direction, but no production app code.
The product direction is mobile-first for the learner experience, while Admin remains web-first.
The project owner does not have prior mobile development experience, so development workflow simplicity matters.

## Decision

The mobile stack is:

- `Expo`
- `React Native`
- `TypeScript`
- `Expo Router`

Admin remains a separate web application rather than being forced into the mobile stack.

## Why This Decision

- It still supports a shared iOS and Android codebase.
- It aligns with the current repository's `TypeScript / React / HTML prototype` direction.
- It avoids introducing `Dart` as a second primary application language.
- It keeps the path to early device testing and development builds relatively simple.

## Consequences

Positive:

- Faster alignment with current repository assets and team context.
- Easier reuse of shared contracts, tokens, and TypeScript tooling.
- Cleaner separation between learner mobile experience and Admin web experience.

Negative:

- Native edge cases still need real device testing.
- Learner Web, if introduced later, must remain a consciously limited scope.
- The project still needs disciplined service boundaries; Expo does not remove architecture work.

## Alternatives Considered

### Flutter

Rejected for now.

Reason:

- Cross-platform coverage is valuable, but not unique enough to outweigh the cost of introducing `Dart` into a repository already oriented around `TypeScript / React`.
- The current project plan already includes a separate web admin experience, so Flutter would not fully eliminate multi-stack reality.
