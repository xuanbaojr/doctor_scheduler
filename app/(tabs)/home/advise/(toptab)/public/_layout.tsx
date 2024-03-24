import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PublicLayout = () => {
  return (
    <Stack>
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

export default PublicLayout