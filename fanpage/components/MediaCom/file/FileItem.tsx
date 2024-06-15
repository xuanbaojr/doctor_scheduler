'use server'

import { ExamipagePageLink } from "@/app/(root)/media/[...id]/_page/IdPage"
import Link from "next/link"

interface Props {
    id : string,
    name : string,
    date : Date,
}

const FileItem = ({id, name, date} : Props) => {
    return (
        <div className="w-full bg-slate-400 rounded-lg px-3 py-2 my-4 shadow-sm">
            <Link href={ExamipagePageLink(id)}>
                <div className="flex-col py-2 justify-center">
                    <div className="text-base my-1 font-semibold">Khám bệnh: {name}</div>
                    <div className="text-sm my-1 font-medium">Ngày khám: {convertCreateAt(date)}</div>
                </div>
            </Link>
        </div>
    )
}

export default FileItem

const convertCreateAt = (date : Date) : string => {
    const formattedDate : Date = new Date(date)
    const createAt = formattedDate.toLocaleDateString() 
    return createAt
}