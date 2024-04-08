import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'
import { AgeTitle } from '@/constant/screen/post'

interface Props {
    ageDefault : number,
    chooseAge : (age : number) => void
}

const SliderAge = ({chooseAge, ageDefault} : Props) => {
    const [age, setAge] = useState<number>(ageDefault)
  return (
    <>
    <View className='w-full flex-none px-2 '>
        <View className=''>
            <Text>{AgeTitle.ageA}</Text>
        </View>
        <View className=' flex justify-center mb-5 px-10 '>
            <View className='flex justify-center items-center '>
                <Text>{Math.floor(age) + " " + AgeTitle.agea}</Text>
            </View>
            
            <Slider 
              style= {{
                width : "100%",
                height: 30,
                backgroundColor: "#fdf4f4"
              }}
              value={age}
              onValueChange={(value) => setAge(value)}
              minimumValue={1}
              maximumValue={120}
              maximumTrackTintColor='#ff0000'
            />
          </View>
    </View>
    </>
  )
}

export default SliderAge