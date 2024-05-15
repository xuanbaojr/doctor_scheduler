import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";

const SettingLayout = () => {
  const { isSignedIn } = useAuth();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#194d89',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Cá nhân",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default SettingLayout;
