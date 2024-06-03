const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class chatController{
    async getChat(req,res) {
        try {
            const data = await prisma.chat.findMany()
            console.log(data)
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }

    async getChatByNurseId(req,res) {
        try {
            const nurse_id = req.params.nurse_id
            const data = await prisma.chat.findMany({
                where:{
                    nurse_id:nurse_id
                }
            })
            console.log(data)
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }

    async createChat(req,res) {
        try {
            const {sender, receiver, content} = req.body
            const data = await prisma.chat.create(
                {
                    data:{
                        sender: sender,
                        receiver: receiver,
                        content: content
                    }
                }
            )
            console.log(data)
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }

    
    async getChatByCustomerId(req,res) {
        try {
            const customer_id = req.params.customer_id
            console.log(customer_id)
            const data = await prisma.chat.findMany({
                where:{
                    OR:[
                        {
                            sender: customer_id
                        },
                        {
                            receiver: customer_id
                        }
                    ]
                }
            })
            // console.log(data)
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }

    async getListCustomer(req, res) {
        try {
            const {nurse_id} = req.params
            const data = await prisma.chat.findMany({
                where:{
                    receiver: nurse_id
                },
                orderBy:{
                    sender:'desc'
                }
            });
            console.log(data)
    
            const uniqueCustomers = new Set();
            data.forEach(order => {
                uniqueCustomers.add(order.sender);
            });
    
            const customerPromises = []; 
    
            for (const sender of uniqueCustomers) {
                // Thêm hứa từ vào mảng
                customerPromises.push(
                    prisma.Customer.findMany({
                        where: {
                            id: sender
                        }
                    })
                );
            }
                const customers = await Promise.all(customerPromises);
    
            console.log(customers);
            res.send(customers);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }
    
    
    async getChatHistory(req,res) {
        try {
            const member = req.params.member
            const member_array = member.split(",")
            console.log(member_array)
            
            const data = await prisma.chat.findMany({
                where:{
                    member: {
                        in :member_array
                    }
                }
            })

            console.log("get_history" + data)
            res.send(data)

        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }

    async getUpdateChat(req,res) {
        try {
            const current_id = req.params.current_id
            console.log("get_update_chat" + current_id)
            const data = await prisma.chat.findMany({
                where:{
                    OR:[
                        {
                            sender: current_id
                        },
                        {
                            receiver: current_id
                        }
                    ]
                }
            })
            // console.log(data)
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }
    

}
module.exports = new chatController()