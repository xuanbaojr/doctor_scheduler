import ThreadAnserBox from "@/components/pageThread/ThreadAnserBox"
import ThreadHeader from "@/components/pageThread/ThreadHeader"
import ThreadQuestion from "@/components/pageThread/ThreadQuestion"
import { headThread } from "@/constant/screen/threads"
import { Stack } from "expo-router"
import { title } from "process"
import { useState } from "react"
import {   View } from "react-native"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"

const data = {
    name : "Nam, 22 tuổi",
    date : "2/3/2024",
    title : "Em năm nay 27 tuổi, em bị rụng tóc hồi giữa năm 2016. Ban đầu chỉ rụng từng đốm nhỏ về sau rụng hết sạch và lông mi, lông mày, lông tay chân của e cũng rụng theo. E có đi khám dv Da liễu tpHCM nhưng không có tiến triển. E có nghe người bà con cũng có người bị trường hợp tương tự nhu ưe và người ta có chỉ e ra Huế điều trị. Tại đây người ta điều trị băng cách tiêm trực tiếp lên da đầu. E điều trị được 2-3 tháng ban đầu có biểu hiện mọc tóc rồi e tạm dừng một thời gian thì bị rụng hẳn. E nghĩ có lẽ e bị lệ thuộc vào thuốc nên e ngừng hẳn. Mãi tới bây giờ cũng chưa có thay đổi gì. Mong được bác sĩ tư vấn.",
    major : ["Da liễu", "Nội soi"],
    anser : [
        {
            name : "Đại học y Hà Nội",
            date : "02/12/2013",
            title : "Theo nhu ban mo ta tinh tranjg cua ban cos the nghia den banj runjg toan toanf ther, voi benh naf can dieu tri lau dai"
        },
        {
            name : "Nam, 22 tuổi",
            date : "08/11/2013",
            title : "asdasdadadasda"
        },
        {
            name : "Đại học y Hà Nội",
            date : "02/11/2013",
            title : "asdasdadadasd"
        }
    ]
}

const Thread = () => {

    const [question, setQuestion] = useState<string>()  
    
    const onSubmit = () => {
        console.log(question)
    }
    return (
        <>
        <Stack.Screen  options={{
        headerShown : true,
        headerTitle : headThread.headerTitle
        }} />
        <View className="h-full flex ">
            <GestureHandlerRootView className="h-full w-full">
            <ScrollView className="w-full  flex-col">
            <ThreadHeader 
                name={data.name}
                date={data.date}
                title={data.title}
                major={data.major}
            />
            <ThreadAnserBox 
                anser={data.anser}
            />

            </ScrollView>
            
            <ThreadQuestion 
                question={question} 
                setQuestion={setQuestion}
                onsubmit={onSubmit}
            />
            
            </GestureHandlerRootView>
        </View>
        

        </>
    )
}


export default Thread