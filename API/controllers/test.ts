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
                gender,
                age, 
                puImage, 
                image,
                major,
                title,
            } = req.body
            const data = await prisma.thread.create({
                data : {
                    sex: gender,
                    age : age,
                    name : "asd",
                    image : image,
                    content : title,
                }
            })
            console.log(req.body);
            res.send(req.body);
        } catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }
}