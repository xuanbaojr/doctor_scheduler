import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
  async getAllThreadForSelf (req, res) {
    try {
        const userId = req.query.userId;
        console.log(userId)
        const data = await prisma.user.findFirst({
            where : {
                id : userId
            },
            include : {
                custumer : {
                select : {
                    id: true,
                }
                }
            }
        })
        if(!data) return
        const customerId = data.custumer[0].id
        const user = await prisma.customer.findFirst({
            where : {
            id: customerId
            },
            include : {
            listThread : {
                include : {
                comment : {
                    select : {
                    content : true,
                    createAt : true,
                    name : true,
                    }
                }
                }
            }
            }
        })
        console.log(user)
        res.send(user)
    }catch (error ) {
        console.log(error);
        res.status(500).json({
            errorCode: 1,
            msg: "Server" + error.message
        });
    }
}
}