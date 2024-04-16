import { Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Image } from "react-native-reanimated/lib/typescript/Animated";
import { convertCreateAt, convertName } from "./ThreadDataType";

interface Props {
    gender : string,
    age : string,
    date : Date ,
    title : string ,
    major : string[] ,
    image : string 
}

const ThreadHeader = ({gender, age, date, title,major, image} : Props) => {
    

    return (
    <>
    <View className="w-full bg-threadbg px-3 py-2 flex-col ">
        {/* avatar */}
        <View className="w-full flex-row items-center border-b-2 py-2 border-red-100">
            <View className="w-10 h-10 p-0.5 rounded-full mr-4 bg-white flex justify-center items-center">
                <View className=" w-full h-full bg-bgavatar rounded-full flex justify-center items-center">
                    <Ionicons name="person" size={30} color='white' />
                </View>
            </View>
            <View className="flex-col flex-1">
                <Text className="text-sm font-semibold">{convertName(gender, age)}</Text>
                <Text className="text-sm font-light italic">{convertCreateAt(date)}</Text>
            </View>
        </View>

        {/* title */}
        <View className="px-2 py-2">
            <Text className="text-sm font-normal">
                {title}
            </Text>
        </View>

        {/* image */}

        <View className="h-30 w-full ">
            {/* <Image source={uri} */}
            {/* {image && <Image source={image} />} */}

        </View>

        {/* list major  */}
        <View className="flex-row flex-wrap">
            {major?.map((i) => (
            <View key={i} className='flex rounded-md justify-center items-center bg-majorbg p-1.5 mx-1'>
                <Text className='text-sm'>{i}</Text>
            </View> 
            ))}
            
        </View>

    </View>
    </>
    )
}

export default ThreadHeader