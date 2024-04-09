import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <>
        <Stack>
          <Stack.Screen 
            name='(tabs)' 
            options={{
              headerShown: false,
              
            }}/>
            <Stack.Screen 
            name='(adviceDoctor)'
            options={{
              headerShown : false,
            }}
            />
            <Stack.Screen 
            name='scheduleDoctor'
            options={{
              headerShown : false,
            }}
            />
            <Stack.Screen 
            name='chat'
            options={{
              headerShown : false,
            }}
            />
        </Stack>
        
    </>
      
  )
}

export default RootLayout