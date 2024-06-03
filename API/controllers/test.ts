import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



class test {
    async createNewExamiForWeb (req, res) {
        try {
            const profileId = req.query.profileId;
            const data = await prisma.examination.create({
                data : {
                    comment : "sda",
                    profile : profileId,
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