const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()



class ThreadsController {
    async getThreadById(req, res) {
        try {
            const id = req.params.thread_id
            const data = await prisma.thread.findMany({
                where: { id: id },
                include : {
                    comment : {
                        select : {
                            content : true,
                            createAt : true,
                            name : true,
                        }
                    }
                }
              });

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

    async createComent(req, res) {
        try {
            const {
                id,
                content,
                name,
            } = req.body
            const data = await prisma.comment.create({
                data : {
                    customerId : "8b57944c-1e70-4a2e-83ec-30532e698de3",
                    threadId : id,
                    content : content,
                    name : name

                }
            });

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

    // get all thread for advice 
    async getAllThread(req, res) {
        try {
            const data = await prisma.thread.findMany({
               include : {
                    comment : {
                        select : {
                            content : true,
                            createAt : true,
                            name : true,
                        }
                    }
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