import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { Image, Text, View } from "react-native"
import { Entypo } from "@expo/vector-icons";

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
                <View className="flex items-center justify-center bg-post-bt p-2">
                    <Text>Chọn ảnh đại diện:</Text>
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