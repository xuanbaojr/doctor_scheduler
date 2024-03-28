import { View, Text, Image } from 'react-native'
import React from 'react'
import CommentDoctor from './CommentDoctor'
import Major from './Major'
const avatar = require("@/assets/favicon.png")


interface Props {

}

const Post = () => {
  return (
    <View className='w-full p-2 bg-blue-1 rounded-xl'>
        {/* header */}
        <View className='flex-row items-center mb-2 justify-center pl-2'>
            <View className='w-10 h-10 rounded-full mr-4 bg-avatar-2'>
                {/* <Image source={avatar} /> */}
            </View>
            <View className='flex-col flex-1'>
                <Text className='text-sm font-semibold'>hoj ten</Text>
                <Text className='text-gray-300'>ngay gui</Text>
            </View>
        </View>

        {/* post */}
        <View className='text-black bg-avatar-1 p-1 h-24 rounded-lg pl-2 mb-2'>
            <Text>arsdfasdfsdfsgdfgdbgrbtttgdvdf</Text>
        </View>
        {/* comment */}
        <View className='pl-6 mb-2'>
            <CommentDoctor />
        </View>

        {/* chuyen khoa */}
        <View className='mx-1 my-2 p-1.5 flex-row gap-2'>
            <Major />
        </View>

    </View>
  )
}

export default Post