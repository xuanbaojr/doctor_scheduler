import instance from "@/utils/axios"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import Disease from "../button/Disease"
import { DiseaseType, convertDataToDiseaseType } from "../type/diseaseType"
import InvaildPage from "./NoVaildPage"

interface Props {
    id : string | string[],
}

const DiseasePage = ({id} : Props) => {
    const [listDisease, setListDisease] = useState<DiseaseType[]>([])
    const [name, setName] = useState("")

    const customId = id

    const fecthDisease = async () => {
        try {
            const data : any = await instance.get(`/diseaseForCus?customId=${customId}`)
            const test : DiseaseType[] = convertDataToDiseaseType(data.listFile)
            setListDisease(test)
            setName(data.firstName + " " + data.lastName)
            console.log(test)
        } catch {

        }
    }
    useEffect (() => {
        fecthDisease()
    }, [])

    return (
        <>
        <View className="w-full h-full bg-bg-post flex">
        <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Thành viên: {name}</Text>
        {listDisease.length > 0 && 
        <ScrollView className="px-2 ">
        {
            listDisease.map((disease : any) => {
                return (
                    <Disease 
                    localpath={id}
                    id={disease.id}
                    key={disease.title}
                    title={disease.title} 
                    content={disease.content}
                    createAt={disease.createAt}
                    />
                )
            })
        }
        </ScrollView>
        }{
            listDisease.length == 0 && 
            <InvaildPage />
        }
        </View>
        </>
    )
}

export default DiseasePage