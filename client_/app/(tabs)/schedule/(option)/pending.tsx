import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, Image } from 'react-native'
import { Link, Stack, router } from 'expo-router'
import  react, { useEffect, useState } from 'react'
import instance from '@/utils/axios'
import { createClient } from '@supabase/supabase-js';
import { get } from 'http';
import { convertCreateAt } from '@/components/pageThread/ThreadDataType';
import ScheduleOrderButton from '@/components/schedule/SchduleOrderButton';
import CustomButton from '@/components/customButton';
import { MaterialTopTabs } from './_layout';
import Index from '../../setting';
import { useAuth } from '@clerk/clerk-expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// const customer_id = "8b57944c-1e70-4a2e-83ec-30532e698de3"
const client = createClient(
  'https://snwjzonusggqqymhbluj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
);

const SchedulePage = () => {
  const user = useAuth()
  const userId = user.userId
  const [customers, setCustomers] = react.useState([])
  const [orders, setOrders] = react.useState([])
  const [clinics, setClinics] = react.useState([])
  const [customerId, setCustomerId] = react.useState("")
  const [specialty, setSpecialty] = react.useState([])

  const [customerSelected, setCustomerSelected] = react.useState("")
  const [modalVisible, setModalVisible] = react.useState(false)
  const [danger, setDanger] = react.useState(false)

  // getNewestCustomerIdByOrder (1)
  const getNewestCustomerIdByOrder = async () => {
    try {
      const {data, error} = await client.from("Order").select("customer_id").order("id", {ascending: false}).limit(1)
      const customerId_ : any = data && data[0] ? data[0]['customer_id'] : null;
      setCustomerId(customerId_)
      setCustomerSelected(customerId_)
      if (error) {
        console.log("Error creating order:", error);
      }
    } catch (err) {
      console.log("Something went wrong !", err);
    }
  }
  // get customer by user  (2)
  const [customerByUser, setCustomerByUser] = react.useState([])
  const getCustomerByUser = async () => {
    try {
      const {data, error} = await client.from("Customer").select("*").eq("userId", userId)
      const customer_ : any = data
      setCustomerByUser(customer_)
    } catch (error) {
      console.log("Can not getCustomerByUser", error)
    }
  }

  // get all order by customer (3)
  const getAllOrdersByCustomerId = async (customer_id :any) => {
    try {
      const {data, error} = await client.from("Order").select("*, Clinic(*, Doctor(*), Specialty(*)), Customer (*)").eq("status", "Pending").eq("customer_id", customer_id);
      const clinics_ : any = data?.map(item => item.Clinic)
      const orders_ : any = data
      const customers_ : any = data?.map(item => item.Customer)
      const specialty_ : any = data?.map(item => item.Specialty)
      setSpecialty(specialty_)
      setClinics(clinics_)
      setOrders(orders_)
      setCustomers(customers_)
      setCustomerSelected(customer_id)
      setModalVisible(false)
      if (error) {
          console.log("Error creating order:", error);
      }
    } catch (err) {
      console.log("Something went wrong !", err);
    }
  }

  // updatePendingToCancel (4)
  const updatePendingToCancel = async (order_id : any) => {
    try {
      const {data, error} = await client.from("Order").update({status: "Cancelled"}).eq("id", order_id)
      if (error) {
        console.log("Error creating order:", error);
      }
    } catch (err) {
      console.log("Something went wrong !", err);
    }
  }
  useEffect(() => { getCustomerByUser()}, [])
  useEffect(() => { getNewestCustomerIdByOrder() },[])
  useEffect(() => { getAllOrdersByCustomerId(customerId) },[customerId])
  useEffect(() => {
    const channelA = client
    .channel('schema-db-changes')
    .on(
    'postgres_changes',
    {
        event: '*',
        schema: 'public',
        table: 'Order'
    },
    () => getAllOrdersByCustomerId(customerId)
    )
    .subscribe()

    // Return a cleanup function to unsubscribe from the channel
    return () => {
        channelA.unsubscribe();
    }
});

  const [orderSelected, setOrderSelected] = react.useState("")
  const openDangerModal = (order_id: any) => {
    setDanger(true)
    setOrderSelected(order_id)
  }

  return (
    <>
    <MaterialTopTabs.Screen options={{
          title : "Hẹn khám"
        }}/>
    <CustomButton title="Chọn khách hàng" onPress={() => setModalVisible(true)}/>
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
            <View style={styles.container}>
            {customerByUser.map((customer_, index) => (
                <View key={index}>

                        <TouchableOpacity onPress={() => getAllOrdersByCustomerId(customer_['id'])}>
                            <View style={styles.icon}>
                                {customer_['id'] === customerSelected ? (
                                    <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#66FF33" />
                                ) : (
                                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="black" />
                                )}

                                <View style={styles.infor}>
                                    <View style={styles.name_phone}>
                                        <Text style={styles.name}>
                                            {customer_['firstName']} {customer_['lastName']}
                                        </Text>
                                        <Text style={styles.phone}>     | 0393486450 </Text>
                                    </View>
                                    <Text>Địa chỉ: </Text>
                                    <Text>KTX Mỹ Đình - Đơn nguyên 1, Nam Từ Liêm, Hà Nội</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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
    </Modal>

    <Modal
      animationType="slide"
      transparent={true}
      visible={danger}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
            <View style={styles.danger_modal_}>
                <View style={styles.danger_modal_content}>
                  <Text>hehe</Text>
                </View>

                <View style={styles.danger_modal_button}>
                  <TouchableOpacity onPress={() => setDanger(false)}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => updatePendingToCancel(orderSelected)}>
                    <Text>OK</Text>
                  </TouchableOpacity>
                </View>
            </View>
    </Modal>



  <ScrollView>
    {orders && orders.map((order, index) => (
      <View style={styles.order_container}>
        <Link 
          key={order['id']}
          href={{  
            pathname: `/scheduleDoctor/bookConfirm`,
            params: {clinic_id: clinics[index]['id'], customer_id: customerSelected, date: order['date'], hour: order['hour'], order_id: order['id']}  
          }} asChild>
          <TouchableOpacity>
            <View>
              <View style={styles.date}>
                <Text style={{fontSize:14, fontWeight:"500", color:"#00FF00"}}>Pending</Text>
                <Text style={{marginHorizontal:10}}>{order['date']}</Text>
                <Text>{order['hour']}</Text>
                <View style={styles.icon_}>
                  <FontAwesome style = {{marginHorizontal:10}} name="pencil-square-o" size={18} color="#009966" />
                  <TouchableOpacity onPress={() => openDangerModal(order['id'])}>
                    <FontAwesome5 name="trash-alt" size={18} color="#009966" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.doctor}>

                <View style={styles.image}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={{ uri: 'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png' }}
                  />
                </View>
                <View style={styles.infor}>
                  <Text>Bác sĩ:          {clinics[index]['Doctor']['name']}</Text>
                  <Text style={{marginTop:10}}>{clinics[index]['Specialty']['name']}</Text>
                  <View style={styles.symptom}>
                    <Text>Triệu chứng: </Text>
                    <Text style={{color:'#FF6666'}}>{order['symptom']}</Text>
                  </View>
                  <View style={styles.separator} />
                  </View>
                
                </View>

                <View style={styles.price}>
                  <Text style={{ fontWeight:"500"}}>Thành tiền:    </Text>
                  <Text style={{color:"#FF0000", fontWeight:"500"}}>{clinics[index]['price']} VND</Text>
                </View>
            </View>

          </TouchableOpacity>
        </Link>
      </View>

    ))}
    </ScrollView>

    <Link href={{
      pathname: `/scheduleDoctor/bookCustomer`,
      params: {customer_id: customerSelected}}} asChild>
      <TouchableOpacity>
        <Text>Dat lich kham</Text>
      </TouchableOpacity>
    </Link>
    </>
  )
  }

const styles = StyleSheet.create({
  customerSelected:{
    backgroundColor: 'powderblue'
  },
  danger_modal_: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 200,

},
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
order_container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
date: {
    flexDirection: 'row',
    marginBottom: 10,
},
doctor: {
    flexDirection: 'row',
    marginBottom: 10,
},
image: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 10,
},
symptom:{
    flexDirection: 'row',
},
price:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
},
icon_ :{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft:120
},

danger_modal_content: {
    marginBottom: 10,
},
danger_modal_button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
},
})

export default SchedulePage