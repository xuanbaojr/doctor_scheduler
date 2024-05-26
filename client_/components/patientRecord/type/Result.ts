
export interface ResultDataType {
    id : string,
    images : string[],
    comment : string,
    name : string,
}

export const convertDataToResultType = (data : any) : ResultDataType[] => {
    if(!Array.isArray(data)) {
        return []
    }
    const result : ResultDataType[] = data.map((item : any) => ({
        id : item['id'],
        images : item['image'],
        comment : item['comment'],
        name : item['name']
    }))

    return result
}