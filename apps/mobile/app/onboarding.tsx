import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing, typography } from "@lingoflow/design-tokens";

import { ActionButton } from "../src/ui/action-button";
import { ShellCard } from "../src/ui/shell-card";
import { ShellScreen } from "../src/ui/shell-screen";

const onboardingSteps = [
  "Confirm the learner intent: general English growth.",
  "Shape the first-week cadence around one daily text exercise.",
  "Hand off only stable shells before wiring API and AI contracts.",
];

export default function OnboardingScreen() {
  return (
    <ShellScreen
      eyebrow="Phase 0 Foundation"
      title="Build a calm English loop."
      description="This first mobile slice is intentionally narrow: one learner profile, one goal archetype, and one daily flow shell."
    >
      <ShellCard
        title="Execution boundary"
        description="UI stays presentational. No model calls, no scoring logic, and no persistence logic live in this layer."
      >
        {onboardingSteps.map((step, index) => (
          <View key={step} style={styles.stepRow}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>0{index + 1}</Text>
            </View>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </ShellCard>

      <ShellCard
        title="What ships in this shell"
        description="Three routes define the learner setup flow before backend work starts."
        tone="muted"
      >
        <View style={styles.routeGrid}>
          <View style={styles.routePill}>
            <Text style={styles.routePillText}>Onboarding</Text>
          </View>
          <View style={styles.routePill}>
            <Text style={styles.routePillText}>Goals</Text>
          </View>
          <View style={styles.routePill}>
            <Text style={styles.routePillText}>Dashboard</Text>
          </View>
        </View>
      </ShellCard>

      <View style={styles.actions}>
        <Link asChild href="/goals">
          <ActionButton label="Set The Goal" />
        </Link>
        <Link asChild href="/dashboard">
          <ActionButton label="Preview Today" variant="ghost" />
        </Link>
      </View>
    </ShellScreen>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
  },
  stepBadge: {
    alignItems: "center",
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: radii.pill,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  stepBadgeText: {
    color: colors.primary,
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.bodyMd.fontSize,
    lineHeight: typography.scale.bodyMd.lineHeight,
  },
  stepText: {
    color: colors.text,
    flex: 1,
    fontFamily: typography.fonts.body,
    fontSize: typography.scale.bodyLg.fontSize,
    lineHeight: typography.scale.bodyLg.lineHeight,
  },
  routeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  routePill: {
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  routePillText: {
    color: colors.text,
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.bodyMd.fontSize,
    lineHeight: typography.scale.bodyMd.lineHeight,
  },
  actions: {
    gap: spacing.sm,
  },
});
