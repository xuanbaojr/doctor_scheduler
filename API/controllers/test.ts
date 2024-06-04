import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async postNewResultImage (req, res) {
        try {
            const {
                examiId,
                image
            } = req.body
            // console.log(profileId + " " + name)
            await prisma.result.update({
                where : {
                    id : examiId
                }, 
                data : {
                    image : image
                }
            })
        }catch (error ) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }
}