import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Animated, { 
    measure, 
    runOnUI, 
    useAnimatedRef 
} from "react-native-reanimated";
import { useAccordin } from "./useAccordin";
import { useEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import Chevron from "./Chevron";
import AccordinBody from "./AccordinBody";

interface Props {
    index : number,
    label : string,
    body : string[],
    comment : string,
}

const AccordinItem = ({index,comment, label, body} : Props) => {
    const {setHeight, animatedHeighStyle, animatedRef, isOpened, headerStyle, progress} = useAccordin()
  
    return (
        <>
        <TouchableWithoutFeedback
            onPress={() => runOnUI(setHeight)()}
        >
            <Animated.View 
            style={[headerStyle, styles.container]} 
            >
                <Text className="text-base font-bold">{label}</Text>
                <Chevron  {...{progress}}/>
            </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View style={[animatedHeighStyle, styles.body]}>
            <View
                ref={animatedRef}
                collapsable={false}
            >
                {body.map((item, index) => (
                    <AccordinBody
                    key={index}
                    image={item}/>
                ))}
                <AccordinBody comment={comment} />
                
            </View>
        </Animated.View>
        </>
    )
}

export default AccordinItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    body: {
        overflow: "hidden",
    },
})