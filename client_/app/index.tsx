import { View, Text } from "react-native";
import React from "react";
import { Link, Stack, Redirect } from "expo-router";

const StartPage = () => {
  return <Redirect href={"/(public)/login"} />;
};

export default StartPage;
