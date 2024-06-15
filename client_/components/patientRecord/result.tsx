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
      <View className="flex">
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
        <View className="px-2">
          <View className="flex bg-background  rounded-lg border-border-1 border"
            style={{
              flexDirection: "row",
              height: 16,
              padding: 16,
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              shadowColor: "#000000",
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 5,
              flex: 1,
              alignItems: "center",
          }}
          >
              <Text>Tình trạng cơ thể ổn </Text>
          </View>
            
        </View>
      </View>
    </>
  );
};
export default result;
