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
            
            const { customer_id } = req.params; // Extract doctor_id and date_time from URL params
            const data = await prisma.order.findMany({
                where: {
                    customId: customer_id
                },
                include : {
                    doctor : {
                        select : {
                            name: true,
                        }
                    }
                }
            });
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