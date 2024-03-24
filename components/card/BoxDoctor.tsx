import { Image, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const BoxDoctor = () => {

    return (
        <View className="flex-auto flex-row rounded-full items-center  bg-blue-300">
            <View className="h-4 w-4">
            <MaterialIcons name="notifications-none" size={20} color="black" />
            </View>
            <View className="flex-col items-start">
                <View>
                    <Text>Phan xuan bao</Text>
                </View>
                <View>
                    <Text>Khoa noi</Text>
                </View>
            </View>
        </View>
        
    )
}


export default BoxDoctor