import { Image, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
const avatar = require("../../assets/favicon.png")

interface Props {
    major : string,
    name : string, 
}

const InforDoctor = ({major, name} : Props) => {
    const router = useRouter()
    const onpress = () => {
        router.push("/home/")
    }

    return (
        <TouchableOpacity 
        onPress={() => onpress()}
        className="flex-row p-2 mb-3 rounded-xl bg-bg-post"
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
                        <Text className="text-base font-semibold">{name}</Text>
                    </View>
                    <View className="rounded-sm flex-row mt-0.5">
                        <Text className=" text-all bg-bgmajor py-0.5 px-1 rounded-md flex-none">{major}</Text>
                    </View>
            </View>
        </TouchableOpacity>
        
    )
}


export default InforDoctor