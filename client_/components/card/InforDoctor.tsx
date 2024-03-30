import { Image, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
const avatar = require("../../assets/favicon.png")

const InforDoctor = () => {

    return (
        <View className="flex-row items-center p-2 mb-4 rounded-xl bg-blue-2">
            <View className="w-16 h-16 rounded-full mr-4 bg-avatar-1 flex items-center justify-center">
                <Image source={avatar}  />
            </View>
            <View className="flex-1">
                    <Text className="text-lg font-semibold">Phan xuan bao</Text>
                    <Text className="text-gray-500">Khoa noi</Text>
            </View>
        </View>
        
    )
}


export default InforDoctor