import { View } from "react-native"
import { measure, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export const useAccordin = () => {
    const animatedRef = useAnimatedRef<View>()
    const isOpened = useSharedValue(false)
    const height = useSharedValue(0)
    const animatedHeighStyle = useAnimatedStyle(() => ({
        height : withTiming(height.value)
    }))

    const setHeight = () => {
        'worklet'

        height.value = !height.value
         ? Number(measure(animatedRef)?.height ?? 0)
         : 0 
         isOpened.value = !isOpened.value
    }

    return {
        animatedRef,
        setHeight,
        isOpened,
        animatedHeighStyle,
    }
}