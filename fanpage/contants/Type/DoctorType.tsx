// doctorTypes.ts
export interface DoctorDataType {
    id: string;
    name: string;
    userId: string;
    clinics: ClinicType[];
}

export interface ClinicType {
    id: string;
    doctor_id: string;
    name: string;
    major: string;
    price: number;
    specialty_id: string;
    Specialty: SpecialtyType;
}

export interface SpecialtyType {
    id: string;
    name: string;
}

export const convertDataToDoctorType = (data: any[]): DoctorDataType[] => {
    if (!Array.isArray(data)) {
        return [];
    }
    const doctors: DoctorDataType[] = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        userId: item.userId,
        clinics: item.clinics.map((clinic: any) => ({
            id: clinic.id,
            doctor_id: clinic.doctor_id,
            name: clinic.name,
            major: clinic.major,
            price: clinic.price,
            specialty_id: clinic.specialty_id,
            Specialty: {
                id: clinic.Specialty.id,
                name: clinic.Specialty.name,
            },
        })),
    }));

    return doctors;
};

export const convertDataToClinicType = (data: any[]): ClinicType[] => {
    if (!Array.isArray(data)) {
        return [];
    }

    const clinics: ClinicType[] = data.map((item: any) => ({
        id: item.id,
        doctor_id: item.doctor_id,
        name: item.name,
        major: item.major,
        price: item.price,
        specialty_id: item.specialty_id,
        Specialty: {
            id: item.Specialty.id,
            name: item.Specialty.name,
        },
    }));

    return clinics;
};