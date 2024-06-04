import { useAuth, useUser } from "@clerk/clerk-expo";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";

const data = [
  {
    key: "1",
    text: "Tất cả các thông tin tài khoản của bạn (bao gồm thông tin đặt lịch khám, hồ sơ sức khỏe của các thành viên trong gia đình...) sẽ bị xóa.",
  },
  {
    key: "2",
    text: "Sau khi xóa tài khoản , bạn không thể đăng nhập và xem lại các thông tin đã lưu trong tài khoản đã xóa.",
  },
  { key: "3", text: "Các dữ liệu bị xóa sẽ không thể khôi phục." },
];

const DeleteAccount = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View style={{ height: "100%" }}>
      <View style={{ backgroundColor: "#fff" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Xóa tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 4,
  },
  bulletPoint: {
    marginRight: 7,
    marginLeft: 10,
    fontSize: 24,
  },
  itemText: {
    marginTop: 5,
    fontSize: 15,
    flex: 1,
    flexWrap: "wrap",
    marginRight: 10,
  },
  button: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#2E82FF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    width: "90%",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default DeleteAccount;
