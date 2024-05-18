import { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import instance from "@/utils/axios";

const useCustomers = () => {
  const { userId } = useAuth();
  const [listOfCustomers, setListOfCustomers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      setIsLoading(true);
      try {
        const response = await instance.get(`/customer?userId=${userId}`);
        if (Array.isArray(response)) {
          setListOfCustomers(response);
        } else {
          console.error("Expected an array but got:", typeof response);
          setListOfCustomers([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomer();
  }, [userId]);

  return { listOfCustomers, isLoading };
};

export default useCustomers;
