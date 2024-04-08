import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from "expo-file-system"
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons';
import { publicImageTitle } from '@/constant/screen/post'

const imgDir = FileSystem.documentDirectory + 'images/'

interface Props {
    uri : string,
    puImage : boolean,
    setImages : ([] : string[]) => void,
    setPuImage : (pu : boolean) => void 
}

const PublicImage = ({uri, setImages,puImage, setPuImage} : Props) => {
    const deleteImage = async () => {
        await FileSystem.deleteAsync(uri);
        setImages([]);
        console.log(uri)
    }

  return (
    <>
    <View className='flex-col flex-none flex justify-between px-2 '>
        <View className='flex-row'>
            <View className='relative w-22 h-22 '>
                <Image source={{uri: uri}} style={{width: 80, height: 80, borderRadius:12}} />
                <View className='absolute -top-2 -right-2 rounded-full bg-blue-50 flex justify-center items-center'>
                    <Feather 
                        name="x" 
                        size={18} 
                        onPress={() => deleteImage()} 
                        color="black" 
                        className='absolute top-0 right-0'
                    />
                </View>
            </View>
            <View className='grow'>

            </View>
        </View>
        <View className=' grow flex-row items-center justify-between'>
            <Text>
                {publicImageTitle.title}
            </Text>
            <Switch 
            onValueChange={() => setPuImage(!puImage)}
            value={puImage}
        />
        </View>
        

    </View>
    </>
  )
}

export default PublicImage