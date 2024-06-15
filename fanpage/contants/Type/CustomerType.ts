export interface CustomerDataType {
    id : string,
    name : string,
    gender : string,
    address : string,
    userId : string,
    date : Date,
}

export const convertDataToCustomerType = (data : any[]) : CustomerDataType[] => {

    if(!Array.isArray(data)) {
        return []
    }
    const customer : CustomerDataType[] = data.map((item : any) => ({
        id : item.id,
        name : item.firstName + " " + item.lastName,
        gender: item.sex,
        address : item.address,
        userId : item.userId, 
        date : item.date
    }))

    return customer
}