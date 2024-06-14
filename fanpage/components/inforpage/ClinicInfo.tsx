import { ClinicType, DoctorDataType } from "@/contants/Type/DoctorType";
import instance from "@/untils/axios";


interface Props {
    doctor : DoctorDataType,
    clinic : ClinicType
}

const ClinicInfo = async ({doctor,clinic} : Props) => {
    return (
        <>
        <div className="bg-blue-400 mx-12 my-4 rounded-lg ">
            <div className="px-8 py-2">
                <div> Tên bác sĩ : {doctor.name}</div>
                <div> Khoa khám : {clinic.name}</div>
                <div> Phòng Khám : {clinic.major}</div>
                <div> Giá tiền : {clinic.price}</div>
            </div>
        </div>
        </>
    )
  };
    
  export default ClinicInfo;