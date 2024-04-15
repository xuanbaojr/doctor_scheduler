import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async test1 (req, res )  {
        await prisma.thread.findMany({
            include : {
                
            }
        })
    }

    async createNewThread (req, res) {
        try {
            const {
                id
            } = req.body
            const data = await prisma.thread.findFirstOrThrow({
                where : {
                    typeThread : 'Thread'
                   },
                   include : {
                    comment : true
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