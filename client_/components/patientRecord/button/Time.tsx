import { Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { convertCreateAt } from "@/components/pageThread/ThreadDataType";
import { convertComment } from "@/utils/page/comment";
import { router } from "expo-router";

interface Props {
    localpath : string[] | string,
    id : string,
    title : string,
    createAt : Date,
}

const Time = ({localpath, id,title,createAt} : Props) => {
    const onPress = () => {
        // const newid =localpath + "," + id  
        router.push(`/(tabs)/medical/result`)
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
                <Entypo name="back-in-time" size={30} color="#194d89" />
            </View>
            <View className="flex-col">
                <View>
                    <Text>{"ngày " + convertCreateAt(createAt)}</Text>
                </View>
                <View>
                    <Text>{convertComment(title, 30)}</Text>
                </View>

            </View>
        </TouchableOpacity>
        
        </>
    )
}

export default Time