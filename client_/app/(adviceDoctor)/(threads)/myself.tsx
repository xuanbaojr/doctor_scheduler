import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MaterialTopTabs } from './_layout'
import Post from '@/components/share/Post'
import { tabTitle } from '@/constant/screen/threads'

const Myself = () => {
  return (
    <>
    <MaterialTopTabs.Screen 
        options={{
            title : tabTitle.myself
        }}
    />
    <View className='h-full w-full bg-bg p-0.5'>
    <ScrollView className="w-full h-full px-4 pt-2 ">
        <Post />
        <Post />
        <Post />
        <Post />


      </ScrollView>
    </View>
    </>
    
  )
}

export default Myself