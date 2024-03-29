import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const test = () => {
  return (
    <>
    <Stack.Screen  options={{
      headerShown: true
    }}/>
    <View>
      <Text>test</Text>
    </View>
    </>
  )
}

export default test