import Link from 'next/link';
import { PrismaClient } from '@prisma/client'
import Image from 'next/image'

const prisma = new PrismaClient()

// async function main() {
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   });
  
const home = () => {
  return (
    <div className="main" style = {{
      margin: "0px 20px 20px 20px"
    }}>
      <header style = {{
         textAlign: "center",
        //  padding: "5px 0"
      }}>
        <a className="long-underline">Thông tin y tá</a>
      </header>
      <div className="a">
        
        <div className="flex-row">
          <Image
          src="data:image/jpeg;base64,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"
          alt="Picture of the author"
          width={240}
          height={320}
          // style = {{
          //   paddingTop: "10px"
          // }}
          />
          <div className="info">
            <div>Tên:</div>
            <div>Tuổi:</div>
            <div>....</div>
          </div>
        </div>
        <div>Khoa:</div>
        <div>Chức vụ:</div>
        <div>....</div>
      </div>
    </div>

  )
}
 
export default home;