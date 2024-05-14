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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                margin: 20,
                backgroundColor: "#dfe2e8",
                textAlignVertical: "center",
                padding: 10,
                borderRadius: 8,
              }}
            >
              Chọn ảnh đại diện:
            </Text>
            <TouchableOpacity onPress={onCaptureImage}>
              <View style={styles.icon}>
                <Entypo name="camera" size={20} color="grey" />
              </View>
              <Image
                source={
                  typeof selectedImage === "string"
                    ? { uri: selectedImage }
                    : selectedImage || { uri: user?.imageUrl }
                }
                style={styles.avatar}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              placeholder="Họ và tên đệm"
              style={[
                styles.input,
                focusedInput === "ho" && { borderColor: "#0860c4" },
              ]}
              onFocus={() => handleFocus("ho")}
              onBlur={handleBlur}
              value={ho}
              onChangeText={setHo}
            />
            <TextInput
              placeholder="Tên"
              style={[
                styles.input,
                focusedInput === "ten" && { borderColor: "#0860c4" },
              ]}
              onFocus={() => handleFocus("ten")}
              onBlur={handleBlur}
              value={ten}
              onChangeText={setTen}
            />
            <TextInput
              placeholder="Tuổi"
              style={[
                styles.input,
                focusedInput === "tuoi" && { borderColor: "#0860c4" },
              ]}
              onFocus={() => handleFocus("tuoi")}
              onBlur={handleBlur}
              keyboardType="numeric"
              value={tuoi}
              onChangeText={setTuoi}
            />
            <TextInput
              placeholder="Giới tính"
              style={[
                styles.input,
                focusedInput === "gioitinh" && { borderColor: "#0860c4" },
              ]}
              onFocus={() => handleFocus("gioitinh")}
              onBlur={handleBlur}
              value={gioiTinh}
              onChangeText={setGioiTinh}
            />
            <TextInput
              placeholder="Địa chỉ"
              style={[
                styles.input,
                focusedInput === "diachi" && { borderColor: "#0860c4" },
              ]}
              onFocus={() => handleFocus("diachi")}
              onBlur={handleBlur}
              value={diaChi}
              onChangeText={setDiaChi}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <CustomButton title="Thêm thành viên" onPress={createCustomer} />
      </View>
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
