import useCustomers from "@/hooks/useCustomer";
import { useAuth } from "@clerk/clerk-expo"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native";
import CustomerList from "../list/CustomerList";
import instance from "@/utils/axios";
import { CustomerDataType, convertDataToCustomerType } from "../type/CustomerType";

interface Props {

}

const CustomerPage = () => {
    const {userId} = useAuth()
    const [listCustomer, setListCustomers] = useState<CustomerDataType[]>([])

    const getListCustomer = async () => {
        try {
            const data : any = await instance.get(`/customer?userId=${userId}`)
            const test : CustomerDataType[] = convertDataToCustomerType(data) 
            setListCustomers(test)
            console.log()

        } catch (e){
            console.log(e)
        }
    }


    useEffect(() => {
        getListCustomer()
    }, [])

    if (listCustomer.length === 0) {
        return <Text>Không có dữ liệu.</Text>;
    }



    return (
        <View className="h-full w-full bg-bg-post flex-col px-2">
            <Text className="text-2xl font-semibold mb-4 mt-4 ml-4">Bệnh nhân:</Text>

            <ScrollView>
                {listCustomer.map((customer, index) => (
                    <CustomerList 
                        key={index}
                        id={customer.id}
                        firstName={customer.firstName}
                        lastName={customer.lastName}
                        date={customer.date}
                    />
                ))}

            </ScrollView>

        </View>
    )
}

export default CustomerPage