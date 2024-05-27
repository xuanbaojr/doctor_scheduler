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
                include : {
                    listExamination : {
                        select : {
                            id : true,
                            createAt : true,
                            comment : true,
                        }
                    }
                }
            })  
            res.send(data?.listExamination)
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
                include : {
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
            res.send(data?.listResult)
        }catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }

}

module.exports = new ExaminationController