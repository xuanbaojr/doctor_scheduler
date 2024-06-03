import { View } from "react-native"
import { measure, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from "react-native-reanimated"

const radius = 8;


export const useAccordin = () => {
    const animatedRef = useAnimatedRef<View>()
    const isOpened = useSharedValue(false)
    const progress = useDerivedValue(() => 
        isOpened.value ? withSpring(1) : withTiming(0)
    )

    const height = useSharedValue(0)
    const headerStyle = useAnimatedStyle(() => ({
        borderBottomLeftRadius : progress.value === 0 ? radius : 0,
        borderBottomRightRadius : progress.value === 0 ? radius : 0,
        borderTopRightRadius : radius,
        borderTopLeftRadius : radius
    }))

    const animatedHeighStyle = useAnimatedStyle(() => ({
        height : height.value * progress.value + 1,
        opacity : progress.value === 0 ? 0 : 1 ,
    }))


    const setHeight = () => {
        'worklet'
        // console.log(measure(animatedRef))
        if(height.value === 0 ) {
            height.value = measure(animatedRef).height
        }
         isOpened.value = !isOpened.value
        //  if(animatedRef.current) console.log("no dang hoat dong")
        //  console.log(isOpened.value)
    }

    return {
        animatedRef,
        setHeight,
        isOpened,
        animatedHeighStyle,
        headerStyle,
        progress,
    }
}