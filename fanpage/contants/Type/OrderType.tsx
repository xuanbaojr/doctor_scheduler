export interface OrderType {
    id: number;
    clinic_id: string ;
    customer_id: string;
    date: string ;
    hour: string ;
    status: string ;
    user_id: string ;
    symptom: string ;
    Clinic: ClinicType ;
    Customer: CustomerType ;
    User: UserType ;
  }
  
  export interface ClinicType {
    id: string;
    doctor_id: string;
    name: string;
    major: string;
    price: number;
    specialty_id: string;
  }
  
  export interface CustomerType {
    id: string;
    firstName: string;
    lastName: string;
    sex: string;
    address: string;
    userId: string;
    date: string | null;
  }
  
  export interface UserType {
    id: string;
    email: string;
    phone: string;
    role: string;
  }

// orderTypes.ts
export const convertDataToOrderType = (data: any[]): OrderType[] => {
    if (!Array.isArray(data)) {
      return [];
    }
    
    return data.map((item: any) => ({
      id: item.id,
      clinic_id: item.clinic_id,
      customer_id: item.customer_id,
      date: item.date,
      hour: item.hour,
      status: item.status,
      user_id: item.user_id,
      symptom: item.symptom,
      Clinic: item.Clinic ? {
        id: item.Clinic.id,
        doctor_id: item.Clinic.doctor_id,
        name: item.Clinic.name,
        major: item.Clinic.major,
        price: item.Clinic.price,
        specialty_id: item.Clinic.specialty_id,
      } : {
        id: '',
        doctor_id: '',
        name: '',
        major: '',
        price: 0,
        specialty_id: ''
      },
      Customer: item.Customer ? {
        id: item.Customer.id,
        firstName: item.Customer.firstName,
        lastName: item.Customer.lastName,
        sex: item.Customer.sex,
        address: item.Customer.address,
        userId: item.Customer.userId,
        date: item.Customer.date,
      } : {
        id: '',
        firstName: '',
        lastName: '',
        sex: '',
        address: '',
        userId: '',
        date: null,
      },
      User: item.User ? {
        id: item.User.id,
        email: item.User.email,
        phone: item.User.phone,
        role: item.User.role,
      } : {
        id: '',
        email: '',
        phone: '',
        role: '',
      },
    }));
  };