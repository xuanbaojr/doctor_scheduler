import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect, Stack } from 'expo-router'

const AdvisePage = () => {
  return (
    <>
    <View className="flex-1 items-center justify-center bg-white">
      <Redirect href={"/home/advise/public"}/>
    </View>
    </>
  )
}

export default AdvisePage