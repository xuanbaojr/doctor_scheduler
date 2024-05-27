import ExaminationPage from "@/components/patientRecord/page/ExaminationPage"
import ProfilePage from "@/components/patientRecord/page/ProfilePage"
import ResultPage from "@/components/patientRecord/page/ResultPage"
import { convertLink } from "@/utils/page/comment"
import { useLocalSearchParams } from "expo-router"
import { link } from "fs"
import { Text, View } from "react-native"


interface Props {

}

const Page = () => {

    const {id} = useLocalSearchParams()
    if(Array.isArray(id)) return 
    const linkId = convertLink(id, ",")
    if(linkId.length === 1) {
        return (
            <ProfilePage 
                id={linkId[0]}
            />
        )
    }

    else if (linkId.length === 2) {
        return (
            <ExaminationPage 
                id={linkId[1]} 
                linkId={id}
            />
        )
    }
    console.log(linkId[2])

    return (
        <ResultPage
            id={linkId[2]}
            linkId={id}
        />
    )
}

export default Page