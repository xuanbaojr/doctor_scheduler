const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class ProfileCOntroller {
    async getAllProfileForCus (req, res) {
        try {
            const userId = req.query.userId;
            const data = await prisma.customer.findFirst({
                where : {
                    id : userId
                },
                include :{
                    listFile : {
                        select : {
                            id : true,
                            createAt : true,
                            title : true,
                            reconment : true,
                        }
                    }
                }
            })    
            res.send(data.listFile)        

        }catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }
}

module.exports = new ProfileCOntroller();