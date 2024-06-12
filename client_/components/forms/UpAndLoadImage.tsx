import { View, Text, Button, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { ForwardedRef,  RefObject,  useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import * as FileSystem from "expo-file-system"
import * as ImagePicker from 'expo-image-picker'
import { Entypo } from '@expo/vector-icons';

import { publicImageTitle } from '@/constant/screen/post'
import BottomSheet from '@gorhom/bottom-sheet'
import { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { useMyContext } from '../context/UpLoadContext';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';


const imgDir = FileSystem.documentDirectory + 'images/'

const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if(!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(imgDir, {intermediates : true})
    }
}

interface Props {
    images : string[]
    setImages : ([] : string[]) => void,
    open : () => void ,
}

const UpAndLoadImage =  ({
    setImages, 
    images,
    open,
    } : Props) => {
    const [loading, setLoading] = useState(false)
    
    const { updateMyFunction } = useMyContext();

    

//   useEffect(() => {
//     updateMyFunction(() => selectImage(true));
//   }, [updateMyFunction]);

    useEffect(() => {
        updateMyFunction(selectImage)
        loadImages()
    }, [])

    const loadImages = async () => {
		await ensureDirExists();
		const files = await FileSystem.readDirectoryAsync(imgDir);
		if (files.length > 0) {
			setImages([]);
		}
	};

    const selectImage = async (useLibrary : boolean) => {
        let result
        const options : ImagePicker.ImagePickerOptions = {
            mediaTypes : ImagePicker.MediaTypeOptions.Images,
            allowsEditing : true,
            aspect : [4,3],
            quality : 0.75,
        }
        if (useLibrary) {
            result = await ImagePicker.launchImageLibraryAsync(options);
        } else {
            await ImagePicker.requestCameraPermissionsAsync();
            result = await ImagePicker.launchCameraAsync(options);
        }

        if (!result.canceled) {
            saveImage(result.assets[0].uri);
        }
    } 
    const saveImage = async (uri: string) => {
        await ensureDirExists();
        const filename = new Date().getTime() + '.png';
        const dest = imgDir + filename;
        await FileSystem.copyAsync({ from: uri, to: dest });
        setImages([ dest]);
    };

  return (
    <View className='ml-1.5'>
        <TouchableOpacity
            onPress={open}
            className='flex-row'
        >
            <View className='w-5 h-5 mr-2 flex items-end justify-center'>
                <Entypo name="camera" size={20} color="black" />
            </View>
            <View className='flex items-center justify-center'>
                <Text>{publicImageTitle.upload}</Text>
            </View>
        </TouchableOpacity>
    

        
        {/* loading animation  */}
        {loading && (
            <View className='flex justify-center items-center'>
                <ActivityIndicator color={"#fff"} animating size={"large"}/>
            </View>
        )}        
    </View>
  )
}

export default UpAndLoadImage



interface PropsOption {
    option : (use : boolean) => void ,
    bottomSheetRef : RefObject<BottomSheetMethods>, 
}

export const OptionUpLoad = ({option, bottomSheetRef} : PropsOption) => {
    return (
        <>
        <View className='w-full h-full flex-col'>
            <TouchableOpacity 
              className='flex-1 justify-center pl-2'
              onPress={() => option(true)}
            ><Text className='text-lg'>{publicImageTitle.library} </Text></TouchableOpacity>
            <TouchableOpacity
              className='flex-1 justify-center pl-2' 
              onPress={() => option(false)}
            ><Text className='text-lg'>{publicImageTitle.camera}</Text></TouchableOpacity>
            <TouchableOpacity
              className='flex-1 justify-center pl-2' 
              onPress={() => bottomSheetRef.current?.close()}
            ><Text className='text-lg'>{publicImageTitle.close}</Text></TouchableOpacity>
          </View>
        </>
    )
}