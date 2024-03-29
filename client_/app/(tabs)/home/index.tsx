import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack, } from 'expo-router'
import ButtonDesign from '@/components/card/ButtonDesign'
import ReviewDoctor from '@/components/card/ReviewDoctor'
import Activity from '@/components/card/Activity'

const HomePage = () => {
  return (
    <>
    <Stack.Screen  options={{
      headerShown : true,
    }}/>
    <View className="flex-col justify-between h-full bg-bg">
      <View className='h-[40rem] '>
        <View className='w-full absolute'>
          
        </View>
        <Activity />
      </View>
      
      <View className='b-0 h-3/5'>
        <ReviewDoctor />
      </View>

        
      </View>

    </>
  )
}

export default HomePage