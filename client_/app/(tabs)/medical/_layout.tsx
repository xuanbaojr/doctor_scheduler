import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import PatientProfile from "@/components/patientRecord/PatientProfile";

const MedicalLayout = () => {
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
                Hồ sơ sức khỏe
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#0860c4",
          },
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default MedicalLayout;
