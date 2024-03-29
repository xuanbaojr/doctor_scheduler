'use client'
import { Link, useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"


interface Props {
    path : string,
    label : string,

}

const ButtonDesign = ({path, label} : Props) => {
    const router = useRouter()
    const Press = () => {
        router.navigate(path)
    }
    return (
    <TouchableOpacity
        onPress={Press}
        className="bg-blue-1 rounded-lg py-2 px-4"
    >
        <Text className="text-black font-semibold text-center">{label}</Text>
    </TouchableOpacity>
    )
}

export default ButtonDesign