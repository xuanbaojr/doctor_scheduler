import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async getRecommentDoctors(req, res) {
        try {
            const data = await prisma.clinic.findMany({
                select : {
                    name : true,
                    Doctor : {
                        select : {
                            name : true,
                        }
                    }
                },
                orderBy: {
                    Order : {
                        _count : 'asc'
                    }
                },
                take : 1
            })
            console.log(data)
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }
}