
export interface TimeType {
    id : string,
    title : string,
    createAt : Date,
}

export const convertDataToTimeType = (data : any[]) : TimeType[] => {
    const time : TimeType[] = data.map((item : any) => ({
        id : item["id"],
        title : item["title"],
        createAt:item["createAt"]
    }))

    return time
}