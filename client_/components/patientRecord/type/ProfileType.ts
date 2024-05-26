export interface ProfileDataType {
    id : string,
    createAt : Date,
    title : string,
    reconment : string,
}

export const ConvertDataToProfileType = (data : any[]) : ProfileDataType[] => {
    if(!Array.isArray(data)) {
        return []
    }
    const profile : ProfileDataType[] = data.map((item : any) => ({
        id : item['id'],
        createAt: item['createAt'],
        title : item['title'],
        reconment : item['reconment']
    }))

    return profile
}