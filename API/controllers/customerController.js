const { PrismaClient } = require("@prisma/client");
const router = require("../routes/scheduleRoute");
require("dotenv").config();
const prisma = new PrismaClient();

class CustomerController {
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

  async createCustomer(req, res) {
    const { userId, ho, ten, tuoi, gioiTinh, diaChi } = req.body;
    console.log(userId + "asdasdasdada");

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

module.exports = new CustomerController();
