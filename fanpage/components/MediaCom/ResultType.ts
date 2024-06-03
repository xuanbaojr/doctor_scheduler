

export interface ResultDataType {
    id : string,
    name : string,
    comment : string,
    image : string[],
}

export interface ExamiDataType {
    id : string,
    createAt : Date,
    comment : string,
    listResult : ResultDataType[]
}

export const convertDataTofileType = (data : any[]) : ExamiDataType[] => {
    if(!Array.isArray(data)) {
        return []
    }

    const file : ExamiDataType[] = data.map((item : any) => ({
        id : item.id,
        createAt : item.createAt,
        comment : item.comment,
        listResult : convertToResultType(item.listResult)
    }))

    return file
}

const convertToResultType = (data : any) : ResultDataType[] => {
    if(!Array.isArray(data)) {
        return []
    }

    const result : ResultDataType[] = data.map((item : any) => ({
        id : item.id,
        name : item.name,
        comment : item.comment,
        image : item.image
    }))

    return result
}