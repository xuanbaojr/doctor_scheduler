import { View, Text,  } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { fieldInputTitle } from '@/constant/screen/post';

interface Props {
  title : string
  setTitle : (title : string) => void
}

const FieldInput = ({title, setTitle} : Props) => {
  const placeholder = fieldInputTitle.placeholder
  return (
    <View className='grow -z-10 px-3'>
    <ScrollView className='h-30'>
      <TextInput
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
      onChangeText={setTitle}
      />
    </ScrollView>
    
    </View>
  )
}

export default FieldInput