import { Text, View } from "react-native"
import { MaterialTopTabs } from "./_layout"


const passPage = () => {
    return (
        <>
        <MaterialTopTabs.Screen options={{
          title : "Tái khám"
        }}
        />
        <View>
            <Text>
                pass page
            </Text>
        </View>
        </>
    )
}

export default passPage