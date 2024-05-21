// import { Image, Text, View } from "next/ima"

// import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link'
import avatar from "../assets/favicon.png"

const Patient = () => {
    return (
        <Link href="/PersonalHearth" className=" flex mx-auto  px-4 lg:px-0 lg:max-w-4xl w-full bg-blue-50 rounded-lg mt-6" >
            <div className="mx-4 bg-avatar-1 flex items-center justify-center mt-4 mb-4">
                <Image
                    src={avatar}
                    alt="..."
                    width={40} height={40}
                    />
            </div>
            <div className="flex-1 text-left mt-4 mb-4" >
                    <div className="text-lg font-semibold">Phan xuan bao</div>
                    <div className="text-gray-500">Khám ngày: 10-1-2021</div>
            </div>
        </Link>
    )
}


export default Patient