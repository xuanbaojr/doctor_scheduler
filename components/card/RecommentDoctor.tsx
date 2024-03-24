import { Text, View } from "react-native"
import BoxDoctor from "./BoxDoctor"


const RecommentDoctor = () => {

    return (
        <View className="w-full  flex-col  ">
            <View className="w-full text-lg mb-5">
                <Text>
                    Bac si nhan duoc danh gia cao
                </Text>
            </View>
            <BoxDoctor />
            <BoxDoctor />

        </View>
    )
}


export default RecommentDoctor