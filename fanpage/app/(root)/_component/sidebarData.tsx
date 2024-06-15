
import { FaUserTie } from "react-icons/fa";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
export interface sidebarDataType {
    path : string,
    name : string,
    icon : (size : number, active : boolean, trueActive : string, falseActive : string) => React.ReactNode
}

// interface IconType {
//     icon : () => Re
// }

export const sidebarData : sidebarDataType[] = [
    {
        path : "/infor",
        name : "Thông tin bác sĩ",
        icon : (size, active, trueActive, falseActive) =>  <FaUserTie className={"h-full"} color={active ? trueActive : falseActive} size={size}/>
    },
    {
        path : "/sechueler",
        name : "Lịch khám",
        icon : (size, active ,trueActive, falseActive) => <IoCalendarOutline className="h-full" color={active ? trueActive : falseActive} size={size}/> 
    },
    {
        path : "/media",
        name : "Hồ sợ bênh nhân",
        icon : (size, active ,trueActive, falseActive) => <IoFileTrayFullOutline className="h-full" color={active ? trueActive : falseActive} size={size}/> 
    },
    
]
