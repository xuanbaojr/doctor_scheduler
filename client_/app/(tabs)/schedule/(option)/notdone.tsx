import { Text, View } from "react-native"
import { MaterialTopTabs } from "./_layout"
import InvaildPage from "@/components/patientRecord/page/NoVaildPage"


const notDonePage = () => {
    return (
        <>
        <MaterialTopTabs.Screen options={{
          title : "Hẹn nhỡ"
        }}
        />
        <View className="h-full w-full bg-bg-post">
            <InvaildPage />
            
        </View>
        </>
    )
}

export default notDonePage