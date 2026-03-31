import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radii, spacing, typography } from "@lingoflow/design-tokens";

type ShellCardProps = {
  title: string;
  description?: string;
  tone?: "default" | "muted";
  children?: ReactNode;
};

export function ShellCard({
  title,
  description,
  tone = "default",
  children,
}: ShellCardProps) {
  return (
    <View style={[styles.card, tone === "muted" && styles.mutedCard]}>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
      {children ? <View style={styles.body}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.xl,
    padding: spacing.lg,
  },
  mutedCard: {
    backgroundColor: colors.surfaceContainerLow,
  },
  title: {
    color: colors.text,
    fontFamily: typography.fonts.displaySemiBold,
    fontSize: typography.scale.titleLg.fontSize,
    lineHeight: typography.scale.titleLg.lineHeight,
  },
  description: {
    color: colors.textMuted,
    fontFamily: typography.fonts.body,
    fontSize: typography.scale.bodyMd.fontSize,
    lineHeight: typography.scale.bodyMd.lineHeight,
    marginTop: spacing.xs,
  },
  body: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
});
