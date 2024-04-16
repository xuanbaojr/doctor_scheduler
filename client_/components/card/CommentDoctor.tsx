import { View, Text, Image } from 'react-native'
import React from 'react'
const avatar = require("@/assets/favicon.png")


interface Props {
    comment : string,
    // image : string,
}

const CommentDoctor = ({comment} : Props ) => {
  return (
    <View className='flex-row items-center justify-between p-1 mb-1  bg-comment'>
        <View className='w-8 h-8 rounded-full ml-1 mr-1 flex items-center justify-center bg-blue-1'>
            {/* <Image source={avatar}/> */}
        </View>
        <View className='text-sm flex-1 h-12 ml-0.5 p-0.5 '>
            <Text className='ml-0.5'>
              {comment}
            </Text>
        </View>

    </View>
  )
}

export default CommentDoctor