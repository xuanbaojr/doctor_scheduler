import { Link } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { convertCreateAt } from "../pageThread/ThreadDataType"


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
        <TouchableOpacity className="flex-col p-2 mb-2 rounded-xl bg-bg-post">
            <View>
                <Text>{time} Ngayf {convertCreateAt(date_be)} </Text>
            </View>
            <View>
                <Text>Bac si {doctor}</Text>
            </View>
        </TouchableOpacity>
        </Link>
    )
}

export default ScheduleOrderButton