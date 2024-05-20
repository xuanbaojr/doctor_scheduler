import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-rapi-ui';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase_url = "https://snwjzonusggqqymhbluj.supabase.co"
const supabase_anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0"
const supabase = createClient(supabase_url, supabase_anon)
const TestComponent = () => {

    // thay ip cua may minh
    const url = "http://192.168.1.80:8000"
    const [humanChat, setHumanChat] = useState('');
    const [questionList, setQuestionList] = useState([])
    const [answerList, setAnswerList] = useState([])

    // hien thi lich su chat (1)
    const getHistoryChat = async () => {
        try {
            const {data, error} = await supabase.from("Chat_chat").select()
            const content = data.map(item => item.content)
            const question = content.map(item => item.question)
            const z_answer = content.map(item => item.z_answer)
            setQuestionList(question)
            setAnswerList(z_answer)
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getHistoryChat()
    },[])

    // gui tin nhan, update database (2)
    const sendQuestion = async () => {
        try {
            const formData = new FormData();
            formData.append('chain_input', humanChat);
            formData.append('user_id', "user_2fB6XBxtyeK4Ds36D8SK0jM8LMs");
            const response = await fetch(`${url}/test/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            });
            
            setHumanChat("")
        } catch(error) {
            console.error(error);
        }
    };

    // Hien thi cau chat moi (4)

    // check database real-time  (3)
    useEffect(() => {
        const channelA = supabase
        .channel("schema-db-changes")
        .on(
            'postgres_changes',
            {
                event: "*",
                schema: 'public',
                table: 'Chat_chat'
            },
            () => getHistoryChat()
        )
        .subscribe()

        return () => {
            channelA.unsubscribe()
        }
    })
    
    return (
        <View>
            <TextInput 
                placeholder="Enter your text"
                value={humanChat}
                onChangeText={(val) => setHumanChat(val)}
            ></TextInput>
            
            <Button text="ok" onPress={() => sendQuestion()}></Button>
            <View>
                {questionList.map((content, index) => (
                    <View>
                    <Text style={styles.send}>{questionList[index]}</Text>
                    <Text style={styles.receive}>{answerList[index]}</Text>
                    </View>

                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    send:{
        backgroundColor:'orange',
    },
    receive:{
        backgroundColor:'powderblue'
    }
})
export default TestComponent;
