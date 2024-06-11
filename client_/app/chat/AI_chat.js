import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-rapi-ui';
import { createClient } from '@supabase/supabase-js'
import { useAuth } from '@clerk/clerk-expo';


// Create a single supabase client for interacting with your database
const supabase_url = "https://snwjzonusggqqymhbluj.supabase.co"
const supabase_anon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0"
const supabase = createClient(supabase_url, supabase_anon)
const TestComponent = () => {
    const user = useAuth()
    user_id = user.userId
    // thay ip cua may minh
    const url = "http://192.168.1.80:8000"
    const [humanChat, setHumanChat] = useState('');
    const [questionList, setQuestionList] = useState([])
    const [answerList, setAnswerList] = useState([])

    // hien thi lich su chat (1)
    const getHistoryChat = async () => {
        try {
            const {data, error} = await supabase.from("Chat_chat").select().eq("user_id", user_id)
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
            setQuestionList(prevList => [...prevList, humanChat])
            setHumanChat("")
            const response = await fetch(`${url}/test/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            });
            
        } catch(error) {
            console.error(error);
        }
    };

    // Hien thi cau chat moi (4)
    const getChatUpdate = async () => {
        try {
            const {data, error} = await supabase.from("Chat_chat").select().eq("user_id", user_id)
            const content = data.map(item => item.content)
            const z_answer = content.map(item => item.z_answer)
            setAnswerList(z_answer)
        } catch (error) {
            console.error("Error getChatUpdate", error)
        }
    }
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
            () => getChatUpdate()
        )
        .subscribe()

        return () => {
            channelA.unsubscribe()
        }
    })
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatContainer}>
                {questionList.map((content, index) => (
                    <View key={index}>

                    <View style={styles.responseRow}>
                        <View style={styles.responseBox}>
                            <Text style={styles.responseText}>{questionList[index]}</Text>
                        </View>
                    </View>
                    <View style={styles.messageBox}>
                        <Text>{answerList[index]}</Text>
                    </View>

                    </View>
                ))}
            </ScrollView>
            
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Type your message ...'
                    value={humanChat}
                    onChangeText={(val) => setHumanChat(val)}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={() => sendQuestion()}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    chatContainer: {
      flex: 1,
      backgroundColor: '#E5E7EB',
    },
    messageWrapper: {
      padding: 8,
    },
    messageRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      marginRight: 8,
    },
    username: {
      fontWeight: '500',
    },
    messageBox: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      marginBottom: 8,
      maxWidth: '75%',
    },
    responseRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    responseBox: {
      backgroundColor: '#3B82F6',
      borderRadius: 8,
      padding: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      marginRight: 8,
      maxWidth: '75%',
    },
    responseText: {
      color: '#FFFFFF',
    },
    inputContainer: {
      backgroundColor: '#F3F4F6',
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 25,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginRight: 8,
    },
    button: {
      backgroundColor: '#3B82F6',
      borderRadius: 25,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: '500',
    },
  });
    
export default TestComponent;
