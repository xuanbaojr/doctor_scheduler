import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import instance from "../../utils/axios";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { useAuth } from '@clerk/clerk-expo';


const client = createClient(
    'https://snwjzonusggqqymhbluj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
  );  

const BookConfirm = () => {
    const params = useLocalSearchParams()   // clinic_id, customer_id, date, hour
    const user = useAuth()
    const user_id = user.userId

    return(
        <ScrollView>
            <ClinicComponent params={params}></ClinicComponent>
            <CustomerComponent params={params}></CustomerComponent>
            <DoctorComponent params={params}></DoctorComponent>
            <DateComponent params={params}></DateComponent>
            {/* <DangerComponent params={params}></DangerComponent> */}
            <ConfirmButton params={params} user_id={user_id}></ConfirmButton>
        </ScrollView>
    )
}

// ClinicComponent

const ClinicComponent = ({ params }) => {
    const [clinic, setClinic] = useState([]);

    // getClinicByClinicId
    const getClinicByClinicId = async () => {
        try {
            const { data, error } = await client.from("Clinic").select("*, Specialty(*)").eq("id", params.clinic_id);
            if (error) {
                console.log("Error getting clinic by clinic_id:", error);
            } else {
                const clinic_ = data
                setClinic(clinic_);
                console.log("Clinic by clinic_id:", clinic);
            }
        } catch (error) {
            console.log("cannot getClinicByClinicId", error);
        }
    }

    useEffect(() => {
        getClinicByClinicId();
    }, []); // Added params.clinic_id to the dependency array

    return (
        <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
                onPress={() => handleOnPress()}
                style={{
                    alignItems: 'flex-start',
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    shadowColor: '#111',
                    shadowOffset: { width: 3, height: 10 },
                    shadowOpacity: 0.19,
                    shadowRadius: 10,
                    elevation: 5
                }}
            >
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <View style={{ flexDirection: "row", marginLeft: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', margin: 0, marginTop: 10, color: '#339966' }}>Nơi khám</Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingVertical: 10, marginLeft: 20 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>Bệnh viện Đại học Y Hà Nội</Text>
                        {clinic.length > 0 && (
                            <Text style={{ fontSize: 15, fontWeight: '600', color: '#111827', marginTop: 3 }}> {clinic[0].Specialty.name}</Text>
                        )}
                        </View>
                        { clinic.length > 0 && (
                            <Text style={{ fontSize: 14, marginTop: 10 }}>Địa điểm: {clinic[0].major} - {clinic[0].name} - Số 1 Tôn Thất Tùng, Đống Đa, Hà Nội</Text>
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
// CustomerComponent
const CustomerComponent = ({params}) => {
    const [customer, setCustomer] = useState([])
    // getCustomerByCustomerId
    const getCustomerByCustomerId = async () => {
      try {
          const {data, error} = await client.from("Customer").select("*").eq("id", params.customer_id)
          if (error) {
              console.log("Error getting customer by customer_id:", error);
          }
          const customer_ = data
          setCustomer(customer_)
          console.log("Customer by customer_id:", customer_)
      } catch (error) {
          console.log("cannot getCustomerByCustomerId", error)
      }
    }
    useEffect(() => {
      getCustomerByCustomerId()
    }, [])

    return(
      <View style={{flexDirection:"column"}}>
        
        <TouchableOpacity
              onPress={() => handleOnPress()}
              style={{ 
                  alignItems:'flex-start',
                  margin:10, 
                  backgroundColor:'white', 
                  borderRadius:10, shadowColor: '#111', 
                  shadowOffset:{width:3, height:10}, 
                  shadowOpacity:0.19, 
                  shadowRadius:10, 
                  elevation:5}}
  
          >  
              <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                <View style={{flexDirection:"row", marginLeft:20}}>
                  <Text style={{fontSize:16, fontWeight:500, margin:0, marginTop:10, color:'#339966'}}>Thông tin bệnh nhân</Text>
                  <FontAwesome name="pencil-square-o" size={24} color="powderblue" style={{margin:10, marginRight:10}}/>
  
                </View>
                  <View style={{flexDirection:'column', paddingVertical:10, marginLeft:20}}>
  
                    <View style={{flexDirection:'row'}}>
                    {customer.length > 0 && (
                        <Text style={{ fontSize: 16, fontWeight:'600', color:'#111827'}}>{customer[0]['firstName']} {customer[0]['lastName']}</Text>
                    )}
                    </View>
  
                  <Text style={{fontSize:15, marginTop:5}}>0393 486 ***</Text>
  
                  </View>
  
              </View>
  
  
              </TouchableOpacity>
  
      </View>
    )
  }
// DoctorComponent
const DoctorComponent = ({params}) => {
    const [doctor, setDoctor] = useState([])
    // getDoctorByDoctorId
    const getDoctorById = async () => {
      try {
          const {data, error} = await client.from("Clinic").select("*, Doctor(*)").eq("id", params.clinic_id)
          if (error) {
              console.log("Error getting doctor by doctor_id:", error);
          }
          const doctor_ = data.map(item => item.Doctor)
          setDoctor(doctor_)
          console.log("Doctor by doctor_id:", doctor_)
      } catch (error) {
          console.log("cannot getDoctorByDoctorId", error)
      }
    }
    useEffect(() => {
        getDoctorById()
    }, [])
    return(
        <View style={{flexDirection:"column"}}>
          
          <TouchableOpacity
                onPress={() => handleOnPress()}
                style={{ 
                    alignItems:'flex-start',
                    // width:380,
                    margin:10, 
                    backgroundColor:'white', 
                    borderRadius:10, shadowColor: '#111', 
                    shadowOffset:{width:3, height:10}, 
                    shadowOpacity:0.19, 
                    shadowRadius:10, 
                    elevation:5}}
    
            >  
                <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                  <View style={{flexDirection:"row", marginLeft:20}}>
                    <Text style={{fontSize:16, fontWeight:500, margin:0, marginTop:10, color:'#339966'}}>Thông tin bác sĩ</Text>
    
                  </View>
                    <View style={{flexDirection:'column', paddingVertical:10, marginLeft:20}}>
    
                      <View style={{flexDirection:'row'}}>
                        {doctor.length > 0 && (
                        <Text style={{ fontSize: 16, fontWeight:'600', color:'#111827'}}>{doctor[0]['name']}</Text>

                        )
                        }
                      </View>
    
                    <Text style={{fontSize:13, marginTop:5, color:"powderblue", fontWeight:900}}>400000đ</Text>
    
                    </View>
    
                    {/* <Entypo name="chevron-small-right" size={24} color="black" style={{marginTop:60, marginLeft:60}} /> */}
                </View>
    
    
                </TouchableOpacity>
    
        </View>
      )
}
// DateComponent
const DateComponent = ({params}) => {
    return(
        <View style={{flexDirection:"column"}}>
          
          <TouchableOpacity
                onPress={() => handleOnPress()}
                style={{ 
                    alignItems:'flex-start',
                    // width:380,
                    margin:10, 
                    backgroundColor:'white', 
                    borderRadius:10, shadowColor: '#111', 
                    shadowOffset:{width:3, height:10}, 
                    shadowOpacity:0.19, 
                    shadowRadius:10, 
                    elevation:5}}
    
            >  
                <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                  <View style={{flexDirection:"row", marginLeft:20}}>
                    <Text style={{fontSize:16, fontWeight:500, margin:0, marginTop:10, color:'#339966'}}>Giờ hẹn</Text>
                    <FontAwesome name="pencil-square-o" size={24} color="powderblue" style={{margin:10, marginRight:10}}/>
                    <TouchableOpacity style={{
                        backgroundColor:'powderblue', 
                        alignItems:'center', 
                        justifyContent:'center',
                        height:30,
                        marginTop:5,
                        marginLeft:10,
                        padding:4,
                        borderRadius:10}}>
                            <View style={{flexDirection:'row'}}>
                            <MaterialIcons name="access-time" size={15} color="black" style={{marginTop:2, marginHorizontal:3}} />
                        <Text>{params.hour}</Text>
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor:'powderblue', 
                        alignItems:'center', 
                        justifyContent:'center',
                        height:30,
                        marginTop:5,
                        marginLeft:10,
                        padding:4,
                        borderRadius:10}}>
                            <View style={{flexDirection:'row'}}>
                            <Fontisto name="date" size={15} color="black" style={{marginHorizontal:5}} />        
                            <Text>{params.date}</Text>
                            </View>

                    </TouchableOpacity>
    
                  </View>

    
                    {/* <Entypo name="chevron-small-right" size={24} color="black" style={{marginTop:60, marginLeft:60}} /> */}
                </View>
    
    
                </TouchableOpacity>
    
        </View>
      )
}
// DangerComponent
const DangerComponent = ({params}) => {
    const [symptom, setSymptom] = useState([])
    // getSymptomByOrderId
    const getSymptomByOrderId = async () => {
      try {
          const {data, error} = await client.from("Order").select("*").eq("id", params.order_id)
          if (error) {
              console.log("Error getting symptom by order_id:", error);
          }
          const symptom_ = data
          setSymptom(symptom_)
          console.log("Symptom by order_id:", symptom_)
      } catch (error) {
          console.log("cannot getSymptomByOrderId", error)
      }
    }
    useEffect(() => {
        getSymptomByOrderId()
    }, [])
    return(
        <View style={{flexDirection:"column"}}>
          
          <TouchableOpacity
                onPress={() => handleOnPress()}
                style={{ 
                    alignItems:'flex-start',
                    // width:380,
                    margin:10, 
                    backgroundColor:'white', 
                    borderRadius:10, shadowColor: '#111', 
                    shadowOffset:{width:3, height:10}, 
                    shadowOpacity:0.19, 
                    shadowRadius:10, 
                    elevation:5}}
    
            >  
                <View>
                <Text style={{fontSize:15, marginTop:5, color:'red', margin:10}}>Ghi chú (triệu chứng, dị ứng thuốc) *: ....</Text>
                {symptom.length > 0 && (
                    <Text style={{fontSize:15, marginTop:5, color:'red', margin:10}}>{symptom[0]['symptom']}</Text>
                )}

                </View>
    
                </TouchableOpacity>
    
        </View>
      )
}
// ConfirmComponent
const ConfirmButton = ({params, user_id})  => {
    const createOrder = async () => {
        try {
            const { data, error } = await client.from("Order").insert({
                clinic_id: params.clinic_id,
                customer_id: params.customer_id,
                date: params.date,
                hour: params.hour,
                user_id: user_id
            });
    
            if (error) {
                console.log("Error creating order:", error);
            } else {
                console.log("Order created successfully:", data);
            }
        } catch (error) {
            console.log("Cannot create order:", error);
        }
    };
      return (
        <View>
        <Link href="../schedule/pending" asChild>
          <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 100,
            backgroundColor: '#33CC99',
            margin: 40,
            height: 50,
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => createOrder()}>
             <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Đặt lịch</Text>
          </TouchableOpacity>
        </Link>
        </View>
      );
  }
export default BookConfirm