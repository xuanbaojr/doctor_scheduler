import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import InforInput from '@/components/share/InforInput'
import { headerTitle, noteTitle } from '@/constant/screen/post'

const Post = () => {
  
  return (
    <>
    <Stack.Screen  options={{
        headerShown : true,
        headerTitle : headerTitle.title
    }}/>
    <View className='w-full h-full bg-bg flex-col ' >
      

      <InforInput />

    </View>
    </>
    
  )
}

export default Post