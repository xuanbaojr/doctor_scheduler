import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack, } from 'expo-router'
import ButtonDesign from '@/components/card/ButtonDesign'
import ReviewDoctor from '@/components/forms/ReviewDoctor'
import Activity from '@/components/card/Activity'
import instance from '@/utils/axios'

const HomePage = () => {
  const fetchuser = async () => {
  try {
      const doctors = await instance.get("/threadAll")
      console.log(doctors)
  }catch (e) {
      console.log(e)
  }
  }

  return (
    <>
    <Stack.Screen  options={{
      headerShown : true,
    }}/>
    <View className="flex-col justify-between h-full bg-bg">
      <View className='h-[40rem] '>
        <TouchableOpacity 
        onPress={fetchuser}
        className='h-10 w-10 bg-blue-700'>
          <Text>fecth user</Text>

        </TouchableOpacity>
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