import { View, Text } from "react-native";
import React from "react";
import AddMember from "@/components/addMember/AddMember";

const SettingPage = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <AddMember />
    </View>
  );
};

export default SettingPage;
