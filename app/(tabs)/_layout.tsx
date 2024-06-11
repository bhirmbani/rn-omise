import { Slot } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Slot
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    />
  );
}
