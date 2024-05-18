import { Text, View } from "react-native"


interface Props {
    section : String,
    value : String | null,
}


const InforSection = ({section, value} : Props) => {
    return (
        <>
        <View className="flex-col border-t-2 border-line-bot py-1">
            <View className="my-1">
                <Text className="text-base font-light">{section}</Text>
            </View>
            <View className="mb-1">
                {
                    value != null && value.length !== 0 && 
                    <Text className="text-md font-medium">{value}</Text>
                }
                
            </View>
        </View>
        
        </>
    )
}

export default InforSection