import instance from "@/utils/axios"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { ExamiDataType, convertDataToExamiType } from "../type/ExamiType"
import ExamiList from "../list/ExamiList"
import InvaildPage from "./NoVaildPage"
import Spinner from "react-native-loading-spinner-overlay"
import { convertComment } from "@/utils/page/comment"

interface Props {
    id : String,
    linkId : string,

}

const ExaminationPage = ({id, linkId} : Props) => {
    const [listExami, setListExami] = useState<ExamiDataType[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState('')

    const getAllExamiForProfile = async () => {
        try {
            const data : any = await instance.get(`/getAllExmanationForProfile?userId=${id}`)
            const test : ExamiDataType[] = convertDataToExamiType(data['examination'])
            setListExami(test)
            setProfile(data['title'])
            console.log(test)
        } catch (e) {
            console.log(e)
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllExamiForProfile()
    }, [])

    if (isLoading) {
        return (
          <Spinner
            visible={true}
            textContent={"Đang tải..."}
            textStyle={{ color: "#FFF" }}
          />
        );
      }

    return (
        <View className="h-full w-full bg-bg-post px-2 flex-col py-1 ">
            <View>
                <Text className="text-xl font-semibold mb-4 mt-4 ml-4">Tái Khám: {convertComment(profile, 25)}  </Text>
            </View>
            {listExami.length > 0 && 
            <View className="flex-col justify-center">
            <ScrollView className="h-2/3">
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
            <View className="mx-2 py-1 my-2 h-28 mb-5 flex-col justify-end">
                <View
                style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 8,
                    shadowColor: "#000000",
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2,
                }}
                >
                    <View className="w-full px-2 mx-1 py-1">
                        <Text className="text-base font-bold">Tình trạng</Text>
                    </View>
                    <ScrollView className='w-full px-2 mb-2 '>
                        <Text>{profile} </Text>
                    </ScrollView>
                </View>
            </View> 
            </View>
            }
            {
                listExami.length == 0 && 
                <InvaildPage />
            }
        </View>
    )
}

export default ExaminationPage