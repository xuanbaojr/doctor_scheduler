import { ScrollView, Text, View, TouchableOpacity } from "react-native"
import InforDoctor from "./InforDoctor"
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

const ReviewDoctor = () => {

    return (
        <View className="flex-1 p-4 mb-4 mx-0.5 bg-blue-1 rounded-xl">
            {/* header */}
            <View className="mb-4">
                <Text className="text-xl font-bold mb-2">
                    Bac si nhan duoc danh gia cao
                </Text>

                <View className="border-t-2 border-black"/>
            </View>
            {/* scroll view  */}
            <ScrollView 
            className="flex  mb-2"
            contentContainerStyle={{
                padding : 16
            }}
            showsVerticalScrollIndicator={true}
            >
                <View className="flex-col space-y-3">
                    <InforDoctor />
                    <InforDoctor />
                    <InforDoctor />
                    <InforDoctor />
                </View>
                
            </ScrollView>

            {/* view all */}
            <Link 
                href={"/(tabs)/medical/"}
                className="flex-row justify-center items-center p-1 rounded-xl bg-blue-2 w-20">
                <View className="h-6 w-6 mr-3">
                    <Ionicons name="file-tray-full" size={24} color="black" />
                </View>
                <View>
                   <Text>Tất cả</Text> 
                </View>
                

            </Link>
            <ChatCustomer></ChatCustomer>
        </View>
    )
}



const ChatCustomer = () =>{
    return(
        <View>
            <Link href={`../scheduleDoctor/bookClinic`} asChild>
                <TouchableOpacity>
                    <Text>Bat dau</Text>
                </TouchableOpacity>
            </Link>
            <Link href={`../chat/chatForNurse`} asChild>
                <TouchableOpacity>
                    <Text>Bat dau</Text>
                </TouchableOpacity>
            </Link>
            <Link href={`../chat/chat_for_customer`} asChild>
            <TouchableOpacity>
                <Text>CHAT FOR CUSTOMER</Text>
            </TouchableOpacity>
        </Link>
    </View>
    )

}

export default ReviewDoctor