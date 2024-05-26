import { View, Text, Image } from 'react-native'
import React from 'react'
import { Comment } from '../pageThread/ThreadDataType'
import { convertComment } from '@/utils/page/comment'
const avatar = require("@/assets/favicon.png")


interface Props {
    comment : Comment,
    // image : string,
}

const CommentDoctor = ({comment} : Props ) => {
  return (
    <View className='flex-row items-center justify-between p-1 mb-1  bg-comment'>
        <View className='w-8 h-8 rounded-full ml-1 mr-2 flex items-center justify-center bg-majorbg'>
            <Image source={avatar} style={{
              height:24,
              width:24,
            }}/>
        </View>
        <View className='text-sm flex-1 h-14  ml-0.5 p-0.5 '>
            <Text className='ml-0.5'>
              {convertComment(comment.content, 120) }
            </Text>
        </View>

    </View>
  )
}

export default CommentDoctor