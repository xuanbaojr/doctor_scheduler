'use client'

import { TabsTrigger } from "@/components/ui/tabs"

interface Props {
    value : string,
    result : string,
}

const SelectResult = ({value, result} : Props) => {

    return (
        <div className="py-1 my-1 px-1 w-full flex justify-start items-center bg-slate-300 rounded-md">
            <TabsTrigger value={value} className="w-full h-full flex justify-start">{result}</TabsTrigger>
        </div>
    )
}

export default SelectResult