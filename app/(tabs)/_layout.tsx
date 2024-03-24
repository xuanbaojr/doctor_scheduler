import React from 'react'
import { Tabs, usePathname } from 'expo-router'
import { tabbar, tabbarsub } from '../../constant/tabsbar'


const TabLayout = () => {
  const pathname = usePathname()
  
  return (
    <Tabs >
        {
            tabbar.map((tab : tabbarsub) => (
              <Tabs.Screen 
                key={tab.name}
                name={tab.name}
                options={{
                  tabBarLabel : tab.tabBarlabel,
                  tabBarIcon : () => tab.tabbarIcon,
                  headerShown : false,
                }}
              />
            ))
        }
    </Tabs>
  )
}

export default TabLayout