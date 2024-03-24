import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export interface tabbarsub  {
    name : string,
    path : string,
    tabBarlabel : string,
    tabbarIcon : React.ReactElement,
}

export const tabbar : tabbarsub[] = [
    {
        name : 'home',
        path : "/home",
        tabBarlabel : "Trang chủ",
        tabbarIcon : <Entypo name="home" size={24} color="black" />
    },
    {
        name : 'medical',
        path : "/medical",
        tabBarlabel : "Hồ sơ",
        tabbarIcon : <FontAwesome5 name="notes-medical" size={24} color="black" />
    },
    {
        name : 'schedule',
        path : "/schedule",
        tabBarlabel : "lịch khám",
        tabbarIcon : <FontAwesome5 name="calendar-alt" size={24} color="black" />
    },
    {
        name : 'setting',
        path : "/setting",
        tabBarlabel : "Cá nhân",
        tabbarIcon : <FontAwesome6 name="user" size={24} color="black" />
    }
]


