import { useMemo, useState } from "react"
import { Pressable, Text, TouchableOpacity, View } from "react-native"
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import { TextInput } from "react-native-gesture-handler"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faL } from "@fortawesome/free-solid-svg-icons";
import { convertCreateAt } from "@/components/pageThread/ThreadDataType";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
interface Props {
    age : string | undefined,
    setAge : (age : string,) => void,
    gender : string | undefined,
    setGender: (gender : string) => void,
}


const DateAndGender = ({age, setAge, gender, setGender}: Props) => {

    const [date, setDate] = useState<Date>(new Date())
    const [showPicker, setShowPicker] = useState(false)
    // const [datestr, setDatestr] = useState("")
    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: 'man', // acts as primary key, should be unique and non-empty string
            label: 'Nam',
            value: 'man'
        },
        {
            id: 'woman',
            label: 'Nữ',
            value: 'woman'
        }
    ]), []);

    

    const ToggleShowPicker = (show : boolean) => {
        setShowPicker(show)
        
    }

    const onChange = (type : DateTimePickerEvent, selectedDate ?: Date | null) => {
        if (type.type == "set") {
            const currentDate = selectedDate
            if(currentDate == null || currentDate == undefined) {
                return 
            }
            setDate(currentDate)
            setAge(convertCreateAt(currentDate))
            ToggleShowPicker(false)
        } else {
            ToggleShowPicker(false)
        }
        
    }
    return (
        <>
        <View className="flex-row my-1.5 justify-around items-center bg-backgroundateandgender p-2 ">
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
                    className="px-2 py-3 flex-1 border-border-1 border-2 flex-row justify-between items-center rounded-lg"
                >
                    <View className="flex-col mr-4"> 
                        <View>
                            <Text className="text-base/6">Ngày sinh *</Text>
                        </View>
                        {age != "" && 
                        <View>
                            <Text className="text-base/6">{age}</Text>
                        </View>
                        }
                    </View>
                    <View className="rotate-90">
                        < FontAwesomeIcon icon={faChevronRight} size={19} color="grey"  />
                    </View>
                
                </Pressable>
                
            </View>
            <View className="flex-1 ml-2">
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={setGender}
                selectedId={gender}
                layout="row"
            />
            </View>
        </View>
        
        </>
    )
}

export default DateAndGender