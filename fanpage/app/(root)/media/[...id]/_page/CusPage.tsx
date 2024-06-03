'use server'

import ListCus from "@/components/MediaCom/cus/ListCus";
import InforCus from "@/components/MediaCom/inforCus";
import { CustomerDataType, convertDataToCustomerType } from "@/contants/Type/CustomerType";
import instance from "@/untils/axios";
import { useState } from "react";

interface Props {
    id : string
}

const CusPage = async ({id} : Props) => {
    const data : any = await instance.get(`/customer?userId=${id}`)
    const user : any = await instance.get(`/user?userId=${id}`)
    const listCus : CustomerDataType[] = convertDataToCustomerType(data)
    
    return (
        <div className="">
            <InforCus phone={user.phone} email={user.email}/>
            <ListCus listcus={listCus} />
        </div>
    )
}

export default CusPage;