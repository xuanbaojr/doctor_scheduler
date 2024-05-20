import { useOAuth, useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Ionicons,
  AntDesign,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import CustomButton from "@/components/customButton";
WebBrowser.maybeCompleteAuthSession();

enum Stragy {
  Google = "oauth_google",
  Facebook = "oauth_facebook",
}

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  useWarmUpBrowser();
  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const onSelectAuth = async (strategy: Stragy) => {
    const selectAuth = {
      [Stragy.Google]: googleAuth,
      [Stragy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectAuth();
      console.log("createdSessionId:", createdSessionId);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (err) {
      console.error("OAuth Error:", err);
    }
  };

  const { signIn, setActive, isLoaded } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      Alert.alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />

      <View style={styles.inputField}>
        <FontAwesome5 name="user" size={18} color="black" />
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          value={emailAddress}
          onChangeText={setEmailAddress}
          style={styles.input}
        />
      </View>
      <View style={styles.inputField}>
        <FontAwesome5 name="key" size={18} color="black" />
        <TextInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          {showPassword ? (
            <Ionicons name="eye" size={24} color="grey" />
          ) : (
            <Ionicons name="eye-off" size={24} color="grey" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.buttonLogin}>
        <CustomButton onPress={onSignInPress} title="Đăng nhập" />
      </View>

      <View style={styles.link}>
        <Link href="/reset" asChild>
          <Pressable style={styles.button}>
            <Text>Quên mật khẩu?</Text>
          </Pressable>
        </Link>
        <Link href="/register" asChild>
          <Pressable style={styles.create}>
            <Text>Tạo tài khoản</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.seperatorView}>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            flex: 1,
            width: "35%",
          }}
        />
        <Text style={styles.seperator}>Hoặc</Text>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            flex: 1,
            width: "35%",
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Stragy.Google)}
        >
          <Ionicons name="logo-google" size={24} color="black" />
          <Text style={styles.btnOutlineText}>Đăng nhập với Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Stragy.Facebook)}
        >
          <Ionicons name="logo-facebook" size={24} color="black" />
          <Text style={styles.btnOutlineText}>Đăng nhập với Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
  },
  create: {
    margin: 8,

    alignItems: "center",
    marginLeft: 140,
  },
  input: {
    marginLeft: 10,
    marginBottom: 4,
    fontSize: 16,
    width: "90%",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
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
  seperatorView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  seperator: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    marginBottom: 4,
  },
  btnOutline: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    marginVertical: 8,
    width: "80%",
    backgroundColor: "#fff",
  },
  btnOutlineText: {
    fontWeight: "bold",
    marginLeft: 35,
  },
  buttonLogin: {
    marginVertical: 8,
    borderRadius: 8,
  },
  eyeIcon: {
    position: "absolute",
    marginTop: 10,
    right: 10,
  },
});
