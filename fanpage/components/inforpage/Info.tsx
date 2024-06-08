'use server'

import { DoctorDataType, convertDataToDoctorType } from "@/app/contants/Type/DoctorType";
import instance from "@/untils/axios";
import InfoDoctor from "./InfoDoctor";

interface Props {
    id : string
}

const CusPage = async ({id} : Props) => {
    const data : any = await instance.get(`/doctor/${id}`);
    const doctors : DoctorDataType[] = convertDataToDoctorType(data)
    const doctor = doctors[0];
    return (
        <div className="">
            {doctor.clinics[0].Specialty.name}
            <InfoDoctor doctor={doctor}/>
        </div>
    )
}

export default CusPage;