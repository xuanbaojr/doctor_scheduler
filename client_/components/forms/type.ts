
export interface RecomentDoctor {
    major : string,
    name : string,
}

export const convertDataToRecommentDoctor = (data : any) : RecomentDoctor[] => {
    if(!Array.isArray(data)) {
        return []
    }

    const redoc : RecomentDoctor[] = data.map((item : any)=>({
        major : item['name'],
        name : item['Doctor']['name']
    }))

    return redoc
}
