import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const avatar = require("../../assets/favicon.png");

const PatientProfile = () => {
  return (
    <View>
      <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Bệnh nhân:</Text>
      <ScrollView>
        <Link href={"/(tabs)/medical/result"} className="mb-4 ml-10">
          <View className="flex-row items-center p-2 mb-4 rounded-xl bg-blue-2">
            <View className="w-16 h-16 rounded-full mr-4 bg-avatar-1 flex items-center justify-center">
              <Image source={avatar} />
            </View>
            <View className="flex-1 mr-7">
              <Text className="text-lg font-semibold">Phan Xuan Bao</Text>
              <Text className="text-gray-500">01/10/2003</Text>
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={20} color="grey" />
          </View>
        </Link>
        <Link href={"/(tabs)/medical/result"} className="mb-4 ml-10">
          <View className="flex-row items-center p-2 mb-4 rounded-xl bg-blue-2">
            <View className="w-16 h-16 rounded-full mr-4 bg-avatar-1 flex items-center justify-center">
              <Image source={avatar} />
            </View>
            <View className="flex-1 mr-7">
              <Text className="text-lg font-semibold">Nguyen Viet Tu</Text>
              <Text className="text-gray-500">01/10/2003</Text>
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={20} color="grey" />
          </View>
        </Link>
      </ScrollView>
    </View>
  );
};

export default PatientProfile;
