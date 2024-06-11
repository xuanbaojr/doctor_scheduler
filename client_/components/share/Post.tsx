import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CommentDoctor from '../card/CommentDoctor'
import Major from '../card/Major'
import {   ThreadDataType, convertCreateAt, convertName } from '../pageThread/ThreadDataType'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { convertComment } from '@/utils/page/comment'


interface Props {
    thread : ThreadDataType,
  
}

const Post = ({thread} : Props) => {
    const router = useRouter()

    const OnThread = () => {
        router.push(`/(adviceDoctor)/${thread.id}/thread`)
    }

  return (
    <TouchableOpacity 
    onPress={OnThread}
    className='w-full px-2 py-1 bg-bg-post  my-1'
    style={{
        // flexDirection: "row",
        // height: 16,
        // padding: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2 ,
        elevation: 2,
        // flex: 1,
        // alignItems: "center",
    }}
    >
        {/* header */}
        <View className='flex-row mb-1 justify-center items-center pl-2 mt-1'>
            <View className="w-10 h-10 p-0.5 rounded-full mr-4 bg-white flex justify-center items-center">
                <View className=" w-full h-full bg-majorbg rounded-full flex justify-center items-center">
                    <Ionicons name="person" size={30} color='white' />
                </View>
            </View>
            <View className='flex-col flex-1'>
                <Text className='text-sm font-semibold'>{convertName(thread.gender, thread.age)}</Text>
                <Text className='text-sm font-light italic'>{convertCreateAt(thread.createAt)}</Text>
            </View>
        </View>

        {/* post */}
        <View className='text-black p-1 maxh16  pl-3 mb-1'>
            <Text>{convertComment(thread.content, 180)}</Text>
        </View>
        {/* comment */}
        <View className='pl-3 mb-2'>
            {
                thread.comment.length > 0 && 
                <CommentDoctor 
                comment={thread.comment[0]}
            />
            }
        </View>

        {/* chuyen khoa */}
        <View className=' p-1.5 flex-row gap-2'>
            {
                thread.major.map((i) => (
                    <Major key={i} major={i} />
                ))
            }
        </View>

    </TouchableOpacity>
  )
}

export default Post