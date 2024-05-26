import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async getAllProfileForCus (req, res) {
        try {
            const userId = req.query.userId;
            console.log(userId)  
            const data = await prisma.examination.findFirst({
                where : {
                    id : userId,
                },
                include : {
                    listResult: {
                        select : {
                            id: true,
                            image : true,
                            comment : true,
                            name : true,
                        }
                    }
                }
            })  
            res.send(data?.listResult)
            

        }catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }
}