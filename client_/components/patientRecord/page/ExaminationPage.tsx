import instance from "@/utils/axios"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { ExamiDataType, convertDataToExamiType } from "../type/ExamiType"
import ExamiList from "../list/ExamiList"

interface Props {
    id : String,
    linkId : string,

}

const ExaminationPage = ({id, linkId} : Props) => {
    const [listExami, setListExami] = useState<ExamiDataType[]>([])

    const getAllExamiForProfile = async () => {
        try {
            const data : any = await instance.get(`/getAllExmanationForProfile?userId=${id}`)
            const test : ExamiDataType[] = convertDataToExamiType(data)
            setListExami(test)
            console.log(test)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllExamiForProfile()
    }, [])


    return (
        <View className="h-full w-full bg-bg-post px-2 flex-col py-1 ">
            <View>
                <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Bệnh nhân: haha  </Text>
            </View>
            <ScrollView>
                {listExami.map((exami, index) => (
                    <ExamiList 
                        key={index}
                        id={exami.id}
                        createAt={exami.createAt}
                        comment={exami.comment}
                        linkId={linkId}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default ExaminationPage