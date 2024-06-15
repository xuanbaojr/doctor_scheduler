import instance from "@/utils/axios"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { ConvertDataToProfileType, ProfileDataType } from "../type/ProfileType"
import ProfileList from "../list/ProfileList"
import InvaildPage from "./NoVaildPage"
import Spinner from "react-native-loading-spinner-overlay"

interface Props {
    id : string
}

const ProfilePage = ({id} : Props) => {
    const [listProfile , setListProfile] = useState<ProfileDataType[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('')

    const getAllProfileForCustomer = async () => {
        try {
            const data : any = await instance.get(`/getAllProfileForCus?userId=${id}`)
            const test : ProfileDataType[] = ConvertDataToProfileType(data['file'])
            setName(data['name'])
            setListProfile(test)
        }  catch (e){
            console.log(e)
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllProfileForCustomer()
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
        <View className="h-full w-full bg-bg-post px-2 flex-col py-1">
            <View>
                <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Thành viên {name} </Text>
            </View>
            {listProfile.length > 0 && 
            <ScrollView>
                {listProfile.map((profile, index) => (
                    <ProfileList 
                        key={index}
                        id={profile.id}
                        createAt={profile.createAt}
                        title={profile.title}
                        reconment={profile.reconment}
                        linkId={id}
                    />
                ))}
            </ScrollView>
            }
            {
                listProfile.length == 0 && 
                <InvaildPage />
            }
        </View>
    )
}

export default ProfilePage