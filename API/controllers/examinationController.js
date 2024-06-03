const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class ExaminationController {
    // lay tat ca cac exami trong profile tuong ung
    async getAllExaminationForProfile (req, res) {
        try {
            const userId = req.query.userId;
            const data = await prisma.profile.findFirst({
                where : {
                    id : userId,
                },
                select : {
                    title : true,
                    listExamination : {
                        select : {
                            id : true,
                            createAt : true,
                            comment : true,
                        },
                        orderBy : {
                            createAt : "asc"
                        }
                    }
                }
            })  
            const datas = {
                title : data.title,
                examination : data.listExamination
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

    async getAllResultForExami (req, res) {
        try {
            const userId = req.query.userId;
            const data = await prisma.examination.findFirst({
                where : {
                    id : userId,
                },
                select : {
                    comment : true,
                    listResult: {
                        select : {
                            id: true,
                            image : true,
                            comment : true,
                            name : true,
                        }
                    }
                }
            })  
            const datas = {
                comment : data.comment,
                result : data.listResult
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


    async getAllDataForProfile (req, res) {
        try {
            const Id = req.query.Id;
            const data = await prisma.examination.findMany({
                where : {
                    profileId : Id
                },
                select : {
                    id : true,
                    createAt : true,
                    comment : true,
                    listResult : {
                        select : {
                            id : true,
                            name : true,
                            comment : true,
                            image : true,
                        }
                    }
                },
                orderBy : {
                    createAt : "desc"
                }
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

    // create new exami for the web 
    
}

module.exports = new ExaminationController