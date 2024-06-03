import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import InforDoctor from "@/components/card/InforDoctor";
import PatientProfile from "@/components/patientRecord/PatientProfile";
import CustomerPage from "@/components/patientRecord/page/CustomerPage";

const MedicalPage = () => {

  return (
    <>

      <View className="flex-col justify-between h-full bg-bg-post">
        <CustomerPage />
      </View>
    </>
  );
};
export default MedicalPage;
