import React from 'react'
import { Tabs, usePathname } from 'expo-router'


const TabLayout = () => {
  const pathname = usePathname()
  
  return (
    <Tabs >
        <Tabs.Screen
            name='private' 
            options={{
                headerShown : false,
            }}
        />
        <Tabs.Screen
            name='public'
            options={{
                headerShown : false,
            }}
        />
    </Tabs>
  )
}

export default TabLayout