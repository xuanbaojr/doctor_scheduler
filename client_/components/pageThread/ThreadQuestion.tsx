import { Keyboard, TouchableWithoutFeedback, View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { Ionicons } from '@expo/vector-icons';
import { ThreadTitle } from "@/constant/screen/threads";
import { useState } from "react";

interface Props {
  onsubmit : (ques : string) => void
}

const ThreadQuestion = ({ onsubmit } : Props) => {
    // const disable = (question === undefined || question.length === 0) ? true : false
    const [ques, setQues] = useState<string>('')
    const submit = (ques : string) => {
      onsubmit(ques)
      Keyboard.dismiss()
      setQues("")
    }
    return (
        <>
        <View className="h-14 border-t-2 border-slate-200 px-4 flex-row justify-between items-center bg-white">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <TextInput
            className="text-base"
            underlineColorAndroid="transparent"
            placeholder={ThreadTitle.placeHolder}
            placeholderTextColor="grey"
            value={ques}
            showSoftInputOnFocus={true}
            onChangeText={setQues}
          />
          </TouchableWithoutFeedback>
        
        <TouchableOpacity 
          disabled={ques.length === 0}
          onPress={() => submit(ques)}
          className=""
        >
          <Ionicons name="send" size={24} color={ "blue"} style={{opacity: ques.length === 0 ? 0.3 : 1}}/>
        </TouchableOpacity>

        </View>
        </>
    )
}

export default ThreadQuestion