'use client'
import { useRouter } from "next/router"
import { Button } from "../ui/button"
import Link from "next/link"


interface Props {
    path : string,
    idPage : string,
}


const ButtonTest = ({path, idPage} : Props ) => {

    

    return (
        <Button 
        // onClick={() => onClick}
        className="h-14  bg-blue-50">
            <Link
                href={`/media/${path}/${idPage}`}
            >chuyen link tam thoi
            </Link>
            
        </Button>
    )
}

export default ButtonTest