const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class ProfileCOntroler {
    async fecthDiseaseForCustomer (req, res) {
      const customId = req.query.customId
      console.log(customId)
        try {
          
          const data = await prisma.customer.findFirst({
            where : {
              id : customId,
            },
            include : {
              listFile : {
                select : {
                  id : true,
                  title : true,
                  content : true,
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

module.exports = new  ProfileCOntroler();