
export interface CustomerDataType {
    id : string,
    firstName : string,
    lastName : string,
    date : Date,
}

export const convertDataToCustomerType = (data : any[]) : CustomerDataType[] => {

    if(!Array.isArray(data)) {
        return []
    }
    const customer : CustomerDataType[] = data.map((item : any) => ({
        id : item['id'],
        firstName : item['firstName'],
        lastName : item['lastName'],
        date : item['date']
    }))

    return customer
}