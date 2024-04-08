import { ThreadTitle } from "@/constant/screen/threads"
import { Text, View } from "react-native"

interface Props {
    name : string,
    date : string,
    title : string,
}

const ThreadAnser = ({name, date, title} : Props) => {

    return (
        <>
            <View className="w-full flex-col bg-white p-2 my-2 rounded-md">
                {/* header */}
                <View className="w-full flex-row flex items-center p-2">
                    <View className="h-8 w-8 mr-4 bg-red-500 rounded-full">
                        {/*  */}
                    </View>
                    <View className="flex-1">
                       <Text className="text-hospital font-medium text-base">{name}</Text>
                       <Text className="text-md font-light italic">{date}</Text>
                    </View>
                </View>

                <View className='border-t-2 border-black'></View>
                <View className="py-3 ">
                    <Text>
                        {title}
                    </Text>
                </View>


                

            </View>
        </>
    )
}

export default ThreadAnser