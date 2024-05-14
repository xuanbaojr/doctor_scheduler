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
      <View className="flex-col justify-between h-full bg-bg">
        <PatientProfile />
      </View>
    </>
  );
};
export default MedicalPage;
