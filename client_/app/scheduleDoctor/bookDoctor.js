import React, { useState, useEffect } from "react";
import { Pressable, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import instance from "../../utils/axios";



const BoxDoctor = ({propOfDoctor})  => {
    const handleOnPress = () => {
        console.log(propOfDoctor['id'])
    }
    return(
        <View style={{ flexDirection: 'row', marginBottom: 2, borderWidth: 1, borderColor: '#E5E7EB' }}>
        <Link href={{
                    pathname: "scheduleDoctor/dateAndTime/[id]",
                    params: { id: propOfDoctor['id'] }
                    }} asChild>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    padding: 16,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 8,
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 5,
                    flex: 1,
                    alignItems: 'center',
                }}
                >
      <Image
        source={require('./doctor.jpg')}
        style={{ width: 60, height: 60, borderRadius: 20, marginRight: 8 }}
      />
      <View style={{ flex: 1, marginRight: 16 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#111827', marginLeft:10, marginBottom:2 }}>{propOfDoctor.Doctor.name}</Text>
        <Text style={{ fontSize: 12, color: '#6B7280', marginLeft:10, marginBottom:10 }}>{propOfDoctor.Specialty.name}</Text>
        <View style={{flexDirection:'row' , marginLeft:10}}>
            <MaterialIcons name="attach-money" size={15} color="black" />
            <Text style={{ fontSize: 13, fontWeight:'800', color: '#6B7280' }}>{propOfDoctor['price']}</Text>
        </View>

      </View>
      
      <Entypo name="chevron-small-right" size={24} color="black" />
    </TouchableOpacity>
    </Link>

    </View>
    )

}

// using for-loop listDoctor
const ListDoctor = () => {
    const [propOfDoctor, setPropOfDoctor] = useState("")
    const [specialtyId, setSpecialtyId] = useState("1")
    const getAllDoctor_fn = async () => {
        try {
            const doctors = await instance.get(`/doctors_by_specialty/${specialtyId}`)
            setPropOfDoctor(doctors)
            console.log(doctors)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllDoctor_fn()
    }, [specialtyId])




    // tai sao lai phai dung useEffect
    // co cach nao ko can dung try - catch

    console.log(propOfDoctor)
    var numDoctor = propOfDoctor.length
    var listOfDoctor = []
    for (let i = 0; i < numDoctor; i++){
        listOfDoctor.push(
            <View key={i} style={styles.list}>
                <BoxDoctor propOfDoctor = {propOfDoctor[i]}></BoxDoctor>
            </View>
        )
    }

    return(

    <View style={{flexDirection:'column', width:'100%'}}>
        {listOfDoctor}
    </View>
    )
}

// Export default BookDoctor
const BookDoctor = () => {
    return(
        <View>
            <ListDoctor></ListDoctor>
        </View>

    )
}

export default BookDoctor

const styles = StyleSheet.create({
    box :{
        backgroundColor:'orange'
    },

    list :{
        flexDirection: 'column',
        width:'100%',
        padding:8
    }
})
