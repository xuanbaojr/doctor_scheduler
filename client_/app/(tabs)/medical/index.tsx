import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import InforDoctor from "@/components/card/InforDoctor";
import PatientProfile from "@/components/patientRecord/PatientProfile";

const MedicalPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View className="">
              <Text className="text-white text-2xl font-semibold">
                {"hồ sơ sức khỏe"}
              </Text>
            </View>
          ),
        }}
      />
      <View className="flex-col justify-between h-full bg-bg">
        <PatientProfile />
      </View>
    </>
  );
};
export default MedicalPage;
