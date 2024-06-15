import instance from "@/utils/axios"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { ResultDataType, convertDataToResultType } from "../type/Result"
import AccordinNative from "@/components/accordion/AccordinNative"
import InvaildPage from "./NoVaildPage"
import Spinner from "react-native-loading-spinner-overlay"
import ImagePickerExample from "./pickimage"

interface Props {
    id : string,
    linkId : string
}

const ResultPage = ({id, linkId} : Props) => {
    const [listResult, setListResult] = useState<ResultDataType[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [comment, setComment] = useState('')

    const getAllResultForExami = async  () => {
        try {
            const data : any = await instance.get(`/getAllResultForExami?userId=${id}`)
            const test : ResultDataType[] = convertDataToResultType(data['result'])
            setListResult(test)
            setComment(data['comment'])
            console.log(data['result'])
        }catch (e) {
            console.log(e)
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllResultForExami()
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
        <View className="h-full w-full bg-bg-post flex-col justify-between px-2 py-1">
            {
                listResult.length > 0 && 
            <>
            <ScrollView>
                {listResult.map((item, index) => (
                    <AccordinNative 
                        key={index}
                        name={item.name}
                        image = {item.images}
                        comment={item.comment}
                    />
                ))} 
            </ScrollView>
            <View className="mx-2 py-1 mb-6 h-1/8 flex-col justify-end">
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
                <View className="w-full px-2 mx-1 ">
                    <Text className="text-base font-bold">Đánh giá tổng quan của Bác sĩ</Text>
                </View>
                <ScrollView className='w-full px-2 my-2 '>
                    <Text>{comment}phải replay lại đoạn của a Negav mấy chục lần lun á trời </Text>
                </ScrollView>
            </View>
            </View>
            </>
            }
            {
                listResult.length == 0 && <InvaildPage />
            }
        </View>
    )
}

export default ResultPage