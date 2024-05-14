import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class registerController {
  async registerPatient(req, res) {
    try {
      const data = await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          address: req.body.address,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        errorCode: 1,
        msg: "Server" + error.message,
      });
    }
  }
}
