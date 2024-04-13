const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()



class ThreadsController {
    async getAllThread(req, res) {
        try {
            const data = await prisma.thread.findMany({});
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
    // creat the new thread 
    async createNewThread (req, res) {
        try {
            const {
                gender,
                age, 
                puImage, 
                image,
                major,
                title,
            } = req.body
            const data = await prisma.thread.create({
                data : {
                    customId : "8b57944c-1e70-4a2e-83ec-30532e698de3",
                    image : image,
                    content : title,
                    gender : gender,
                    major : major,
                    age: age,
                    puImage : puImage
                }
            })
            console.log(req.body);
            res.send(req.body);
        } catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }

    
}
module.exports = new  ThreadsController();