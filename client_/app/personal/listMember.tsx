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
import { Link } from "expo-router";
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

  return (
    <ScrollView className="mt-4 ml-2">
      {listOfCustomers.map((customer, index) => (
        <Link key={index} href={"/(tabs)/medical/result"} className="mb-4 ml-6">
          <View
            style={{
              flexDirection: "row",
              padding: 5,
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
            <View className="w-16 h-16 rounded-full mr-3 bg-avatar-1 flex items-center justify-center">
              <Image source={avatar} style={{ width: 50, height: 50 }} />
            </View>
            <View className="flex-1 mr-5 ">
              <Text className=" mb-1 w-52 text-slate-500 text-base">
                {customer.firstName + " "}
                {customer.lastName}
              </Text>
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={19} color="grey" />
          </View>
        </Link>
      ))}
    </ScrollView>
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
