import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // hide default headers
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="passwordScreen" />
      <Stack.Screen name="passwordRecoveryCodeScreen" />
      <Stack.Screen name="passwordRecoveryScreen" />
      <Stack.Screen name="setPassword" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
