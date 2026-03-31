import type { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, spacing, typography } from "@lingoflow/design-tokens";

type ShellScreenProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function ShellScreen({
  eyebrow,
  title,
  description,
  children,
}: ShellScreenProps) {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.sectionStack}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.stage,
  },
  header: {
    gap: spacing.sm,
    paddingTop: spacing.xs,
  },
  eyebrow: {
    color: colors.secondary,
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.labelMd.fontSize,
    letterSpacing: typography.scale.labelMd.letterSpacing,
    lineHeight: typography.scale.labelMd.lineHeight,
    textTransform: "uppercase",
  },
  title: {
    color: colors.text,
    fontFamily: typography.fonts.displayBold,
    fontSize: typography.scale.displayLg.fontSize,
    letterSpacing: typography.scale.displayLg.letterSpacing,
    lineHeight: typography.scale.displayLg.lineHeight,
    maxWidth: 320,
  },
  description: {
    color: colors.textMuted,
    fontFamily: typography.fonts.body,
    fontSize: typography.scale.bodyLg.fontSize,
    lineHeight: typography.scale.bodyLg.lineHeight,
    marginTop: spacing.xs,
    maxWidth: 340,
  },
  sectionStack: {
    gap: spacing.lg,
    marginTop: spacing.section,
  },
});
