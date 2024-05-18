import React, { useEffect, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import instance from "@/utils/axios";
import useCustomers from "@/hooks/useCustomer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const avatar = require("../../assets/avatar3.png");
const ListMember = () => {
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

  if (listOfCustomers.length === 0) {
    return <Text>Không có dữ liệu.</Text>;
  }

  const Press = () => {
    router.navigate("/(tabs)/medical/result")
  }

  return (
    <View className="w-full h-full bg-background px-2">
    <ScrollView className="mt-4 bg-background">
      {listOfCustomers.map((customer, index) => (
        <TouchableOpacity key={index} onPress={Press} 
          style={{
            // flexDirection: "row",
            padding: 5,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            shadowColor: "#000000",
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
            // flex: 1,
            alignItems: "center",
          }}
          className="w-full my-2 flex-row items-center"
        >
            <View className="w-16 h-16 rounded-full bg-avatar-1 flex items-center justify-center">
              <Image source={avatar} style={{ width: 50, height: 50 }} />
            </View>
            <View className="flex-1 flex-row items-center justify-between">
              <View className="flex ">
                <Text className=" mb-1  text-slate-500 text-base">
                  {customer.firstName + " "}
                  {customer.lastName}
                </Text>
              </View>
              <View className="p-2 rounded-full mr-1">
                < FontAwesomeIcon icon={faChevronRight} size={19} color="grey" />
              </View>
            </View>
        </TouchableOpacity>
        
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memberContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default ListMember;
