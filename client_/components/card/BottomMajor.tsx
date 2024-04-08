import { View, Text, TouchableOpacity, } from 'react-native'
import React  from 'react'
import { MajorTitle } from '@/constant/screen/post';
import { Entypo } from '@expo/vector-icons';

interface Props {
    open : () => void ,
    // close : () => void ,
    // chooseMajor : (major : string) => void 
}

const BottomMajor = ({open, } : Props) => {

  return (
    <>
    <View className='py-2 px-2 flex-none border-y-2 border-slate-300'>
        <TouchableOpacity 
          onPress={open}
          className='h-10'
        >
          <View className='flex-row justify-between items-center'>
            <View>
              <Text>{MajorTitle.title}</Text>
              <Text>{MajorTitle.major}</Text>
            </View>
            <View>
            <Entypo name="chevron-right" size={24} color="black" />
            </View>

          </View>
        
        
        </TouchableOpacity>
        
    </View>   
      
    </>
  )
}

export default BottomMajor