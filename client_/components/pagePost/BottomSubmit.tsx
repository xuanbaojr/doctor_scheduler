import { View, Text, TouchableOpacity } from 'react-native'
import React, { ForwardedRef, RefCallback, RefObject, forwardRef, useRef } from 'react'
import UpAndLoadImage from '../forms/UpAndLoadImage'
import { SubmitTitle } from '@/constant/screen/post'

interface Props {
    images : string[],
    setImages : ([] : string[]) => void,
    open : () => void ,
    onsubmit : () => void
}

const BottomSubmit =  ({setImages, images, open, onsubmit } : Props) => {
  return (
    <View className='flex-none flex-row border-t-2 border-slate-300  justify-between items-center mb-2 py-2 px-2 -z-10'>
        <UpAndLoadImage 
        open={open}
        images={images} 
        setImages={setImages}
        />
        <View>
            <TouchableOpacity 
            onPress={onsubmit}
            className="rounded-full bg-blue-400 p-2 ">
                <Text>
                    {SubmitTitle.title}
                </Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default BottomSubmit