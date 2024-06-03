
interface Props {
    name? : string,
    age? : Date,
    gender? : string,
    phone? : string,
    email? : string,

}

const InforCus = ({
    name,
    age,
    gender,
    phone,
    email,
}: Props) => {

    return (
        <div className=" w-full h-24 bg-slate-400 rounded-lg grid grid-rows-3 grid-flow-col shadow-md">
            {/* name */}
            {/* <div> */}
                <InforSection 
                    section={"Họ tên:"}
                    title={name}
                />
            {/* </div> */}
            {/* age */}
            <div>
                <InforSection 
                    section={"Tuổi:"}
                    title={convertDateToAge(age)}
                />
            </div>
            {/* gender */}
            <div>
                <InforSection 
                    section={"Giới Tính:"}
                    title={convertGender(gender)}
                />
            </div>
            {/* phone */}
            <div className="row-start-2">
                <InforSection 
                    section={"Số điện thoại:"}
                    title={phone}
                />
            </div>
            {/* email */}
            <div>
                <InforSection 
                    section={"Email:"}
                    title={email}
                />
            </div>

        </div>
    )
}

export default InforCus

interface Section {
    section : string,
    title? : string,
}

const InforSection = ({section, title, } : Section) => {
    return (
        <div className="w-full h-full flex items-center pl-2 text-base font-normal">
            {section} {title}
        </div>
    )
}

const convertDateToAge = (date? : Date) : string  => {
    if(date == null) {
        return ""
    }
    if(!date) return""
    const today = new Date()
    const birth = new Date(date)
    const age = today.getFullYear() - birth.getFullYear()
    return age.toString()
}

const convertGender = (gender? : string) : string => {
    if(gender === "man") {
        return "Nam"
    } else if(gender === "woman") {
        return "Nữ"
    } else {
        return "Không xác định"
    }
}