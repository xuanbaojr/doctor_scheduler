import { useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { convertCreateAt } from "@/components/pageThread/ThreadDataType";
import { AntDesign } from '@expo/vector-icons';
import { convertComment } from "@/utils/page/comment";

interface Props {
    id : string,
    createAt : Date,
    comment : string,
    linkId : string,
}

const ExamiList = ({id, createAt, comment, linkId} : Props) => {
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
                shadowRadius: 2,
                elevation: 2,
                // flex: 1,
                alignItems: "center",
            }}
        >
            <View className="w-16 h-16 rounded-full mr-4 flex items-center justify-center">
                <AntDesign name="calendar" size={32} color="#0860c4" />
            </View>
            <View className="flex-col flex-1">
                <Text className="mb-1  text-slate-500 text-base">
                    {convertComment(comment, 30)}
                </Text>
                <Text>
                    {"Ngày " + convertCreateAt(createAt)}
                </Text>
            </View>
            <View className="p-2 rounded-full mr-1">
                < FontAwesomeIcon icon={faChevronRight} size={19} color="grey" />
            </View>

        </TouchableOpacity>
    )
}

export default ExamiList