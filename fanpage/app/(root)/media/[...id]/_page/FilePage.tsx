'use server'

import ListFile from "@/components/MediaCom/file/ListFile"
import InforCus from "@/components/MediaCom/inforCus"
import { ConvertDataToProfileType, ProfileDataType } from "@/contants/Type/ProfileType"
import instance from "@/untils/axios"



interface Props {
    id : string
}

const FilePage = async ({id} : Props) => {

    const data : any = await instance.get(`/getAllProfileForCusOnWeb?userId=${id}`)
    const listFile : ProfileDataType[] = ConvertDataToProfileType(data)
    const customer : any = await instance.get(`/getCustomerIdForweb?userId=${id}`)
    
    return (
        <div>
            <InforCus 
                name={customer.data.firstName + " " + customer.data.lastName}
                phone={customer.user.phone}
                age={customer.data.date}
                gender={customer.data.sex}
                email={customer.user.email}
            />
            <ListFile listFile={listFile}/>
        </div>
    )
}

export default FilePage