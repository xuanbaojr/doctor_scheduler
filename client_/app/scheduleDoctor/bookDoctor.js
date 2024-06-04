import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from "react-native"
import { Link, useLocalSearchParams} from 'expo-router';
import  react, { useEffect, useState } from 'react'

import { createClient } from '@supabase/supabase-js';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const client = createClient(
  'https://snwjzonusggqqymhbluj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
);
const BoxDoctor = () => {
  const params = useLocalSearchParams() // customer_id
  const [specialty, setSpecialty] = useState([]) // [ {id, name}
  const [selectedSpecialty, setSelectedSpecialty] = useState(1) 
  const [doctors, setDoctors] = useState([]) // [ {id, name, specialty_id, userId, ...}
  const [modalVisible, setModalVisible] = useState({});

  const [clinics, setClinics] = useState([]) // [ {id, name, specialty_id, userId, ...}
  // getAllSpecialtyName
  const getAllSpecialtyName = async () => {
    try {
      const { data, error } = await client.from("Specialty").select("*")
      const specialty_ = data
      setSpecialty(specialty_)
    } catch (error) {
      console.log("cannot getAllSpecialtyName", error)
    }
  }
  getAllSpecialtyName()

  //getDoctorBySpecialty
  const getDoctorBySpecialty = async (specialty_id) => {
    try {
      const { data, error } = await client.from("Clinic").select("*, Doctor(*), Specialty(*)").eq("specialty_id", specialty_id)
      const doctor_ = data.map((clinic) => clinic.Doctor)
      const specialty_ = data.map((clinic) => clinic.Specialty)
      const clinic_ = data
      setClinics(clinic_)
      setSpecialty(specialty_)
      setDoctors(doctor_)
    } catch (error) {
      console.log("cannot getDoctorBySpecialty", error)
    }
  }
  useEffect(() => {
    getDoctorBySpecialty(selectedSpecialty)
  }, [selectedSpecialty])

  const handlePress = (specialty_id) => {
    setSelectedSpecialty(specialty_id)
    setModalVisible(false)
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Chọn chuyên khoa</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View>
        </View>
        <View style={styles.modal}>
          <View style = {styles.text}>
          <Text>Chọn chuyên khoa</Text>
          </View>
        {specialty.map((specialty_, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress(specialty_['id'])}>
              <View style={styles.icon}>
                <MaterialCommunityIcons style={{marginRight:10}} name="hospital" size={30} color="#66FF33" />
                <Text>{specialty_['name']}</Text>
                <AntDesign style={{
                  marginLeft : 200}}
                  name="rightcircleo" size={15} color="#66FF33" />

            </View>
            </TouchableOpacity>
            {index < specialty.length - 1 && (
              <View style={styles.separator} />
            )}
        </View>
      ))}
        </View>
      </Modal>

      {doctors && doctors.map((doctor, index) => (

          <Link href={{ pathname: `./bookTime`, params: { doctor_id: doctor['id'], customer_id: params.customer_id } }} asChild>

            <TouchableOpacity style={styles.doctor}>
              <View style={styles.image_info}>
                <View style={styles.headerImageContainer}>
                  <Image
                    style={styles.headerImage}
                    source={{ uri: 'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png' }}
                  />
                </View>     
                <View style={styles.info}>   
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>TS. {doctor['name']}</Text>
                  <Text style={{ fontSize: 14, fontWeight: '400', color: '#111827' }}>{clinics[index]['name']}</Text>
                  <Text style={{ fontSize: 15, fontWeight: '600', color: '#111827', marginTop:10 }}>{specialty[index]['name']}</Text>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#66FF33' }}>{clinics[index]['price']}</Text>
                </View>
                
            </View>

            </TouchableOpacity>
          </Link>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  modal:{
    flex: 1,
    marginTop: 100
  },
  text:{
    alignItems: 'center',
    marginBottom: 20
  },
  button : {
    alignItems: 'left',
    padding: 0,
    marginLeft: 20
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctor: {
    alignItems: 'flex-start',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#111',
    shadowOffset: { width: 3, height: 10 },
    shadowOpacity: 0.19,
    shadowRadius: 10,
    elevation: 5
  },
  headerImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  image_info: {
    flexDirection:'row',
    margin:10
  },
  info: {
    flexDirection: 'column',
    marginLeft:20
  }
})
export default BoxDoctor