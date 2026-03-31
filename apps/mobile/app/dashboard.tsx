import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing, typography } from "@lingoflow/design-tokens";

import { ActionButton } from "../src/ui/action-button";
import { ShellCard } from "../src/ui/shell-card";
import { ShellScreen } from "../src/ui/shell-screen";

const taskList = [
  "Generate one short text exercise from the goal profile.",
  "Complete one attempt and return structured feedback.",
  "Update the learner snapshot with a simple next-step suggestion.",
];

export default function DashboardScreen() {
  return (
    <ShellScreen
      eyebrow="Daily Dashboard Shell"
      title="Today is one focused learning loop."
      description="The dashboard stays intentionally compact so the first end-to-end learner flow can be proved before adding breadth."
    >
      <LinearGradient
        colors={[colors.primary, colors.primaryContainer]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={styles.hero}
      >
        <Text style={styles.heroLabel}>Today&apos;s commitment</Text>
        <Text style={styles.heroNumber}>15</Text>
        <Text style={styles.heroUnit}>minutes of structured English practice</Text>
      </LinearGradient>

      <ShellCard
        title="Practice pipeline"
        description="These blocks match the MVP contract in the implementation plan."
      >
        {taskList.map((task, index) => (
          <View key={task} style={styles.taskRow}>
            <Text style={styles.taskIndex}>0{index + 1}</Text>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </ShellCard>

      <ShellCard
        title="Why the shell matters"
        description="Route shape, token usage, and navigation are now stable enough to unblock backend and AI service work without coupling it to page code."
        tone="muted"
      />

      <View style={styles.actions}>
        <Link asChild href="/goals">
          <ActionButton label="Refine Goal" variant="secondary" />
        </Link>
        <Link asChild href="/onboarding">
          <ActionButton label="Restart Flow" variant="ghost" />
        </Link>
      </View>
    </ShellScreen>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: radii.xl,
    overflow: "hidden",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xxl,
  },
  heroLabel: {
    color: colors.onPrimary,
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.labelMd.fontSize,
    letterSpacing: typography.scale.labelMd.letterSpacing,
    lineHeight: typography.scale.labelMd.lineHeight,
    opacity: 0.9,
    textTransform: "uppercase",
  },
  heroNumber: {
    color: colors.onPrimary,
    fontFamily: typography.fonts.displayBold,
    fontSize: 72,
    lineHeight: 76,
    marginTop: spacing.md,
  },
  heroUnit: {
    color: colors.onPrimary,
    fontFamily: typography.fonts.body,
    fontSize: typography.scale.bodyLg.fontSize,
    lineHeight: typography.scale.bodyLg.lineHeight,
    marginTop: spacing.xs,
    maxWidth: 220,
    opacity: 0.92,
  },
  taskRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  taskIndex: {
    color: colors.secondary,
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.bodyMd.fontSize,
    lineHeight: typography.scale.bodyMd.lineHeight,
    minWidth: 28,
  },
  taskText: {
    color: colors.text,
    flex: 1,
    fontFamily: typography.fonts.body,
    fontSize: typography.scale.bodyLg.fontSize,
    lineHeight: typography.scale.bodyLg.lineHeight,
  },
  actions: {
    gap: spacing.sm,
  },
});
