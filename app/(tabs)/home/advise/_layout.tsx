import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AdviseLayout = () => {
  return (
    <Stack screenOptions={{headerShadowVisible: false}}>
        <Stack.Screen 
            name='index'
            options={{
                headerShown: false,
                headerTitle : "advi"
            }}
        />
    </Stack>
  )
}

export default AdviseLayout