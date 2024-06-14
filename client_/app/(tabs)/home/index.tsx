import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Redirect, Stack } from "expo-router";
import ButtonDesign from "@/components/card/ButtonDesign";
import ReviewDoctor from "@/components/forms/ReviewDoctor";
import Activity from "@/components/card/Activity";
import { useAuth } from "@clerk/clerk-expo";
const background = require("../../../assets/background4.jpg");
import { FontAwesome5 } from "@expo/vector-icons";
import useCustomers from "@/hooks/useCustomer";
import Spinner from "react-native-loading-spinner-overlay";

const StartPage = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log("StartPage", isLoaded, userId, sessionId, getToken);
  const header = "Xin chào ";

  const { listOfCustomers, isLoading } = useCustomers();
  if (isLoading) {
    return (
      <Spinner
        visible={true}
        textContent={"Đang tải..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }
  if(listOfCustomers.length === 0 ) {
    return <Redirect href="/personal/addMember" />
  } else {

  
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View className="">
              <Text className="text-white text-2xl font-semibold">
                {header}
              </Text>
            </View>
          ),
        }}
      />
      <ScrollView className="flex-col bg-background">
        <View className="px-2 py-4 rounded-full">
          <Image
            source={background}
            resizeMode="cover"
            style={{
              height: 230,
              borderRadius: 12,
            }}
            className=" w-full grid grid-rows-2"
          />
        </View>

        {/* activity  */}
        <View className="my-3">
          <Activity />
        </View>
            {/* review doctor */}
        <View className="">
          <ReviewDoctor />
        </View>
        {/* hotline */}
        <View className="px-2 mb-3">
          <View className="flex-row py-2 bg-bghotline justify-center items-center rounded-xl">
            <View className="mr-3 flex justify-center items-center">
              <FontAwesome5 name="phone-alt" size={24} color="blue" />
              </View>
              <View className="">
                <Text className="text-all text-base font-semibold text-center">hotline: 1900 6868 </Text>
              </View>
            </View>
        </View>
        <Link href={`/chat/AI_chat`} asChild>
          <TouchableOpacity>
            <Text>AI CHAT DEMO</Text>
          </TouchableOpacity>
          </Link>
        
          <Link href={`/chat/AI_chat_test`} asChild>
          <TouchableOpacity>
            <Text>AI CHAT TEST</Text>
          </TouchableOpacity>
          </Link>
      </ScrollView>
    </>
  )};
};

export default StartPage;
