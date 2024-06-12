import { ThreadTitle } from "@/constant/screen/threads"
import { Text, View } from "react-native"
import { convertCreateAt } from "./ThreadDataType"

interface Props {
    name : string,
    date : Date,
    title : string,
}

const ThreadAnser = ({name, date, title} : Props) => {

    return (
        <>
            <View className="w-full flex-col bg-white p-2 my-2 rounded-md"
                style={{
                    borderRadius: 6,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 2,
                    elevation: 2,
                }}
            >
                {/* header */}
                <View className="w-full flex-row flex items-center px-2 py-1">
                    <View className="h-8 w-8 mr-4 bg-red-500 rounded-full">
                        {/*  */}
                    </View>
                    <View className="flex-1">
                       <Text className="text-hospital font-medium text-base">{name}</Text>
                       <Text className="text-md font-light italic">{convertCreateAt(date)}</Text>
                    </View>
                    {/* <View className="flex rounded-full bg-slate-600 h-6 w-6">
                        <Text>
                            adasa
                        </Text>
                    </View> */}
                </View>

                {/* seperator */}
                <View style={{
                    height: 1,
                    backgroundColor: '#e0e0e0',
                    marginVertical: 5,
                }}></View>

                <View className="py-1">
                    <Text>
                        {title}
                    </Text>
                </View>
            </View>
        </>
    )
}

export default ThreadAnser