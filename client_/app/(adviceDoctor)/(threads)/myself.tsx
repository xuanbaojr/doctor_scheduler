import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialTopTabs } from './_layout'
import Post from '@/components/share/Post'
import { tabTitle } from '@/constant/screen/threads'
import instance from '@/utils/axios'

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
        


      </ScrollView>
    </View>
    </>
    
  )
}

export default Myself