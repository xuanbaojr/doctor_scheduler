const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class scheduleController {
    async bookClinic(req,res) {
        try {
            const data = await prisma.user.findMany()
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

module.exports = new scheduleController()