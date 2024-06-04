import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import instance from "../../utils/axios"
import { Link } from "expo-router";
import { createClient } from '@supabase/supabase-js';

const nurse_id = 1
const client = createClient(
    'https://snwjzonusggqqymhbluj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
  );

const ChatListComponent = () =>{
    const [customerId, setCustomerId] = useState([])
    const [customerName, setCustomerName] = useState([])

    const getCustomer = async () => {
        try {
            const response = await instance.get(`/getListCustomer/${nurse_id}`);
            if(response && response.length > 0) {
                const id = response.map(data => data[0].id);
                const name = response.map(data => data[0].firstName);

                setCustomerId(id);
                setCustomerName(name)
            }

        } catch (error) {
            console.error("Error fetching order time:", error);
        }
    };
    useEffect(() => {
        getCustomer()
    },[])

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
        () => getCustomer() 
        )
        .subscribe()

        // Return a cleanup function to unsubscribe from the channel
        return () => {
            channelA.unsubscribe();
        }
    }, []);
    
    return(
        <View>
            {customerName.map((value, index) => (
                <Link key={index} href={{
                                pathname: "./[chat_id]",
                                params: {chat_id : customerId[index]}}} asChild>
                    <TouchableOpacity>
                        <Text>{value}</Text>
                    </TouchableOpacity>
                </Link>
            ))}
        </View>
    )
}

export default ChatListComponent