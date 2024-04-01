import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import CalendarPicker from "react-native-calendar-picker"
import { withTheme } from "@rneui/themed";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import moment from "moment";
import { TabView, SceneMap } from 'react-native-tab-view';
import { FontAwesome } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BookClinic} from '../bookClinic.js'
import { useLocalSearchParams } from 'expo-router';
import instance from "../../../utils/axios.js";


const DoctorDetail = ({doctor}) => {


  return (
    <View>
      <View style={{ flex: 1, backgroundColor: '#f0f4f7', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width:400, margin: 5, backgroundColor: 'white', borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, padding: 20 }}>

          <Image source={require('./doctor.jpg')} style={{ width: 64, height: 64, borderRadius: 32, alignSelf: 'center' }} />

          {/* Check if doctor is null or not before rendering */}
          {doctor !== null ? (
            <View>
              {/* Render doctor details */}
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', marginTop: 10, color:'#33CC33' }}>{doctor['name']}</Text>
              {/* <View style={{flexDirection:'row', marginTop:10}}>
              <Text style={{ textAlign: 'center', fontSize: 15, color: '#666', marginTop: 5 }}>{doctor.clinics[0].Specialty['name']}</Text>
                </View>
                <Text style={{ textAlign: 'left', fontSize: 15, color: '#666', marginTop: 5 }}>{doctor.clinics[1].Specialty['name']}</Text> */}

            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </View>
  );
};




const Services = ({propOfService}) => {
   const [modalVisible, setModalVisiable] = useState('false')

    // const today = moment(); 
    // console.log(today)
    const today_day = new Date()
    console.log(today_day)
    const [selectedValue, setSelectedValue] = useState(today_day)


    const disable_bi = [1,0,1]
  
    let listOfDay = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ 5", "Thứ 6", "Thứ 7"]
    let listOfDayShow = []

    
    let listOfDate = []
    for (let i = 0; i < 7; i++){
      // let nextDay = today.clone().add(i,"days").format('DD-MM') // Sử dụng clone để tạo bản sao của đối tượng today
      // listOfDate.push(nextDay)

      let tomorrowDay = new Date(today_day.getFullYear(), today_day.getMonth(), today_day.getDate() + i)
      const dayOfWeek = tomorrowDay.getDay()
      // console.log(dayOfWeek)
      listOfDayShow.push(listOfDay[dayOfWeek])
    }

    // create order function
    const createOrder = async() => {
      try {
        const doctors = await instance.post(`/order`,{
          customerId:"1",
          doctorId: "1",
          data_time: selectedValue
        })
        console.log("line 87" + selectedValue)
        setModalVisiable(!modalVisible)
      }catch (e) {
          console.log(e)
      }
    }
    return(
        <View style={{margin:10, backgroundColor:'f0f4f7', alignItems:'left', justifyContent:'center', }}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        backdropColor="#000000"
      >


      <TouchableOpacity 
        onPress={() => setModalVisiable(!modalVisible)}
        style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }} />
      <DateComponent></DateComponent>


      </Modal>
            <TouchableOpacity
                onPress={() => setModalVisiable(true)}
                style={{ 
                    width:390,
                    alignItems:'flex-start',
                    margin:0, 
                    backgroundColor:'white', 
                    borderRadius:10, shadowColor: '#111', 
                    shadowOffset:{width:3, height:10}, 
                    shadowOpacity:0.19, 
                    shadowRadius:10, 
                    elevation:5}}

            >  

                <View style={{flexDirection:'row'}}>
                    <MaterialIcons name="post-add" size={30} color="powderblue" style={{alignItems:'flex-start', margin:10, marginRight: 30,}} />

                    <View style={{flexDirection:'column', paddingVertical:20}}>
                    <Text style={{fontSize: 16, fontWeight:'600', color:'#111827'}}>Khám Nội</Text>
                    <Text style={{fontSize:15, marginTop:5}}>{propOfService['name']}</Text>
                    <Text style={{fontSize:15, marginTop:5, fontWeight:'300'}}>{propOfService['Specialty']['name']}</Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <MaterialIcons name="attach-money" size={15} color="black" />
                            <Text style={{ fontSize: 13, fontWeight:'800', color: '#6B7280' }}>2000000đ</Text>
                        </View>
                    </View>

                    {/* <Entypo name="chevron-small-right" size={24} color="black" style={{marginTop:60, marginLeft:60}} /> */}
                </View>


            </TouchableOpacity>
        </View>
    )
}


