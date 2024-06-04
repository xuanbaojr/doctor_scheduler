import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useCustomers from "@/hooks/useCustomer";
import Spinner from "react-native-loading-spinner-overlay";
import Menber from "./button/Menber";

const avatar = require("../../assets/avatar3.png");

const PatientProfile = () => {
  const { listOfCustomers, isLoading } = useCustomers();
  // loading page 
  if (isLoading) {
    return (
      <Spinner
        visible={true}
        textContent={"Đang tải..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }
  console.log(listOfCustomers)
  if (listOfCustomers.length === 0) {
    return <Text>Không có dữ liệu.</Text>;
  }
  return (
    <View>
      <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Thành viên:</Text>
      <ScrollView className="px-2 ">
        {listOfCustomers.map((customer, index) => (
          <Menber 
            key={index}
            firstName={customer.firstName}
            laseName={customer.lastName}
            date={customer.date}
            id={customer.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PatientProfile;
