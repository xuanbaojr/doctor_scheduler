import axiosInstance from "@/untils/axios";

interface User {
  id: string;
  email: string;
  phone: string;
  // role: string;
}

export const fetchUser = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get<User>("/user");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data: " + error);
  }
};
