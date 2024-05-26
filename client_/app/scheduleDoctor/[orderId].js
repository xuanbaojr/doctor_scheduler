import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import instance from "../../utils/axios";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";

const customer_id = "8b57944c-1e70-4a2e-83ec-30532e698de3"
const ConfirmComponent = () => {
    return(
        <ScrollView>
            <ClinicComponent></ClinicComponent>
            <CustomerComponent></CustomerComponent>
            <DoctorComponent></DoctorComponent>
            <DateComponent></DateComponent>
            <DangerComponent></DangerComponent>
            <ConfirmButton></ConfirmButton>
        </ScrollView>
    )
}

const CustomerComponent = () => {
    const [customer, setCustomer] = useState([])
    const getCustomerByCustomerId = async() => {
      const response = await instance.get(`/getCustomerByCustomerId/${customer_id}`)
      setCustomer(response[0])
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
                  <Text style={{fontSize:16, fontWeight:500, margin:0, marginTop:10, color:'#339966'}}>Thông tin bệnh nhân</Text>
                  <FontAwesome name="pencil-square-o" size={24} color="powderblue" style={{margin:10, marginRight:10}}/>
  
                </View>
                  <View style={{flexDirection:'column', paddingVertical:10, marginLeft:20}}>
  
                    <View style={{flexDirection:'row'}}>
                    <Text style={{ fontSize: 16, fontWeight:'600', color:'#111827'}}>{customer['firstName']}</Text>
                    </View>
  
                  <Text style={{fontSize:15, marginTop:5}}>0393 486 ***</Text>
  
                  </View>
  
                  {/* <Entypo name="chevron-small-right" size={24} color="black" style={{marginTop:60, marginLeft:60}} /> */}
              </View>
  
  
              </TouchableOpacity>
  
      </View>
    )
  }

const ClinicComponent = () => {
    const {clinic_id, orderId} = useLocalSearchParams();
    const [clinic, setClinic] = useState([])
    const [specialty, setSpecialty] = useState([])
    console.log("clinic_id: " + clinic_id)

    const getClinicByClinicId = async() => {
        try {
            const response = await instance.get(`/getClinicByClinicId/${clinic_id}`)
            data = response.map((item) => item)
            console.log("clinic: " + clinic['name'])

            setClinic(data[0])
            data_specialty = data.map((item) => item.Specialty)
            setSpecialty(data_specialty[0])
        }
        catch (error) {
            console.error("Error fetching clinic by clinic id:", error);
        }
    }
    useEffect(() => {
        getClinicByClinicId()
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
                  <Text style={{fontSize:16, fontWeight:500, margin:0, marginTop:10, color:'#339966'}}>Nơi khám</Text>
  
                </View>
                  <View style={{flexDirection:'column', paddingVertical:10, marginLeft:20}}>
  
                    <View style={{flexDirection:'column'}}>
                    <Text style={{ fontSize: 16, fontWeight:'600', color:'#111827'}}>Bệnh viện Đại học Y Hà Nội</Text>
                    <Text style={{ fontSize: 15, fontWeight:'600', color:'#111827', marginTop:3}}>{specialty['name']}</Text>
                  </View>
  
                  <Text style={{fontSize:14, marginTop:10}}>Địa điểm: {clinic['major']} 
                                                         - Khoa khám chữa bệnh theo yêu cầu - Số 1 Tôn Thất Tùng, Đống Đa, Hà Nội</Text>
  
                  </View>
  
                  {/* <Entypo name="chevron-small-right" size={24} color="black" style={{marginTop:60, marginLeft:60}} /> */}
              </View>
  
  
              </TouchableOpacity>
  
      </View>
    )
}

const DoctorComponent = () => {
    const {doctorId} = useLocalSearchParams();
    console.log("doctorId: " + doctorId)
    const [doctor, setDoctor] = useState([])
    const getDoctorById = async() => {
        try {
            const response = await instance.get(`/doctor/${doctorId}`)
            data = response.map((item) => item)
            setDoctor(data[0])
        }
        catch (error) {
            console.error("Error fetching doctor by doctor id:", error);
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
                      <Text style={{ fontSize: 16, fontWeight:'600', color:'#111827'}}>{doctor['name']}</Text>
                      </View>
    
                    <Text style={{fontSize:13, marginTop:5, color:"powderblue", fontWeight:900}}>400000đ</Text>
    
                    </View>
    
                    {/* <Entypo name="chevron-small-right" size={24} color="black" style={{marginTop:60, marginLeft:60}} /> */}
                </View>
    
    
                </TouchableOpacity>
    
        </View>
      )
}

const DateComponent = () => {
    const {date_be, time} = useLocalSearchParams();
    const date_fe = date_be.slice(0, 10)
    console.log("date_: " + date_fe)
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
                        <Text>{time}</Text>
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
                            <Text>{date_fe}</Text>
                            </View>

                    </TouchableOpacity>
    
                  </View>

    
                    {/* <Entypo name="chevron-small-right" size={24} color="black" style={{marginTop:60, marginLeft:60}} /> */}
                </View>
    
    
                </TouchableOpacity>
    
        </View>
      )
}

const ConfirmButton = ()  => {
  const {doctorId, date_be, time, customerId, clinic_id, isCreate} = useLocalSearchParams();
  const createOrder = async() => {
    try {
        const response = await instance.post('/order',{
            customerId: "1",
            doctorId : doctorId,
            date_time : date_be,
            hour_time: time,
            clinic_id: clinic_id
        })
    }
    catch (error) {
        console.error("Error fetching order time:", error);
    }
}
    return (
      <View>
      <Link href="/(tabs)/schedule" asChild>
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
        onPress={() => createOrder()}
        disabled={isCreate == "false"}
        >
        {isCreate == 'false' ? <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Cập nhật</Text> : <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Đặt lịch</Text>
        }
        </TouchableOpacity>
      </Link>
      </View>
    );
}

const DangerComponent = () => {
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

                </View>

    
    
                </TouchableOpacity>
    
        </View>
      )
}
export default ConfirmComponent