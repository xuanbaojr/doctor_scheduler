import { Link } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { convertCreateAt } from "../pageThread/ThreadDataType"
const avatar = require("../../assets/avatar3.png");
import { AntDesign } from '@expo/vector-icons';

interface Props {
    date_be : Date,
    time : string,
    doctor : string,
    clinic : string,
    doctorId : string,
    orderId : string,
    isCreate : string,
}


const ScheduleOrderButton = ({
    date_be,
    time,
    doctor,
    clinic,
    doctorId,
    orderId,
    isCreate,
} : Props) => {

    return (
        <Link
            href={{
              pathname: "../scheduleDoctor/[orderId]",
              params: {
                clinic_id: clinic,
                doctorId: doctorId,
                time: time,
                date_be: date_be.toString(),
                orderId: orderId,
                isCreate: isCreate // Convert boolean to string
              }
            }}
            asChild
          >
        <TouchableOpacity 
        style={{
            // flexDirection: "row",
            // padding: 5,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            shadowColor: "#000000",
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
            // flex: 1,
            alignItems: "center",
            }}
        className="w-full p-1 my-1 flex-row items-center"
        >
            <View className="w-16 h-16 rounded-full bg-avatar-1 flex items-center justify-center">
                <AntDesign name="calendar" size={45} color="#787878" />
            </View>
            <View className="flex-1 flex-col gap-1">
                <View className="">
                    <Text className="  text-slate-500 text-xs">{time} ngày {convertCreateAt(date_be)} </Text>
                </View>
                <View >
                    <Text className="text-base ">Bac si {doctor}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
        </Link>
    )
}

export default ScheduleOrderButton