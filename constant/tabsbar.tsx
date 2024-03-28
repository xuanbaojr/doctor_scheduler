import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface Props {
    color : string,
    size : number,
}
export interface tabbarsub  {
    name : string,
    path : string,
    tabBarlabel : string,
    tabbarIcon :({color, size} : Props) =>  React.ReactElement,
}


export const tabbar : tabbarsub[] = [
    {
        name : 'home',
        path : "/home",
        tabBarlabel : "Trang chủ",
        tabbarIcon :({color, size} : Props) => ( <Entypo name="home" size={size} color={color} />)
    },
    {
        name : 'medical',
        path : "/medical",
        tabBarlabel : "Hồ sơ",
        tabbarIcon :({color, size} : Props) => <FontAwesome5 name="notes-medical" size={size} color={color} />
    },
    {
        name : 'schedule',
        path : "/schedule",
        tabBarlabel : "lịch khám",
        tabbarIcon :({color, size} : Props) => <FontAwesome5 name="calendar-alt" size={size} color={color} />
    },
    {
        name : 'setting',
        path : "/setting",
        tabBarlabel : "Cá nhân",
        tabbarIcon :({color, size} : Props)=> <FontAwesome6 name="user" size={size} color={color} />
    }
]


