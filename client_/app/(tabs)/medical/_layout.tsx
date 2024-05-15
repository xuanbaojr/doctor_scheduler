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
          headerTitle: "Cá nhân",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="result"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default MedicalLayout;
