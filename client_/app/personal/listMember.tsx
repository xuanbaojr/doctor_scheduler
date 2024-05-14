import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import instance from "@/utils/axios";

const ListMember = () => {
  const { userId } = useAuth();
  // Initialize listOfCustomers as an empty array to ensure it's never undefined
  const [listOfCustomers, setListOfCustomers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCustomer = async () => {
    setIsLoading(true);
    try {
      const response = await instance.get(`/customer?userId=${userId}`);
      if (Array.isArray(response)) {
        setListOfCustomers(response);
      } else {
        console.error("Expected an array but got:", typeof response);
        setListOfCustomers([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [userId]);

  if (isLoading) {
    return <Text>Đang tải...</Text>;
  }

  if (listOfCustomers.length === 0) {
    return <Text>Không có dữ liệu.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {listOfCustomers.map((customer) => (
        <Link
          key={customer.id}
          style={styles.memberContainer}
          href={"/personal/userInfo"}
        >
          <Text>
            {customer.firstName + " "}
            {customer.lastName}
          </Text>
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
