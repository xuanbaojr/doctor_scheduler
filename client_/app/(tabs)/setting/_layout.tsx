import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={"#808080"} />
    </Pressable>
  );
};

const SettingLayout = () => {
  const { isSignedIn } = useAuth();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Setting",
          headerRight: () => (isSignedIn ? <LogoutButton /> : null),
          headerLeft: () => (
            <Ionicons
              name="person-outline"
              size={24}
              color={"#808080"}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
    </Stack>
  );
};

export default SettingLayout;
