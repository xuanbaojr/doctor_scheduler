import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { tabTitle } from '@/constant/screen/threads'

const AdviseLayout = () => {
  return (
    <Stack>
        <Stack.Screen
            name='(threads)'
            options={{
                headerShown : true,
                headerTitle : tabTitle.header,
            }}
        />
        <Stack.Screen
            name='post'
            options={{
                headerShown : false
            }}
        />
        <Stack.Screen
            name='thread'
            options={{
                headerShown : false
            }}
        />
    </Stack>
  )
}

export default AdviseLayout

