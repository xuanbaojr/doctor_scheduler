const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class userController {
    async fetchUser(req, res) {
        try {
            const data = await prisma.user.findMany({
            })
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

    async createUser (req, res) {
        try {
            
            const data = await prisma.user.create({
                data : {
                    email : "quyen1412kid",
                    phone : "0926929296",
                    role : "Customer",
                }
            })
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

module.exports = new userController()