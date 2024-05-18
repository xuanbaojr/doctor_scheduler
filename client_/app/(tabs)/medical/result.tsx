import { Stack } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";

const result = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Kết quả khám bệnh",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#0860c4",
          },
        }}
      />
      <View>
        <Image
          source={require("../../../assets/ketQuaKham.png")}
          style={{
            width: 400,
            height: 400,
          }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};
export default result;
