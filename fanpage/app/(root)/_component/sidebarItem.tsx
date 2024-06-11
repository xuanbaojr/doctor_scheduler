import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

interface Props {
    path : string,
    name : string,
    icon : (size : number, active : boolean, trueActive : string, falseActive : string) => React.ReactNode,
    active : boolean
}

const SideBarItem = ({path, name, icon, active} : Props) => {
    const IconTrue = "#ffffff"
    const IconFalse = "#475569"
    return (
        <Link href={path} className={`w-full py-2 px-3 flex items-center  rounded-xl ${active ? "bg-blue-900" : "bg-slate-100"}`}>
            <div className="h-8 mr-4">
                {icon(24, active, IconTrue, IconFalse)}
            </div>
            <div className={`text-base font-bold ${active ? 'text-white' : 'text-slate-600'}`}>
                {name}
            </div>
        </Link>
    )
}

export default SideBarItem