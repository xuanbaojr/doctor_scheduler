import { Image, Text, TouchableOpacity, View } from "react-native"
const avatar = require("../../../assets/avatar3.png");
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { convertCreateAt, convertDateToAge } from "../../pageThread/ThreadDataType";
import { router } from "expo-router";
interface Props {
    firstName : string,
    laseName : string,
    id : string,
    date : Date
}

const Menber = ({firstName, laseName, date, id} : Props) => {
    const onPress = () => {
        console.log(id + " asdadada")
        router.push(`/(tabs)/medical/${id}`)
    }

    return (
        <>
        <TouchableOpacity
            style={{
                flexDirection: "row",
                padding: 16,
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                shadowColor: "#000000",
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 5,
                flex: 1,
                alignItems: "center",
            }}
            onPress={onPress}
            className="flex-row items-center my-2"
        >
            <View className="w-12 h-12 rounded-full mr-4 bg-avatar-1 flex items-center justify-center">
                <Image source={avatar} style={{ width: 60, height: 60, }} />
            </View>
            <View className="flex-1 flex-col">
                <View>
                    <Text text-lg font-medium mb-1 w-48>{firstName + " " + laseName}</Text>
                </View>
                <View>
                    <Text className="text-gray-500">{ convertDateToAge(date)  + " Tuổi"}</Text>
                </View>
            </View>
            <View>
                <FontAwesomeIcon icon={faChevronRight} size={19} color="grey" />
            </View>
        </TouchableOpacity>
        </>
    )
}

export default Menber