'use client'
import { Tabs, 
TabsContent,
TabsList, 
TabsTrigger 
} from "@/components/ui/tabs"
import SelectDay from "./SelectDay"
import DayContent from "./DayContent"
import { ExamiDataType } from "../ResultType"
      
interface Props {
    listExami : ExamiDataType[],
    profileId : string,
}

const Exami = ({listExami, profileId} : Props) => {
    const today = new Date()
    const isDay = convertCreateAt(listExami[0].createAt) === convertCreateAt(today)

    return (
        <div className="px-2  mt-3 ">
        <Tabs defaultValue={isDay ? listExami[0].id : 'now'} className="w-full  ">
            <TabsList  className="bg-slate-100 p-0 w-full">
                <TabName />
                <div className="flex flex-row justify-start overflow-y-auto scrollbar-hide flex-1  h-full">
                { !isDay &&
                    <SelectDay value="now" date={today}/>
                }
                {
                    listExami.map((item : ExamiDataType, index) => (
                        <SelectDay key={index} value={item.id} date={item.createAt}  />
                    ))
                }
                </div>
            </TabsList>
            {   !isDay && 
                <DayContent value="now" listResult={[]} profileId={profileId}/>
            }
            {
                listExami.map((item : ExamiDataType, index) => (
                    <DayContent key={index} value={item.id} listResult={item.listResult} profileId={profileId} />
                ))
            }
        </Tabs>
        </div>
    )
}

export default Exami

const TabName = () => {

    return (
        <div className="h-full px-3 rounded-l-lg flex justify-start items-center bg-slate-700   text-base font-semibold">
            Ngày khám
        </div>
    )
}

const convertCreateAt = (date : Date) : string => {
    const formattedDate : Date = new Date(date)
    const createAt = formattedDate.toLocaleDateString() 
    return createAt
}