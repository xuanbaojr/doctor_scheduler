import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useClerk } from "@clerk/clerk-expo";

const PasswordInput = ({
  value,
  onChangeText,
  placeholder,
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="grey"
        />
      </TouchableOpacity>
    </View>
  );
};

const ChangePassword = () => {
  const { user } = useClerk();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu không trùng khớp.");
      return;
    }
    try {
      await user!.updatePassword({
        newPassword,
        currentPassword,
      });
      Alert.alert("Thành công", "Mật khẩu được đặt lại thành công.");
    } catch (error) {
      Alert.alert("Thất bại", "Đặt lại mật khẩu thất bại.");
    }
  };

  return (
    <View style={styles.container}>
      <PasswordInput
        placeholder="Mật khẩu cũ"
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <PasswordInput
        placeholder="Mật khẩu mới"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <PasswordInput
        placeholder="Xác nhận mật khẩu mới"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Pressable onPress={handleChangePassword} style={styles.button}>
        <FontAwesome5 name="arrow-circle-right" size={40} color="#0860c4" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
});

export default ChangePassword;
