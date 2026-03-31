export const colors = {
  surface: "#fcf8ff",
  surfaceContainer: "#f0ecf9",
  surfaceContainerLow: "#f5f2ff",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerHigh: "#eae6f4",
  surfaceVariant: "#e4e1ee",
  outlineVariant: "rgba(199, 196, 216, 0.2)",
  primary: "#3525cd",
  primaryContainer: "#4f46e5",
  primaryFixed: "#e2dfff",
  onPrimary: "#ffffff",
  onPrimaryFixed: "#00201c",
  secondary: "#006b5f",
  secondaryContainer: "#62fae3",
  secondaryFixed: "#62fae3",
  onSecondaryContainer: "#007165",
  tertiary: "#684000",
  tertiaryFixed: "#ffddb8",
  text: "#1b1b24",
  textMuted: "#565465",
} as const;

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  section: 64,
  stage: 88,
} as const;

export const radii = {
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
} as const;

export const typography = {
  fonts: {
    displaySemiBold: "PlusJakartaSans_600SemiBold",
    displayBold: "PlusJakartaSans_700Bold",
    body: "Inter_400Regular",
    bodySemiBold: "Inter_600SemiBold",
  },
  scale: {
    displayLg: {
      fontSize: 56,
      lineHeight: 60,
      letterSpacing: -1.2,
    },
    headlineMd: {
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: -0.6,
    },
    titleLg: {
      fontSize: 20,
      lineHeight: 26,
      letterSpacing: -0.3,
    },
    bodyLg: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,
    },
    bodyMd: {
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0,
    },
    labelMd: {
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.6,
    },
  },
} as const;

export const shadows = {
  ambient: {
    shadowColor: "rgba(27, 27, 36, 0.06)",
    shadowOpacity: 1,
    shadowRadius: 32,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 4,
  },
} as const;

export const designTokens = {
  colors,
  spacing,
  radii,
  typography,
  shadows,
} as const;

export type DesignTokens = typeof designTokens;
