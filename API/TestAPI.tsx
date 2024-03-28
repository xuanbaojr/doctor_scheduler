import { Postion } from "@/constant/enum"
import { db } from "@/lib/database/db"

interface Props {
    phone : string,
    email : string,
    postion : Postion,
}

export const addNewUser = async ({phone, email, postion} : Props) => {
    await db.user.create({
        data : {
            phone : phone,
            email : email,
            postion: postion,
        }
    })
}

