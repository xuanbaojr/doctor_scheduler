'use client'

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import SelectResult from "./SelectResult";
import ResultContent from "./ResultContent";
import { ResultDataType } from "../ResultType";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react";


interface Props {
    value : string,
    profileId : string,
    listResult : ResultDataType[]
}

const DayContent = ({value, profileId, listResult} : Props) => {

    return (
        <TabsContent value={value}>
            <Card className="w-full h-[330px] shadow-md p-0">
                {/* can sua lai chieu cao cua cai nay */}
                <Tabs defaultValue={'0'} className="w-full h-full flex flex-row" >
                    {/* bang chon ten kham */}
                    <TabsList className="bg-slate-100 w-[250px] h-full flex flex-col p-0">
                        <TabName />
                    {listResult.length > 0 ?
                        <div className="px-2 pt-1 flex flex-1 flex-col w-full h-full justify-start overflow-y-scroll scrollbar-hide">
                        {
                            listResult.map((item : ResultDataType, index) => (
                                <SelectResult key={index} value={item.id} result={item.name}  />
                            ))
                        }
                        </div>
                        :
                        <TabNone />
                    }
                        <TabAdd profileId={profileId}/>
                    </TabsList>
                    <div className="bg-blue-200 w-full h-full rounded-r-md">
                    {
                        listResult.map((item : ResultDataType, index) => (
                            <ResultContent key={index} value={item.id} result={item.image}  />
                        ))
                    }
                    </div>
                </Tabs>
            </Card>
        </TabsContent>
    )
}

export default DayContent;

const TabName = () => {
    return (
        <div className="w-full bg-slate-500 px-3 py-1.5 rounded-tl-lg text-base font-semibold">
            Các lần khám
        </div>
    )
}

interface TabAddProps {
    profileId : string,
}

const TabAdd = ({profileId} : TabAddProps) => {
    const [name, setName] = useState("")
    const addExami = async () => {

    }
    return (
    <Dialog>
      <DialogTrigger asChild className="w-full bg-slate-400 px-3 py-1.5 rounded-bl-lg">
        <Button variant="outline" className="bg-blue-200 w-full  flex flex-row px-1 py-0.5 text-base font-semibold">
            <IoIosAddCircle className="mr-2"/>
            Thêm hồ sơ
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white ">
        <DialogHeader>
          <DialogTitle>Tên hồ sơ</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            {/* <Input {...name}/> */}
          </div>
          
        </div>
        <DialogFooter className='sm:justify-between'>
            <DialogClose asChild>
                <Button type="button" variant="secondary">
              Close
                </Button>
            </DialogClose>
            <Button type="submit" onClick={() => addExami()}>
                submit
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}

const TabNone = () => {
    return (
        <div className="flex-1 px-1 py-1 flex flex-row justify-start">
            Chưa có hồ sơ nào
        </div>
    )
}
{/* <div className="w-full bg-slate-400 px-3 py-1.5 rounded-bl-lg" >
            <Button className="bg-blue-200 w-full h-full flex flex-row px-1 py-0.5 text-base font-semibold">
                <IoIosAddCircle className="mr-2"/>
                Thêm hồ sơ
            </Button>
        </div> */}