import { Link } from "expo-router"
import { View } from "react-native"

const BottomBar = () => {
    return (
        <View className="flex justify-between">
            <View>
                <Link href={"/home"}>home page</Link>
            </View>
            <View>
                <Link href={"/schedule"}>schedule Page </Link>
            </View>
            <View>
                <Link href={"/setting"}>setting Page </Link>
            </View>
            
        </View>
    )
}

export default BottomBar