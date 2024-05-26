import instance from "@/utils/axios"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { ConvertDataToProfileType, ProfileDataType } from "../type/ProfileType"
import ProfileList from "../list/ProfileList"

interface Props {
    id : string
}

const ProfilePage = ({id} : Props) => {
    const [listProfile , setListProfile] = useState<ProfileDataType[]>([])

    const getAllProfileForCustomer = async () => {
        try {
            const data : any = await instance.get(`/getAllProfileForCus?userId=${id}`)
            const test : ProfileDataType[] = ConvertDataToProfileType(data)
            setListProfile(test)
        }  catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        getAllProfileForCustomer()
    }, [])



    return (
        <View className="h-full w-full bg-bg-post px-2 flex-col py-1">
            <View>
                <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Bệnh nhân: haha  </Text>
            </View>
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
            
        </View>
    )
}

export default ProfilePage