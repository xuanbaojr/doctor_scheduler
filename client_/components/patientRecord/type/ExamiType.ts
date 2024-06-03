
export interface ExamiDataType {
    id :string,
    createAt : Date,
    comment : string,
}

export const convertDataToExamiType = (data : any) : ExamiDataType[] => {
    if(!Array.isArray(data)) {
        return []
    }

    const exami : ExamiDataType[] = data.map((item : any) => ({
        id : item["id"],
        createAt : item['createAt'],
        comment : item['comment']
    }))

    return exami
} 