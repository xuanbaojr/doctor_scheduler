import { DoctorDataType } from "@/app/contants/Type/DoctorType";
import instance from "@/untils/axios";


interface Props {
    doctor : DoctorDataType
}

const InfoDoctor = async ({doctor} : Props) => {
    const data : any = await instance.get(`/user?userId=${doctor.userId}`);
    console.log(data);
    return (
        <>
        <div className="flex  p-4 pl-32 bg-white rounded-lg">
            <img src="http://www.fvhospital.com/wp-content/uploads/2018/11/Dr-Truong-Hieu-Nghia.jpg" alt="avata" className="w-56 h-72 mr-12" />
            <div className= "pt-12">
                <h2 className="text-lg font-semibold">Họ và tên : {doctor.name}</h2>
                <p className="text-gray-600">Gmail : aaaaaaaaa</p>
                <p className="text-gray-600">Số điện thoại : bbbbbbbbb</p>
            </div>
        </div>
        </>
    )
  };
    
  export default InfoDoctor;