import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  major : string
}

const Major = ({major} : Props ) => {
  return (
    <View className='flex rounded-lg justify-center items-center bg-majorbg mx-0.5 px-2 py-1'>
      <Text className='text-sm'>{major}</Text>
    </View>
  )
}

export default Major