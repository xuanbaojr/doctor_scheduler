export const convertComment = (content : string, subLength : number) => {
    if(content.length > subLength) {
        const sub = content.substring(0,subLength)
        const index = sub.lastIndexOf(" ")
        return sub.substring(0,index) + "..."
    }
    return content
}

export const convertDateToAge = (date : Date) : string => {
    const today = new Date()
    const birth = new Date(date)
    const age = today.getFullYear() - birth.getFullYear()
    return age.toString()
}

export const convertLink = (link : string, separator : string) => {
    return link.split(separator)

}