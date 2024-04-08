import { Text, View } from "react-native"
import ThreadAnser from "./ThreadAnser"
import { ThreadTitle } from "@/constant/screen/threads"

interface anser {
    name : string,
    date : string,
    title : string,
}

interface Props {
    anser : anser[]
}

const ThreadAnserBox = ({anser} : Props) => {
    return (
        <>
        <View className="w-full px-3 py-1 bg-anserBox">
            {/* header */}
            <View className="py-3">
                <Text className="font-medium text-base">
                    {ThreadTitle.anser}
                </Text>

            </View>

            {anser.map((i, index) => (
                <ThreadAnser 
                key={index}
                name={i.name}
                date={i.date}
                title={i.title}
                />
            ))
            }

        </View>
        </>
    )
}

export default ThreadAnserBox