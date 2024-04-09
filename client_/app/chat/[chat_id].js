import React, { useEffect, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView} from 'react-native'
import instance from '../../utils/axios';
import { useLocalSearchParams } from 'expo-router';

const client = createClient(
  'https://snwjzonusggqqymhbluj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
);

const nurse_id = "1"

const ChatComponent = () => {
    const { chat_id } = useLocalSearchParams();
    console.log("customer_id: "  + chat_id)
    
    let member = [nurse_id, chat_id]

    const [text, setText] = useState('');
    const [newContent, setNewContent] = useState("")
    const [contentList, setContentList] = useState([]);
    const [checkUser, setCheckUser] = useState([])
    const [sent, setSent] = useState(true)

    // gui tin nhan (2) cho userID khac
    const sendMessage = async() => {
        try {
            const response = await instance.post('/chat',{
                sender: nurse_id,
                receiver: chat_id,
                content: text
            })
            setText("")

        }
        catch (error) {
            console.error("Error fetching order time:", error);
        }
    }

    // hien thi cau chat moi (4)
    const getChatUpdate = async () => {
        try {
            const data = await instance.get(`/getUpdateChat/${nurse_id}`)
            if(data && data.length > 0) {
                setContentList(prevList => [...prevList, data[data.length -1].content]);
                setCheckUser(prevList => [...prevList, data[data.length -1].sender]);  
        
            }

        } catch (error) {
            console.error("Error fetching chat:", error);
        }
    }
    // tu dong check database thay doi (3)
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
        () => getChatUpdate() 
        )
        .subscribe()

        // Return a cleanup function to unsubscribe from the channel
        return () => {
            channelA.unsubscribe();
        }
    }, []);

    // hien thi lich su chat (1)
    useEffect(() => {
        const getChatCustomer = async () => {
            try {
                const data = await instance.get(`/getChatByCustomer/${chat_id}`)
                console.log(data)
                if(data && data.length > 0){
                    const contents = data.map(item => item.content);
                    const check_user = data.map(item => item.sender)
                    // Cập nhật state newContent với nội dung của tin nhắn cuối cùng
                    setContentList(contents);
                    setCheckUser(check_user)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getChatCustomer()
    },[])

    return(
        <ScrollView>
            <TextInput
                value={text}
                onChangeText={setText}
                ></TextInput>

            <TouchableOpacity onPress={() => sendMessage()}>
                <Text>Click vo Bro</Text>
            </TouchableOpacity>

            <View style={{}}>
                {contentList.map((content, index) => (
                    <Text             
                        style={[checkUser[index] == nurse_id && styles.send,
                                checkUser[index] !=  nurse_id && styles.receive]}
                        key={index}>{content}</Text>
                ))}
            </View>
            {/* <View style={{backgroundColor:'orange'}}>
                <Text>{newContent}</Text>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    send:{
        flexDirection:"row",
        backgroundColor:"orange",
        marginLeft:80,
        marginRight:40,
        alignItems:'flex-end',
        textAlign:'right',
        marginVertical:10,
        padding:10
    },
    receive:{
        backgroundColor:'powderblue',
        margin:5,
        marginLeft:20,
        padding:10,
        marginRight:80,
    }
})

export default ChatComponent;
