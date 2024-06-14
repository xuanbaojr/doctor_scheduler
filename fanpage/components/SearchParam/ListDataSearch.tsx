import instance from "@/untils/axios"
import { SearchUser, converDataToSearchUser } from "./TypeList"
import ListUser from "./ListUser"

interface Props {
    query : string,
}

const ListDataSearch = async ({query} : Props) => {
    const data  : any= await instance.get(`/user`)
    const listUser : SearchUser[] = converDataToSearchUser(data)
    console.log("asdasd ")
    console.log(listUser[0].id)
    const filteredUser = Array.isArray(listUser) ? listUser.filter((user) => {
        return user.email.toLowerCase().includes(query.toLowerCase())
    }) : []

    return (
        <div>
            {Array.isArray(listUser) && listUser.length === 0 && (
                <p className="mt-4">khong co du lieu</p>
            )}
            <div className="flex flex-col mt-4 items-center">
                {Array.isArray(listUser) && query !== '' && filteredUser.map((user) => (
                    <ListUser user={user}/>
                ))}
            </div>
        </div>
    )
}

export default ListDataSearch