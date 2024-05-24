import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
  async createCustomer(req, res) {
    const { userId, 
      firstName, 
      lastName, 
      gender, 
      age, 
      address} = req.body;
    console.log(userId + " " + firstName + " " + lastName + " " + gender + " " + age + " " + address);

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
          firstName: firstName,
          lastName: lastName,
          // age: age,
          sex: gender,
          address: address,
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