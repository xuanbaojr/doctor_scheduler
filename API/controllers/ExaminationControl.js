const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class ExaminationControler {
    async fecthTimeForDisease (req, res) {
        const diseaseId = req.query.diseaseId
        console.log(diseaseId)
          try {

            const data = await prisma.profile.findFirst({
                where : {
                  id : diseaseId,
                },
                include : {
                  listExamination : {
                    select : {
                      id : true,
                      title : true,
                      createAt: true,
                    },
                    orderBy : {
                      createAt : "asc"
                    }
                  }
                }
            })
            console.log(data)
            res.send(data)
      
          } catch (error ) {
              console.log(error);
              res.status(500).json({
                  errorCode: 1,
                  msg: "Server" + error.message
              });
          }
      
      }
}

module.exports = new  ExaminationControler();