import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Link, Stack, useRouter } from 'expo-router'
import Post from '@/components/share/Post'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialTopTabs } from './_layout';
import { tabTitle } from '@/constant/screen/threads';

const advise = () => {
  

  return (
    <>
    <MaterialTopTabs.Screen options={{
      title : tabTitle.communicate
    }}/>
    <View className='h-full w-full bg-bg p-0.5'>
      <ScrollView className="w-full h-full px-3 pt-2 ">
        <Post />
        <Post />
        <Post />
        <Post />


      </ScrollView>

        

    </View>
    </>
    
  )
}

export default advise