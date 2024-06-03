import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import  react, { useEffect, useState } from 'react'
import { useLocalSearchParams, Link} from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { createClient } from '@supabase/supabase-js';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const client = createClient(
    'https://snwjzonusggqqymhbluj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
  );  

const BookCustomer = () => {
    user = useAuth()
    user_id = user.userId
    const params = useLocalSearchParams()   // customer_id
    const [customers, setCustomers] = react.useState([])
    const [customerSelected, setCustomerSelected] = react.useState(params.customer_id)
    // getCustomerByUserId
    const getCustomerByUserId = async () => {
        try {
            const {data, error} = await client.from("Customer").select("*").eq("userId", user_id)
            const customer_ = data
            setCustomers(customer_)
        } catch (error) {
            console.log("cannot getCustomerByUserId", error)
        }
    }
    useEffect(() => {
        getCustomerByUserId()
    },[])
    return (
        <ScrollView>
            <Text style={styles.select}>Chọn thành viên</Text>
            <View style={styles.container}>
            {customers.map((customer, index) => (
                <View key={index}>
                    <Link
                        href={{
                            pathname: `./bookDoctor`,
                            params: { customer_id: customer['id'] },
                        }}
                        asChild
                    >
                        <TouchableOpacity onPress={() => setCustomerSelected(customer['id'])}>
                            <View style={styles.icon}>
                                {customer['id'] === customerSelected ? (
                                    <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#66FF33" />
                                ) : (
                                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="black" />
                                )}

                                <View style={styles.infor}>
                                    <View style={styles.name_phone}>
                                        <Text style={styles.name}>
                                            {customer['firstName']} {customer['lastName']}
                                        </Text>
                                        <Text style={styles.phone}>     | 0393486450 </Text>
                                    </View>
                                    <Text>Địa chỉ: </Text>
                                    <Text>KTX Mỹ Đình - Đơn nguyên 1, Nam Từ Liêm, Hà Nội</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Link>
                    {index < customers.length - 1 && (
                        <View style={styles.separator} />
                    )}
                </View>
            ))}
            <Link href={{ pathname: './addCustomer' }} asChild>
                    <TouchableOpacity style={styles.add_member}>
                        <MaterialCommunityIcons name="account-plus" size={20} color="white" />
                        <Text>Thêm thành viên</Text>
                    </TouchableOpacity>

            </Link>
            </View>

        </ScrollView>
    )
}

export default BookCustomer

const styles = StyleSheet.create({
    default: {
        backgroundColor: "skyblue"
    },
    container:{
        backgroundColor: "white",
    },
    select: {
        margin:10
    },
    name_phone: {
        flexDirection: "row",
        marginBottom: 5
    },
    icon :{
        flexDirection: "row",
        padding:10
    },
    infor :{
        marginLeft: 10
    },
    name :{
        fontSize: 16, 
        fontWeight: '600', 
        color: '#111827' 
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 10,
    },
    phone:{
        marginLeft:10
    },
    add_member: {
        paddingHorizontal:150,
        paddingVertical: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
    },
})