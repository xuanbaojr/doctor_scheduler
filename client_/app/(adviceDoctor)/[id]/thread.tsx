import ThreadAnserBox from "@/components/pageThread/ThreadAnserBox"
import {  Comment, ConvertDatatoThreadObject, ThreadDataType } from "@/components/pageThread/ThreadDataType"
import ThreadHeader from "@/components/pageThread/ThreadHeader"
import ThreadQuestion from "@/components/pageThread/ThreadQuestion"
import { headThread } from "@/constant/screen/threads"
import instance from "@/utils/axios"
import { Stack, useLocalSearchParams } from "expo-router"
import { title } from "process"
import { useEffect, useState } from "react"
import { Text } from "react-native"
import {   View } from "react-native"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"


const Thread = () => {
    const { id } = useLocalSearchParams();
    const [question, setQuestion] = useState<string>()
    const [theard, setThreard] = useState<ThreadDataType>()

    const getThreadForId = async () => {
        try {
            const data = await instance.get(`/getThreadById/${id}`)
            const test : ThreadDataType = ConvertDatatoThreadObject(data)
            setThreard(test)
            console.log(test)
            
        }catch (e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        getThreadForId()
    }, [])

    const onSubmit = async  () => {
        console.log(question)
        if(!question) return
        const data = await instance.post("/createComment", {
            id,
            content : question,
            name : "nam 23"
        })
        setQuestion("")
    }
    return (
        <>
        <Stack.Screen  options={{
        headerShown : true,
        headerTitle : headThread.headerTitle
        }} />
        <View className="h-full flex ">
            <GestureHandlerRootView className="h-full w-full">
            <ScrollView className="w-full  flex-col">
                
            {
                theard && 
                <ThreadHeader 
                gender={theard.gender}
                age={theard.age}
                date={theard.createAt}
                title={theard.content}
                major={theard.major}
                image={theard.image}
            />
            }
            {
                theard && 
                <ThreadAnserBox 
                    anser={theard?.comment}
                />
            }
            
            </ScrollView>
            
            <ThreadQuestion 
                question={question} 
                setQuestion={setQuestion}
                onsubmit={onSubmit}
            />
            
            </GestureHandlerRootView>
        </View>
        

        </>
    )
}


export default Thread