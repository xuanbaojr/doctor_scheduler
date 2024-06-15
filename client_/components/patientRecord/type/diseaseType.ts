
export interface DiseaseType {
    id : string,
    title :string,
    content : string,
    createAt : Date,
}

export const convertDataToDiseaseType = (data : any[]) : DiseaseType[] => {
    const disease : DiseaseType[] = data.map((item : any) => ({
        id : item['id'],
        title : item['title'],
        content : item['content'],
        createAt : item['createAt'],

    }))
    return disease
}