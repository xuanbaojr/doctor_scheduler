import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useUser } from "@clerk/clerk-react";
import { Entypo } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  TextInput,
} from "react-native-gesture-handler";
import instance from "@/utils/axios";
import { useAuth } from "@clerk/clerk-expo";
import CustomButton from "@/components/customButton";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import AddNewCustom from "@/components/infor/AddNewCustom";
const AddMember = () => {
  const [ho, setHo] = useState("");
  const [ten, setTen] = useState("");
  const [tuoi, setTuoi] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [diaChi, setDiaChi] = useState("");

  const [focusedInput, setFocusedInput] = useState(null);
  const handleFocus = (inputId: any) => setFocusedInput(inputId);
  const handleBlur = () => setFocusedInput(null);
  const { userId } = useAuth();
  const [selectedImage, setSelectedImage] = useState(
    require("../../assets/avatar.png")
  );
  const { user } = useUser();
  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.75,
      base64: true,
    });

    if (!result.canceled) {
      const base64 = `avatar/png;base64,${result.assets[0].base64}`;
      user?.setProfileImage({
        file: base64,
      });
    }
  };

  const createCustomer = async () => {
    await instance.post("/createCustomer", {
      userId: userId,
      ho,
      ten,
      tuoi,
      gioiTinh,
      diaChi,
    });
  };
  return (
    <GestureHandlerRootView className='bg-bg w-full h-full flex-col'>

      <AddNewCustom />
      
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderColor: "grey",
    borderWidth: 1,
    marginLeft: 20,
  },
  icon: {
    position: "absolute",
    top: 50,
    left: 68,
    zIndex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    marginVertical: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "gray",
  },
  button: {
    position: "absolute",
    marginHorizontal: 20,
    bottom: 20,
    width: "90%",
  },
});

export default AddMember;
