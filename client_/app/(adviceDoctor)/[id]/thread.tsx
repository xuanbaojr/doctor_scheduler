import ThreadAnserBox from "@/components/pageThread/ThreadAnserBox"
import { ConvertDatatoThreadObject, ThreadDataType } from "@/components/pageThread/ThreadDataType"
import ThreadHeader from "@/components/pageThread/ThreadHeader"
import ThreadQuestion from "@/components/pageThread/ThreadQuestion"
import { headThread } from "@/constant/screen/threads"
import instance from "@/utils/axios"
import { Stack, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import {   View } from "react-native"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import { createClient } from '@supabase/supabase-js';

const client = createClient(
    'https://snwjzonusggqqymhbluj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
);
const Thread = () => {
    const { id } = useLocalSearchParams();
    const [theard, setThreard] = useState<ThreadDataType>()

    // load thread 
    const getThreadForId = async () => {
        try {
            const data = await instance.get(`/getThreadById/${id}`)
            const test : ThreadDataType = ConvertDatatoThreadObject(data)
            setThreard(test)
        }catch (e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        getThreadForId()
    }, [])

    // tu dong check database thay doi 
    useEffect(() => {
        const channelA = client
        .channel('schema-db-changes')
        .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'chat'
        },
        () => console.log("o ben thread")
        )
        .subscribe()
        // console.log("after add thread")
        // Return a cleanup function to unsubscribe from the channel
        return () => {
            channelA.unsubscribe();
        }
    }, []);

    // submit cau tra loi hoac cau hoi 
    const onSubmit = async  (question : string) => {
        console.log(question)
        if(!question) return
        const data = await instance.post("/createComment", {
            id,
            content : question,
            name : "nam 23"
        })
        getThreadForId()
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
                onsubmit={onSubmit}
            />
            </GestureHandlerRootView>
        </View>
        

        </>
    )
}


export default Thread