const DateAndTime = () => {

  const [doctor, setDoctor] = useState([]); // Initialize as null instead of []
  const { id } = useLocalSearchParams();
  const getDoctorById = async (id) => {
    try {
      const response = await instance.get(`/doctor/${id}`);
      console.log("ok")
      setDoctor(response);
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  };
  
  useEffect(() => {
    getDoctorById(id);
  }, [id]);


  const [clinic, setClinic] = useState([]); // Initialize as null instead of []
  const getClinicByDoctor = async (id) => {
    try {
      const response = await instance.get(`/clinic/${id}`);
      console.log("ok")
      setClinic(response);
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  };
  
  useEffect(() => {
    getClinicByDoctor(id);
  }, [id]);




  var numDoctor = doctor.length
  var listOfDoctor = []
  for (let i = 0; i < numDoctor; i++){
      listOfDoctor.push(
          <View key={i} >
              <DoctorDetail doctor = {doctor[i]}></DoctorDetail>
          </View>
      )

  var listOfService = []
  for (let i = 0; i < clinic.length; i++){
    listOfService.push(
      <View key={i}>
        <Services propOfService = {clinic[i]}></Services>
      </View>
    )
  }


  }

  return(

    <ScrollView style={{flexDirection:'column', width:'100%'}}>
        {listOfDoctor}
        {listOfService}
    </ScrollView>

    )
  
}

const HourComponent = ({disable, date, doctorId}) => {

  const [selectedValue, setSelectedValue] = useState('')

  // const disable = [true, false, true]
  const handleOnPress = (value) => {
    console.log(value)
    setSelectedValue(value)
  }
  const amHour = ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00"]
  const pmHour = ["14:00", "14:30", "15:00", "15:30", "16:00","16:30", "17:00"]

  const createOrder = async() => {
    try {
        const response = await instance.post('/order',{
            customerId: "1",
            doctorId : doctorId,
            date_time : date,
            hour_time: selectedValue
        })
    }
    catch (error) {
        console.error("Error fetching order time:", error);
    }
}


  return(
    <ScrollView style={{flexDirection: 'column', height:300}}>
      <Text style ={{margin:10}}>Buổi sáng</Text>
    <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:20}}>
      {amHour.map((value, index) => (
          <TouchableOpacity
          disabled={disable.includes(value)}
          onPress={()=> handleOnPress(value)}
          style={[{
            borderWidth:1,
            backgroundColor:'white',
            borderRadius:10,
            shadowColor:'#111',
            shadowOpacity:0.01,
            shadowRadius:5,
            shadowOffset:{width:3, height:10},
            padding:5,
            margin:7,
            width:60,
            height:50,
            alignItems:'center',
            justifyContent:'center'
            
          }, selectedValue === value && {backgroundColor:'powderblue'},
          disable.includes(value) && styles.check_hour]}
          
          key={value}
          
          >
          <Text>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <Text style ={{margin:10}}>Buổi chiều</Text>
    <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:20}}>
      {pmHour.map((value, index) => (
          <TouchableOpacity
          disabled={disable.includes(value)}
          onPress={()=> handleOnPress(value)}
          style={[{
            borderWidth:1,
            backgroundColor:'white',
            borderRadius:10,
            shadowColor:'#111',
            shadowOpacity:0.01,
            shadowRadius:5,
            shadowOffset:{width:3, height:10},
            padding:5,
            margin:7,
            width:60,
            height:50,
            alignItems:'center',
            justifyContent:'center'
            
          }, selectedValue === value && {backgroundColor:'powderblue'},
              disable.includes(value) && styles.check_hour]}
          
          key={value}
          
          >
          <Text>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <Link href={`../confirm`} asChild>
      <TouchableOpacity
                style={styles.box}
                onPress={() => createOrder()}>
                <Text>Xac nhan</Text>
            </TouchableOpacity>
        </Link>
    </ScrollView>

  )
}


const DateComponent = () => {
  const { id } = useLocalSearchParams();
  const doctorId = id
  console.log("id" + doctorId)

  const [disable, setDisable] = useState([])
  const today_day = new Date();
  const [selectedValue, setSelectedValue] = useState(today_day.toISOString().slice(0,10) + "T00:00:00.000Z");
  const [test, setTest] = useState([]); // Use state to hold the test array

  let listOfDay = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ 5", "Thứ 6", "Thứ 7"];
  let listOfDayShow = [];
  let listOfTomorrow = [];

  for (let i = 1; i < 8; i++) {
      let tomorrowDay = new Date(today_day.getFullYear(), today_day.getMonth(), today_day.getDate() + i);
      let day_temp = tomorrowDay.toISOString().slice(0,10)
      let day_temp_full = day_temp  + "T00:00:00.000Z";

      
      // let day_temp_sub = day_temp.toISOString();
      listOfTomorrow.push(day_temp_full);
      const dayOfWeek = tomorrowDay.getDay();
      console.log("listOfTomorrow" + listOfTomorrow);
      listOfDayShow.push(day_temp);
  }

  useEffect(() => {
      // Define a function inside useEffect to perform the API call
      const getAllTime = async () => {
          try {
              const response = await instance.get(`/ordertime`);
              setTest(response); // Update the test state with the response data
          } catch (error) {
              console.error("Error fetching order time:", error);
          }
      };

      getAllTime(); // Call the function to fetch order time
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  useEffect(() => {
    // Define a function inside useEffect to perform the API call
    const getHourByDate = async () => {
        try {
            const response = await instance.get(`/hourbydate/${doctorId}/${selectedValue}`);
            setDisable(response); // Update the test state with the response data
        } catch (error) {
            console.error("Error fetching order time:", error);
        }
    };

    getHourByDate(); // Call the function to fetch order time
}, [selectedValue]); // Empty dependency array to ensure the effect runs only once on component mount


  console.log("test_line53" + test); // Log the test array after it's updated
  console.log("disable" + disable)

  return (
      <View>
          {listOfTomorrow.map((value, index) => (
              <TouchableOpacity
                  key={value}
                  // disabled={test.includes(value)}
                  onPress={() => setSelectedValue(value)}>
                  <Text 
                      style={[selectedValue === value && styles.select,
                              test.includes(value) && styles.check]}>
                          {listOfDayShow[index]}</Text>
              </TouchableOpacity>
          ))}

          <Text>{test[1]}</Text>


          <HourComponent disable={disable} date = {selectedValue} doctorId={doctorId}></HourComponent>
      </View>
  );
};


const styles = StyleSheet.create({
  box: {
      backgroundColor: 'powderblue'
  },
  select: {
      backgroundColor: "orange"
  },
  check:{

  },
  check_hour:{
    backgroundColor:"black"
  }
});


export default DateAndTime