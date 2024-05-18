import { useState } from "react"
import { Pressable, Text, TouchableOpacity, View } from "react-native"
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import { TextInput } from "react-native-gesture-handler"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faL } from "@fortawesome/free-solid-svg-icons";
import { convertCreateAt } from "@/components/pageThread/ThreadDataType";
interface Props {

}

const DateAndGender = () => {

    const [date, setDate] = useState<Date>(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [datestr, setDatestr] = useState("")

    const ToggleShowPicker = (show ?: boolean) => {
        if ( show == false) {
            setShowPicker(false)
        } else {
            setShowPicker(!showPicker)
        }
        
    }

    const onChange = (type : DateTimePickerEvent, selectedDate ?: Date | null) => {
        if (type.type == "set") {
            const currentDate = selectedDate
            console.log(showPicker)
            if(currentDate == null || currentDate == undefined) {
                return 
            }
            setDate(currentDate)
            console.log(currentDate)
            setDatestr(convertCreateAt(currentDate))
            ToggleShowPicker(false)
            console.log(showPicker)
        } else {
            ToggleShowPicker()
        }
        
    }
    return (
        <>
        <View className="flex-row my-1.5 justify-around items-center bg-blue-300 p-2 ">
            <View>
                {
                    showPicker && 
                    <DateTimePicker 
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChange}
                />
                }
                
                <Pressable 
                    onPress={() => ToggleShowPicker(true)} 
                    className="p-2 bg-blue-900 flex-row justify-between items-center"
                >
                    <View className="flex-col"> 
                        <View>
                            <Text>Ngày sinh *</Text>
                        </View>
                        {datestr != "" && 
                        <View>
                            <Text>{datestr}</Text>
                                
                        </View>
                        }
                    </View>
                    <View className="rotate-90">
                        < FontAwesomeIcon icon={faChevronRight} size={19} color="grey"  />
                    </View>
                
                </Pressable>
                
            </View>

        </View>
        
        </>
    )
}

export default DateAndGender