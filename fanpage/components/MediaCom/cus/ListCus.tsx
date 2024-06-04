'use server'

import { CustomerDataType } from "@/contants/Type/CustomerType"
import CusItem from "./CusItem"

interface Props {
    listcus : CustomerDataType[]
}

const ListCus = ({listcus} : Props) => {

    return (
        <div className="flex-col mt-6">
            <div className="text-xl font-semibold mb-1">
                Thành viên:
            </div>
            <div className="flex-col ">
            {
                listcus.map((cus : CustomerDataType, index) => (
                    <CusItem key={index} id={cus.id} name={cus.name}  />
                ))
            }
            </div>
        </div>
    )
}

export default ListCus