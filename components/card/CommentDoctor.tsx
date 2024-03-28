import { View, Text, Image } from 'react-native'
import React from 'react'
const avatar = require("@/assets/favicon.png")


interface Props {
    conment : string,
    image : string,

}

const CommentDoctor = () => {
  return (
    <View className='flex-row items-center justify-between p-1 mb-1 rounded-xl bg-avatar-2'>
        <View className='w-10 h-10 rounded-full ml-1 mr-1 flex items-center justify-center bg-blue-1'>
            {/* <Image source={avatar}/> */}
        </View>
        <View className='text-sm flex-1 ml-0.5 p-0.5 rounded-xl bg-blue-1'>
            <Text className='ml-0.5'>aaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaa
            </Text>
        </View>

    </View>
  )
}

export default CommentDoctor