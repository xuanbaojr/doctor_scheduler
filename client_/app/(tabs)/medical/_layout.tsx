import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import PatientProfile from "@/components/patientRecord/PatientProfile";

const MedicalLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Hồ sơ sức khỏe",
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
