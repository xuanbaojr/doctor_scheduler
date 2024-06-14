import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async createNewExamiForWeb (req, res) {
        try {
            const response = await prisma.order.findMany({
                
            });
      
            res.send(response);
          } catch (error) {
            console.log(error);
            res.status(500).json({
              errorCode: 1,
              msg: "Server error: " + error.message
            });
          }
        }
}