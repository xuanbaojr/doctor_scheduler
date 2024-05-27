import { Pressable, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useSharedValue } from "react-native-reanimated";

interface Props {
    index : number,
    label : string,
    body : string,
}

const AccordinItem = ({index, label, body} : Props) => {
    const a = useSharedValue(0)
    return (
        <View className="w-full ">
            <Pressable 
            onPress={() =>console.log("sadas")}
            className="flex-row justify-between px-2 py-1 items-center"
            >
                <View>
                    <Text>
                        {label}
                    </Text>
                </View>
                <View>
                <AntDesign name="right" size={24} color="black" />
                </View>
            </Pressable>
            <View className="flex justify-center itcem px-2 py-1">
                <Text>
                   {body} 
                </Text>
                
            </View>
        </View>
    )
}

export default AccordinItem