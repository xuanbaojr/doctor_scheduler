import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { Entypo } from "@expo/vector-icons";
import AddAvatar from "./addcus/AddAvatar";
import InputSection from "./addcus/InputSection";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import CustomButton from "../customButton";
import DateAndGender from "./addcus/DateAndGender";



interface Props {

}

const AddNewCustom = () => {
    const [selectedImage, setSelectedImage] = useState(
        require("../../assets/avatar.png")
    );
    const { user } = useUser()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [phone, setPhone] = useState("")
    const [numberCMND, setNumberCMND] = useState("")
    const [address, setAddress] = useState("")
    
    return (
        <>
        <GestureHandlerRootView className="h-full w-full">
        <View className="flex-col justify-between p-2 w-full h-full bg-background">
            
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 50}
            >
            <ScrollView className="flex-col w-full mt-1">
                <AddAvatar />
                {/* <View className="my-2"> </View> */}
                <InputSection 
                    placeholder="Họ"
                    value={firstName}
                    setValue={setFirstName}
                />
                <InputSection 
                    placeholder="Tên"
                    value={lastName}
                    setValue={setLastName}
                />

                <DateAndGender />

                <InputSection 
                    placeholder="Số Căn cước/ CMTND"
                    value={numberCMND}
                    setValue={setNumberCMND}
                />
                <InputSection 
                    placeholder="Địa chỉ"
                    value={address}
                    setValue={setAddress}
                />

                
                

            </ScrollView>
            </KeyboardAvoidingView>
            <View className="">
            <CustomButton title="Thêm thành viên" onPress={setFirstName} />
            </View>
        </View>
        </GestureHandlerRootView>
        </>
    )
}

export default AddNewCustom