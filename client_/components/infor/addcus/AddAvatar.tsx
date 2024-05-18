import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { Image, Text, View } from "react-native"
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface Props {

}

const AddAvatar = () => {
    const [selectedImage, setSelectedImage] = useState(
        require("@/assets/avatar.png")
    );
    const { user } = useUser()

    return (
        <>
        <View className="flex-row justify-between px-3 mt-3 mb-4 items-center">
                <View className="flex-row flex-1 items-center justify-center shadow-lg bg-post-bt px-2 py-2 rounded-lg border border-border-1">
                    <View className="mr-4">
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
                    </View>
                    <Text className="flex-1">Quét CCCD để nhập nhanh thông tin</Text>
                </View>
                <View className="flex relative justify-center items-center">
                <Image
                    source={
                    typeof selectedImage === "string"
                        ? { uri: selectedImage }
                        : selectedImage || { uri: user?.imageUrl }
                    }
                    style= {{
                        height:70,
                        width : 70,
                        borderRadius: 70,
                        backgroundColor: "#fff",
                        borderColor: "grey",
                        borderWidth: 1,
                        marginLeft: 20,
                    }}
                />  
                <View className="absolute -bottom-0 -right-0">
                    <Entypo name="camera" size={20} color="grey" />
                </View>
                </View>

            </View>
        </>
    )
}

export default AddAvatar