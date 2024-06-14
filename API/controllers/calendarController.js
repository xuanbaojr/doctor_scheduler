const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CalendarController {
  async getOrderByDoctor(req, res) {
    try {

      const { customer_id } = req.params; // Extract doctor_id and date_time from URL params
      const response = await prisma.Order.findMany({
        
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

module.exports = new CalendarController();
