import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { colors, typography } from "@lingoflow/design-tokens";

import { appFonts } from "../src/lib/fonts";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(appFonts);

  if (!fontsLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerLargeTitle: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.surface,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: typography.fonts.displaySemiBold,
            fontSize: typography.scale.titleLg.fontSize,
          },
          contentStyle: {
            backgroundColor: colors.surface,
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
        <Stack.Screen name="goals" options={{ title: "Goal Setup" }} />
        <Stack.Screen name="dashboard" options={{ title: "Today" }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    backgroundColor: colors.surface,
    flex: 1,
    justifyContent: "center",
  },
});
