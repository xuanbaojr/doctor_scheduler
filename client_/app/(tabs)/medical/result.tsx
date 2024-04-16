import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const result = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <View>
        <Text>Result</Text>
      </View>
    </>
  );
};
export default result;
