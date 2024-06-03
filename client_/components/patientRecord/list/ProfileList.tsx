import { View } from "react-native"
import { TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { Text } from "react-native";
import { convertCreateAt } from "@/components/pageThread/ThreadDataType";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { convertComment } from "@/utils/page/comment";

interface Props {
    id : string,
    createAt : Date,
    title : string,
    reconment : string,
    linkId : string,

}

const ProfileList = ({id, createAt, title, reconment, linkId} : Props) => {
    const router = useRouter()

    const onPress = () => {
        const link = linkId + "," + id
        router.push(`/(tabs)/medical/${link}/result`)
    }

    return (
        <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center my-2"
        style={{
            // flexDirection: "row",
            padding: 2,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            shadowColor: "#000000",
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
            alignItems: "center",
        }}
        >
            <View className="w-16 h-16 rounded-full mr-4 flex justify-center items-center">
                <FontAwesome5 name="notes-medical" size={32} color="#0860c4" />
            </View>
            <View className="flex-col flex-1">
                <Text className="mb-1  text-slate-500 text-base">{convertComment(title, 30)}</Text>
                <Text>{"Ngày " + convertCreateAt(createAt)}</Text>
            </View>
            <View className="p-2 rounded-full mr-1">
                < FontAwesomeIcon icon={faChevronRight} size={19} color="grey" />
            </View>
        </TouchableOpacity>
    )
}

export default ProfileList