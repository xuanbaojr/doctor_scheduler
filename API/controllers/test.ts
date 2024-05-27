import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async fetchCustomer(req, res) {
        const userId = req.query.userId;
        console.log(userId);
        try {
          const data = await prisma.customer.findMany({
            where: {
              userId: userId,
            },
          });
          console.log(data);
          res.send(data);
        } catch (error) {
          console.error("Lỗi khi lấy thông tin khách hàng:", error);
          return res.status(500).send("Lỗi khi lấy thông tin khách hàng");
        }
      }
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