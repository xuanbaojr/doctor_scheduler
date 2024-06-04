import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import instance from "../../utils/axios";
import { useState, useEffect } from "react";
import { Link } from "expo-router";

const DateComponent = () => {
    const doctorId = "1"
    const [disable, setDisable] = useState([])
    const today_day = new Date();
    const [selectedValue, setSelectedValue] = useState(today_day.toISOString().slice(0,10) + "T00:00:00.000Z");
    const [test, setTest] = useState([]); // Use state to hold the test array

    let listOfDay = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ 5", "Thứ 6", "Thứ 7"];
    let listOfDayShow = [];
    let listOfTomorrow = [];

    for (let i = 1; i < 8; i++) {
        let tomorrowDay = new Date(today_day.getFullYear(), today_day.getMonth(), today_day.getDate() + i);
        let day_temp = tomorrowDay.toISOString().slice(0,10) + "T00:00:00.000Z";


        
        // let day_temp_sub = day_temp.toISOString();
        listOfTomorrow.push(day_temp);
        const dayOfWeek = tomorrowDay.getDay();
        console.log("listOfTomorrow" + listOfTomorrow);
        listOfDayShow.push(listOfDay[dayOfWeek]);
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

    const createOrder = async() => {
        try {
            const response = await instance.post('/order',{
                customerId: "1",
                doctorId : doctorId,
                date_time : selectedValue
            })
        }
        catch (error) {
            console.error("Error fetching order time:", error);
        }
    }

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
      <Link href={`../scheduleDoctor/confirm`} asChild>
      <TouchableOpacity
                style={styles.box}
                onPress={() => createOrder()}>
                <Text>Xac nhan</Text>
            </TouchableOpacity>
        </Link>

      </ScrollView>

    )
  }

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

export default DateComponent;
