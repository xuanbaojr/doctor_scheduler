import { Image } from "expo-image";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

interface Props {

}

const InvaildPage = () => {

    return (
        <>
        <View className="h-ful w-full px-2 py-1 bg-bg-post">
            <View className="w-full  flex justify-center items-center">
            <FontAwesome name="inbox" size={120} color="#897d7d" />
            </View>
            <View className="flex-row justify-center items-center">
                <Text>
                    Chưa có kết quả khám nào
                </Text>
            </View>


        </View>
        
        </>
    )
}

export default InvaildPage;