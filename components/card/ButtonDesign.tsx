import { Link } from "expo-router"
import { Text, View } from "react-native"


interface Props {
    path : string,
    name : string,

}

const ButtonDesign = ({path, name} : Props) => {
    return (
        <View className=" bg-blue-200  h-full w-full">
            <Link 
                className="w-ful h-full"
                href={path}
            >
                <Text>
                    {name}
                </Text>
            </Link>
        </View>
    )
}

export default ButtonDesign