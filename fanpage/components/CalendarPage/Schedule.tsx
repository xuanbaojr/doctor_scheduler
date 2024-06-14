import react, { useEffect, useState } from 'react';
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import {ClinicType, OrderType, convertDataToOrderType } from '@/contants/Type/OrderType';
import ButtonTest from '../MediaCom/ButtonTest';
import { IdPage } from '@/app/(root)/media/[...id]/_page/IdPage';

interface Props {
  doctor_id : string;
  date: string;
  time: string;
}

const Schedule = ({ doctor_id, date, time } : Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [clinics, setClinics] = useState<ClinicType>();
  const [check, setCheck] = useState(false)
  const client = createClient(
    'https://snwjzonusggqqymhbluj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud2p6b251c2dncXF5bWhibHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MTU4MTEsImV4cCI6MjAyNzE5MTgxMX0.H-4glIFgFb31Gu3sl2X4nqFOnJw5MDKa0Yjf2SvW4A0'
  );

  const orderbydoctor = async ( doctor_id : string , date : string, time : string ) => {
    try {
      const { data, error } = await client
        .from("Order")
        .select("*, Clinic(*, Doctor(*), Specialty(*)), Customer (*)")
        .eq('date', date)
        .eq('hour', time)
        .eq('status', "Pending");
      if (error) {
        console.log("Error fetching orders:", error);
      } else {
        const orders_ : OrderType[] = convertDataToOrderType(data);
        setOrders(orders_);
        console.log("data trả về " , data);
        const clinic : ClinicType = orders_[0].Clinic
        setClinics(clinic)
        if ( clinic.doctor_id === doctor_id) {  
          setCheck(true)
        }
        
      }
    } catch (err) {
      console.log("Something went wrong!", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    orderbydoctor( doctor_id ,date , time );
  }, [doctor_id,date , time]);
  
  return (
    <div>
      <p> </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id}>

                {check ? (
                  <>
                  <ButtonTest  path={order.user_id} idPage={IdPage.customer} />
                  </>
                ) : (
                  <p></p>
                )}
              </div>
            ))
            
          ) : (
            <p> </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Schedule;
