import instance from "@/utils/axios"
import { useEffect, useState } from "react"
import { View } from "react-native"
import { ResultDataType, convertDataToResultType } from "../type/Result"

interface Props {
    id : string,
    linkId : string
}

const ResultPage = ({id, linkId} : Props) => {
    const [listResult, setListResult] = useState<ResultDataType[]>([])

    const getAllResultForExami = async  () => {
        try {
            const data = await instance.get(`/getAllResultForExami?userId=${id}`)
            const test : ResultDataType[] = convertDataToResultType(data)
            setListResult(test)
            console.log(data)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllResultForExami()
    }, [])

    return (
        <View className="h-full w-full bg-bg-post flex-col px-2 py-1">
            
        </View>
    )
}

export default ResultPage