import { View, Text, Image } from 'react-native'
import React from 'react'
import CommentDoctor from '../card/CommentDoctor'
import Major from '../card/Major'
const avatar = require("@/assets/favicon.png")


interface Props {

}

const Post = () => {
  return (
    <View className='w-full px-2 py-1 bg-blue-1 rounded-2xl my-1'>
        {/* header */}
        <View className='flex-row mb-1 justify-center items-center pl-2 mt-1'>
            <View className='w-8 h-8 rounded-full mr-4 bg-avatar-2'>
                {/* <Image source={avatar} /> */}
            </View>
            <View className='flex-col flex-1'>
                <Text className='text-sm font-semibold'>ho ten</Text>
                <Text className=''>ngay gui</Text>
            </View>
        </View>

        {/* post */}
        <View className='text-black bg-avatar-1 p-1 h-16 rounded-3xl pl-3 mb-1'>
            <Text>tieu de</Text>
        </View>
        {/* comment */}
        <View className='pl-6 mb-2'>
            <CommentDoctor />
        </View>

        {/* chuyen khoa */}
        <View className=' p-1.5 flex-row gap-2'>
            <Major />
        </View>

    </View>
  )
}

export default Post