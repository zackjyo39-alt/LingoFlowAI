import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing, typography } from "@lingoflow/design-tokens";

import { ActionButton } from "../src/ui/action-button";
import { ShellCard } from "../src/ui/shell-card";
import { ShellScreen } from "../src/ui/shell-screen";

const priorities = ["Daily writing clarity", "Everyday conversation confidence"];

export default function GoalsScreen() {
  return (
    <ShellScreen
      eyebrow="Goal Initialization"
      title="One archetype. One clean starting point."
      description="The MVP goal layer starts with a single default track so downstream exercise generation and feedback remain predictable."
    >
      <ShellCard
        title="General English Growth"
        description="A broad learner track covering clarity, confidence, and habit consistency before any deeper specialization."
      >
        <View style={styles.metaRow}>
          <View style={styles.metricBlock}>
            <Text style={styles.metricLabel}>Focus</Text>
            <Text style={styles.metricValue}>Text-first daily practice</Text>
          </View>
          <View style={styles.metricBlock}>
            <Text style={styles.metricLabel}>Cadence</Text>
            <Text style={styles.metricValue}>15 min / day</Text>
          </View>
        </View>
      </ShellCard>

      <ShellCard
        title="Initial priorities"
        description="These become the first stable inputs for future plan items and exercise prompts."
        tone="muted"
      >
        <View style={styles.priorityList}>
          {priorities.map((priority) => (
            <View key={priority} style={styles.priorityChip}>
              <Text style={styles.priorityChipText}>{priority}</Text>
            </View>
          ))}
        </View>
      </ShellCard>

      <ShellCard
        title="Contract reminder"
        description="Today this screen only establishes UI shape and goal semantics. Persistence will arrive behind the Application API."
      />

      <View style={styles.actions}>
        <Link asChild href="/dashboard">
          <ActionButton label="Continue To Dashboard" />
        </Link>
        <Link asChild href="/onboarding">
          <ActionButton label="Back To Intro" variant="ghost" />
        </Link>
      </View>
    </ShellScreen>
  );
}

const styles = StyleSheet.create({
  metaRow: {
    gap: spacing.md,
  },
  metricBlock: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: radii.lg,
    padding: spacing.md,
  },
  metricLabel: {
    color: colors.secondary,
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.labelMd.fontSize,
    letterSpacing: typography.scale.labelMd.letterSpacing,
    lineHeight: typography.scale.labelMd.lineHeight,
    textTransform: "uppercase",
  },
  metricValue: {
    color: colors.text,
    fontFamily: typography.fonts.displaySemiBold,
    fontSize: typography.scale.titleLg.fontSize,
    lineHeight: typography.scale.titleLg.lineHeight,
    marginTop: spacing.xs,
  },
  priorityList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  priorityChip: {
    backgroundColor: colors.tertiaryFixed,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  priorityChipText: {
    color: colors.tertiary,
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.bodyMd.fontSize,
    lineHeight: typography.scale.bodyMd.lineHeight,
  },
  actions: {
    gap: spacing.sm,
  },
});
