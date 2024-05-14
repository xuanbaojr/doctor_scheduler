import { View, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import CustomButton from "@/components/customButton";

const PwReset = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const { signIn, setActive } = useSignIn();

  // Request a passowrd reset code by email
  const onRequestReset = async () => {
    try {
      await signIn!.create({
        strategy: "reset_password_email_code",
        identifier: emailAddress,
      });
      setSuccessfulCreation(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  // Reset the password with the code and the new password
  const onReset = async () => {
    try {
      const result = await signIn!.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      });
      console.log(result);
      alert("Mât khẩu đã được thay đổi thành công!");

      // Set the user session active, which will log in the user automatically
      await setActive!({ session: result.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !successfulCreation }} />

      {!successfulCreation && (
        <>
          <TextInput
            autoCapitalize="none"
            placeholder="Email của bạn"
            value={emailAddress}
            onChangeText={setEmailAddress}
            style={styles.inputField}
          />

          <CustomButton
            onPress={onRequestReset}
            title="Gửi mã xác nhận qua email"
          ></CustomButton>
        </>
      )}

      {successfulCreation && (
        <>
          <View>
            <TextInput
              value={code}
              placeholder="Mã xác thực..."
              style={styles.inputField}
              onChangeText={setCode}
            />
            <TextInput
              placeholder="Mật khẩu mới"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.inputField}
            />
          </View>
          <Button
            onPress={onReset}
            title="Set new Password"
            color={"#2E82FF"}
          ></Button>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 16,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});

export default PwReset;
function alert(arg0: string) {
  throw new Error("Function not implemented.");
}
