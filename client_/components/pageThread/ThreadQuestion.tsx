import { View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { Ionicons } from '@expo/vector-icons';
import { ThreadTitle } from "@/constant/screen/threads";

interface Props {
  question : string | undefined,
  setQuestion : (ques : string) => void,
  onsubmit : () => void
}

const ThreadQuestion = ({question, setQuestion, onsubmit } : Props) => {
    const disable = (question === undefined || question.length === 0) ? true : false
    return (
        <>
        <View className="h-14 border-t-2 border-slate-200 px-4 flex-row justify-between items-center bg-white">
        <TextInput
          className="text-base"
          underlineColorAndroid="transparent"
          placeholder={ThreadTitle.placeHolder}
          placeholderTextColor="grey"
          onChangeText={setQuestion}
        />

        <TouchableOpacity 
          disabled={disable}
          onPress={onsubmit}
          className=""
        >
          <Ionicons name="send" size={24} color={ "blue"} style={{opacity: disable ? 0.3 : 1}}/>
        </TouchableOpacity>

        </View>
        </>
    )
}

export default ThreadQuestion