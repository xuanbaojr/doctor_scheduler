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
                select :{
                    firstName : true,
                    lastName : true,
                    listFile : {
                        select : {
                            id : true,
                            createAt : true,
                            title : true,
                            reconment : true,
                        },
                        orderBy : {
                            createAt : "asc"
                        }
                    }
                }
            })    

            const datas = {
                name : data.firstName + " " + data.lastName,
                file : data.listFile
            }
            res.send(datas)        

        }catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }


    // for wweb 
    async getAllProfileForCusForWeb (req, res) {
        try {
            const userId = req.query.userId;
            const data = await prisma.profile.findMany({
                where : {
                    customId : userId
                },
                
            })    
    
            res.send(data)        
    
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