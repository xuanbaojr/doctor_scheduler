import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
  async getAllThreadForSelf (req, res) {
    try {
      const userId = req.query.userId;
      console.log(userId)
      // const data = await prisma.user.findFirst({
      //     where : {
      //         id : userId
      //     },
      //     include : {
      //       custumer : {
      //         select : {
      //           id: true,
      //         }
      //       }
      //     }
      // })
      // const customerId = data.custumer[0].id
      // const user = await prisma.customer.findFirst({
      //   where : {
      //     id: customerId
      //   },
      //   include : {
      //     listThread : {
      //       include : {
      //         comment : {
      //           select : {
      //             content : true,
      //             createAt : true,
      //             name : true,
      //           }
      //         }
      //       }
      //     }
      //   }
      // })
      // console.log(user)
    }catch (error ) {
        console.log(error);
        res.status(500).json({
            errorCode: 1,
            msg: "Server" + error.message
        });
    }
}

    async createCustomer(req, res) {
        const { userId, ho, ten, tuoi, gioiTinh, diaChi } = req.body;
        console.log(userId);
    
        try {
          // Kiểm tra xem user đã tồn tại trong database chưa
          const user = await prisma.user.findUnique({
            where: {
              id: userId,
            },
          });
    
          // Nếu user không tồn tại, trả về lỗi
          if (!user) {
            return res.status(404).send("User not found");
          }
    
          // Tạo customer mới với userId, không cần kiểm tra sự tồn tại trước đó
          const newCustomer = await prisma.customer.create({
            data: {
              userId: userId,
              firstName: ho,
              lastName: ten,
              age: tuoi,
              sex: gioiTinh,
              address: diaChi,
            },
          });
    
          // Trả về thông tin customer mới
          return res.status(201).json(newCustomer);
        } catch (error) {
          console.error("Error creating customer:", error);
          return res.status(500).send("Error creating customer");
        }
      }
}