import { Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { convertCreateAt } from "@/components/pageThread/ThreadDataType";
import { router } from "expo-router";
interface Props {
    localpath : string | string[],
    id : string ,
    title : string,
    content : string,
    createAt : Date,
}


const Disease = ({id,localpath, title, content, createAt} : Props) => {

    const onPress = () => {
        const newid =localpath + "," + id  
        router.push(`/(tabs)/medical/${newid}`)
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
            <FontAwesome5 name="briefcase-medical" size={30} color="#194d89" />
            </View>
            <View className="flex-col">
                <View>
                    <Text>{"ngày " + convertCreateAt(createAt)}</Text>
                </View>
                <View>
                    <Text>{content}</Text>
                </View>

            </View>
        </TouchableOpacity>
        </>
    )
}

export default Disease