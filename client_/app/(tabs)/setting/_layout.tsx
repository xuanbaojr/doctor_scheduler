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
          headerShown: true,
          headerTitle: () => (
            <View className="w-ful">
              <Text className="text-white flex-row justify-center text-2xl font-semibold ">
                Cá nhân
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#0860c4",
          },
        }}
      />
    </Stack>
  );
};

export default SettingLayout;
