import { Image, Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { convertCreateAt, convertName } from "./ThreadDataType";

interface Props {
    gender : string,
    age : string,
    date : Date ,
    title : string ,
    major : string[] ,
    image : string 
}

const linkDefault = "https://files.edgestore.dev/w3yo8jqa6b3xtuvu/publicFiles/_public/"


const ThreadHeader = ({gender, age, date, title,major, image} : Props) => {
    

    return (
    <>
    <View className="w-full bg-threadbg px-3 py-2 flex-col "
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
        {/* avatar */}
        <View className="w-full flex-row items-center border-b py-2.5 border-red-100">
            <View className="w-10 h-10 p-0.5 rounded-full mr-4 bg-white flex justify-center items-center">
                <View className=" w-full h-full bg-majorbg rounded-full flex justify-center items-center">
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
            <Text className="text-sm font-normal flex-row">
                {title}
            </Text>
        </View>

        {/* image */}
        {
            image && 
            <View className="my-3 px-2">
            <Image source={{uri: image + linkDefault}} style={{width: 80, height: 80, borderRadius:12}} />
        </View>
        }
        

        {/* list major  */}
        <View className="flex-row flex-wrap">
            {major?.map((i) => (
            <View key={i} className='flex rounded-md justify-center items-center bg-majorbg shadow-lg p-1.5 mx-1'>
                <Text className='text-sm'>{i}</Text>
            </View> 
            ))}
            
        </View>

    </View>
    </>
    )
}

export default ThreadHeader