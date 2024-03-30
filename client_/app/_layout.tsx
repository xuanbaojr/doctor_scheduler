import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import BottomBar from '../components/share/bottombar'

const RootLayout = () => {
  return (
    <>
        <Stack>
          <Stack.Screen 
            name='(tabs)' 
            options={{
              headerShown: false,
              
            }}/>
        </Stack>
        
    </>
      
  )
}

export default RootLayout