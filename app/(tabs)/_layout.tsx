import { Stack } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "@gluestack-ui/themed";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        title: "Cards",
        headerShown: true,
        headerRight: () => (
          <Pressable>
            <Entypo name="plus" size={24} color="black" />
          </Pressable>
        ),
      }}
    />
  );
}
