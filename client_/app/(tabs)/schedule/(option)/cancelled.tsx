import { Text, View } from "react-native"
import { MaterialTopTabs } from "./_layout"


const notDonePage = () => {
    return (
        <>
        <MaterialTopTabs.Screen options={{
          title : "Hẹn nhỡ"
        }}
        />
        <View>
            <Text>
                not done  page
            </Text>
        </View>
        </>
    )
}

export default notDonePage