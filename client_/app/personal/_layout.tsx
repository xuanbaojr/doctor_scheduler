import { Link, Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="listMember"
        options={{
          headerTitle: "Thành viên gia đình",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0860c4",
          },
          headerRight: () => (
            <Link href={"/personal/addMember"}>
              <Entypo name="plus" size={30} color="white" />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="addMember"
        options={{
          headerTitle: "Thêm thành viên",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0860c4",
          },
        }}
      />
      <Stack.Screen
        name="userInfo"
        options={{
          headerTitle: "Chi tiết hồ sơ",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0860c4",
          },
        }}
      />
      <Stack.Screen
        name="changePassword"
        options={{
          headerTitle: "Đổi mật khẩu",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0860c4",
          },
        }}
      />
      <Stack.Screen
        name="deleteAccount"
        options={{
          headerTitle: "Lưu ý",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0860c4",
          },
        }}
      />
    </Stack>
  );
}
