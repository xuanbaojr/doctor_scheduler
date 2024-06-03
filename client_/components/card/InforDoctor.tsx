import { Image, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
const avatar = require("../../assets/favicon.png")

const InforDoctor = () => {

    return (
        <View className="flex-row p-2 mb-3 rounded-xl bg-bg-post"
        style={{
            flexDirection: "row",
            // height: 16,
            // padding: 16,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            shadowColor: "#000000",
            shadowOpacity: 0.1,
            shadowRadius: 2 ,
            elevation: 2,
            flex: 1,
            alignItems: "center",
        }}
        >
            <View className="w-16 h-16 rounded-xl mr-4 bg-avatar-1 flex items-center justify-center">
                <Image source={avatar}  />
            </View>
            <View className="flex-col">
                    <View>
                        <Text className="text-base font-semibold">Phan Xuân Bảo</Text>
                    </View>
                    <View className="rounded-sm flex-row ">
                        <Text className=" text-all bg-bgmajor py-0.5 px-1 rounded-md flex-none">Khoa noi</Text>
                    </View>
            </View>
        </View>
        
    )
}


export default InforDoctor