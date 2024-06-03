'use server'

import { IdPage, ProfilePageLink } from "@/app/(root)/media/[...id]/_page/IdPage";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    id : string,
    name : string,
}

const CusItem = ({id, name} : Props) => {

    return (
        <div className="w-full bg-slate-400 rounded-lg px-3 py-2 my-4 shadow-sm flex items-center">
            <Link href={ ProfilePageLink(id)} className="w-full h-full">
                <div className="ml-1 py-5 text-base font-normal">
                    Họ tên: {name}
                </div>
            </Link>
        </div>
    )
}

export default CusItem;