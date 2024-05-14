'use client'
import { Link, useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

interface Props {
    path : string,
    label : string,
    children : React.ReactElement

}

const ButtonDesign = ({path, label, children} : Props) => {
    const router = useRouter()
    const Press = () => {
        router.navigate(path)
    }
    return (
    <TouchableOpacity
        onPress={Press}
        className="border flex-1  border-all rounded-full p-3 mr-3 flex-row justify-around items-center"
    >
        <View>
            {children}
        </View>
        <Text className=" text-all text-base font-semibold text-center">{label}</Text>
    </TouchableOpacity>
    )
}

export default ButtonDesign