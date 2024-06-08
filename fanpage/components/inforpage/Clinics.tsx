import { ClinicType, DoctorDataType } from "@/app/contants/Type/DoctorType";
import instance from "@/untils/axios";
import ClinicInfo from "./ClinicInfo";


interface Props {
    doctor : DoctorDataType
}

const Clinics = async ({doctor} : Props) => {
    const data : any = await instance.get(`/user?userId=${doctor.userId}`);
    return (
        <>
        <div className="bg-zinc-200 min-h-80 max-h-80 mx-12 overflow-y-auto rounded-lg">
            {
                doctor.clinics.map((clinic : ClinicType, index) => (
                    <ClinicInfo key = {index} doctor = {doctor} clinic = {clinic}/>
                ))
            }
        </div>
        </>
    )
  };
    
  export default Clinics;