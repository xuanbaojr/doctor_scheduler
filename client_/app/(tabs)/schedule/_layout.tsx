import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SettingLayout = () => {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#194d89',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
        <Stack.Screen 
            name='index'
            options={{
              headerTitle: "Cá nhân",
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }}
        />
    </Stack>
  )
}

export default SettingLayout