'use client'

import { Card, CardHeader } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import imagealt from "../../../assets/favicon.png"
import Image from "next/image";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";

interface Props {
    value : string,
    result : string[],
}

const ResultContent = ({value, result} : Props) => {

    return (
        <TabsContent value={value} >
            <Card className="w-full h-[300px] border-0 shadow-none py-2 ">
                <HeaderContent />
                <div className="flex flex-col w-full h-full justify-start items-center overflow-y-scroll scrollbar-hide">
                {
                    result.map((item, index) => (
                        <ImageContent key={index} image={item}/>
                    ))
                }
            </div>
            </Card>
        </TabsContent>
    )
}

export default ResultContent;

const HeaderContent = () => {
    return (
        <div className=" flex flex-row justify-center items-center">
        Hồ sơ
        </div>
    )
}
interface ImageContentProps {
    image : string,
}

const linkDefault = "https://files.edgestore.dev/w3yo8jqa6b3xtuvu/publicFiles/_public/"

const ImageContent =({image } : ImageContentProps) => {
    return (
        <div>
            <img src={`${linkDefault}${image}`} />
            {/* {linkDefault} {image} */}
        </div>
    )
}

const UploadFile = () => {
    const [file, setFile] = useState<File>()
    const {edgestore} = useEdgeStore()
    const [progress, setProgress] = useState(0)
    const [urls, setUrls] = useState<{
        url : string,
        // thumbnaiUrl : string | null
    }> ()
    return (
       <div className="flex flex-col items-center m-6 gap-2">
        <input type="file" onChange={(e) => {
            setFile(e.target.files?.[0]);
        }} />
        <div className="h-[6px] w-44 border rounded overflow-hidden">
            <div className="h-full bg-white transition-all duration-150"
                style={{
                    width: `${progress}%`
                }}
            >
            </div>

        </div>
        <button className="bg-white text-black rounded px-2 hover:opacity-80"
            onClick={async () => {
                if(file) {
                    const res = await edgestore.publicFiles.upload({
                        file,
                        onProgressChange: (progress) => {
                            setProgress(progress)
                        }
                    })
                    setUrls({
                        url : res.url,
                        // thumbnaiUrl : res.
                    })
                }
            }}
        >
            upload 
        </button>
        {urls?.url && <Link href={urls.url} target="_blank">URl</Link>}
        {/* <Image src={"https://files.edgestore.dev/w3yo8jqa6b3xtuvu/publicFiles/_public/83c43237-8b0c-44c1-a3a6-a8a0a94a6980.png"} width={300} height={300} alt="1213" /> */}
        <img src={`${linkDefault}83c43237-8b0c-44c1-a3a6-a8a0a94a6980.png`} width={300} height={300} />
       </div>
    )
}