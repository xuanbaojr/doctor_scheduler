import DiseasePage from "@/components/patientRecord/page/DiseasePage"
import TimePage from "@/components/patientRecord/page/TimePage"
import { router, useLocalSearchParams, usePathname } from "expo-router"
import path from "path"
import { Text, TouchableOpacity, View } from "react-native"

interface Props {

}

const ProfilePage = () => {
    const {id} = useLocalSearchParams()
    if(typeof id !== "string") return
    const newid = splitStringAtCustomChar(id, ",")
    

    if(newid.length === 1) {
        return (
            <>  
                <DiseasePage id={newid} />
            </>
        )
    } else if (newid.length === 2 ) {
        return (
            <>
                <TimePage localpath={newid}/>
            </>
        )
    }
    

    return (
        <>
        <View className="w-ful h-full flex bg-bg" >
            <Text>
                menber profile = {id} 
            </Text>
            <Text>
                {/* {disease} */}
            </Text>

           
        </View>
        </>
    )
}

export default ProfilePage

const splitStringAtCustomChar = (input: string, separator: string): string[] => {
    return input.split(separator);
}