import { Keyboard, TouchableWithoutFeedback } from "react-native"
import { View } from "react-native"
import { TextInput } from "react-native-gesture-handler"



interface Props {
    placeholder : string,
    value : string | undefined,
    setValue : (value : string) => void
}

const InputSection = ({
    placeholder,
    value,
    setValue
} : Props) => {
    return (
        <>
        <View className="flex w-full border-border-1 rounded-sm my-1.5">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <TextInput
            className="text-base border-2 rounded-lg border-border-1 p-2"
            underlineColorAndroid="transparent"
            placeholder={placeholder}
            placeholderTextColor="grey"
            value={value}
            showSoftInputOnFocus={true}
            onChangeText={setValue}
          />
          </TouchableWithoutFeedback>

        </View>
        
        </>
    )
}

export default InputSection