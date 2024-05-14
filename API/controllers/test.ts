import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async test1 (req, res )  {
        await prisma.thread.findMany({
            include : {
                
            }
        })
    }

    async createUser (req, res) {
        try {
            
            const data = await prisma.user.create({
                data : {
                    email : "quyen1412kid",
                    phone : "0926929296",
                    id : "á",
                    role: "Customer"
                }
            })
            console.log(data);
            res.send(data);
        } catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }
}