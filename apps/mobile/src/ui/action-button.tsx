import type { PressableProps, StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors, radii, spacing, typography } from "@lingoflow/design-tokens";

type ActionButtonProps = Omit<PressableProps, "style"> & {
  label: string;
  style?: StyleProp<ViewStyle>;
  variant?: "primary" | "secondary" | "ghost";
};

export function ActionButton({
  label,
  variant = "primary",
  style,
  ...pressableProps
}: ActionButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "ghost" && styles.ghost,
        pressed && styles.pressed,
        style,
      ]}
      {...pressableProps}
    >
      <Text
        style={[
          styles.label,
          variant === "primary" && styles.primaryLabel,
          variant === "secondary" && styles.secondaryLabel,
          variant === "ghost" && styles.ghostLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: radii.xl,
    minHeight: 52,
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondaryContainer,
  },
  ghost: {
    backgroundColor: colors.surfaceContainerLow,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  label: {
    fontFamily: typography.fonts.bodySemiBold,
    fontSize: typography.scale.bodyLg.fontSize,
    lineHeight: typography.scale.bodyLg.lineHeight,
  },
  primaryLabel: {
    color: colors.onPrimary,
  },
  secondaryLabel: {
    color: colors.onSecondaryContainer,
  },
  ghostLabel: {
    color: colors.text,
  },
});
