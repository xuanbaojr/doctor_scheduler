import {
    MaterialTopTabNavigationOptions,
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationEventMap
} from "@react-navigation/material-top-tabs"
import { Link, useRouter, withLayoutContext } from "expo-router"
import { ParamListBase , TabNavigationState } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { questionTitle } from "@/constant/screen/threads";
import CustomButton from "@/components/customButton";


const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<   
    MaterialTopTabNavigationOptions,
    typeof Navigator,TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
    
>(Navigator);


const Layout = () => {
    const router = useRouter()
    const start = () => {
        router.push("/scheduleDoctor/bookClinic")
    }
    return (
        <>
        <MaterialTopTabs screenOptions={{
        }}>
            <MaterialTopTabs.Screen 
                name="pending"
                options={{
                }}
            />
            <MaterialTopTabs.Screen 
                name="completed"
                options={{
                }}
            />
            <MaterialTopTabs.Screen 
                name="cancelled"
                options={{
                }}
            />
            
        </MaterialTopTabs>
        <View className=" px-2 py-2 ">
            <CustomButton title="Hẹn lịch khám" onPress={start} />
        </View>
        
        </>
    )
}

export default Layout