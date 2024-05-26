import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useCustomers from "@/hooks/useCustomer";
import Spinner from "react-native-loading-spinner-overlay";

const avatar = require("../../assets/avatar3.png");

const PatientProfile = () => {
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
    <View>
      <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Bệnh nhân:</Text>
      <ScrollView>
        {listOfCustomers.map((customer, index) => (
          <Link
            key={index}
            href={"/(tabs)/medical/result"}
            className="mb-4 ml-6"
          >
            <View
              style={{
                flexDirection: "row",
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
              <View className="w-16 h-16 rounded-full mr-3 bg-avatar-1 flex items-center justify-center">
                <Image source={avatar} style={{ width: 60, height: 60 }} />
              </View>
              <View className="flex-1 mr-7 ">
                <Text className="text-lg font-medium mb-1 w-48">
                  {customer.firstName + " "}
                  {customer.lastName}
                </Text>
                <Text className="text-gray-500">{customer.age + " tuổi"}</Text>
              </View>
              <FontAwesomeIcon icon={faChevronRight} size={19} color="grey" />
            </View>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

export default PatientProfile;
