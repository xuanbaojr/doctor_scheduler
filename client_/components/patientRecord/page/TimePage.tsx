import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { TimeType, convertDataToTimeType } from "../type/timeType"
import instance from "@/utils/axios"
import Time from "../button/Time"
import InvaildPage from "./NoVaildPage"


interface Props {
    localpath : string[]
}

const TimePage = ({localpath} : Props) => {
    const [listTime, setListTime] = useState<TimeType[]>([])
    const [name, setName] = useState("")
    const diseaseId = localpath[1]
    const fetchTime = async () => {
        try {
            const data : any = await instance.get(`/timeForDisease?diseaseId=${diseaseId}`)
            const test : TimeType[] = convertDataToTimeType(data.listExamination)
            console.log(data)
            setName(data.content)
            setListTime(test)
        }catch {

        }
    }

    useEffect (() => {
        fetchTime()
    }, [])  

    return (
        <>
        <View className="w-full h-full bg-bg-post flex">
        <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Tái khám: {name}</Text>
        { listTime.length > 0 && 
        <ScrollView className="px-2 ">
        {   listTime.length > 0 && 
            listTime.map((time :any) => {
                return (
                    <Time
                        id={time.id}
                        localpath={localpath}
                        title={time.title}
                        createAt={time.createAt}
                    />
                )
            })
        }
        
        </ScrollView>
        }
        {
            listTime.length == 0 && 
            <InvaildPage />
        }
        </View>
        </>
    )
}

export default TimePage