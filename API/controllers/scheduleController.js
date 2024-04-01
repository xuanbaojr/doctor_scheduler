const { PrismaClient } = require('@prisma/client');

prisma = new PrismaClient()

class scheduleController {
    async bookClinic(req,res) {
        try {
            const data = await prisma.user.findMany()
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

    async getAllDoctors(req, res) {
        try {
            const data = await prisma.doctor.findMany()
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

    async getDoctorById(req, res) {
        try {
            const doctor_id = req.params.doctor_id
            const data = await prisma.doctor.findMany({
                where:{
                    id:doctor_id
                },
                include:{
                    clinics : {
                        where: {
                            doctor_id:doctor_id
                        },
                        include:{
                            Specialty: true
                        }
                    }
                    
                },
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

    async getDoctorBySpecialty(req, res) {
        try {
            const specialty_id = req.params.specialty_id
            const data = await prisma.clinic.findMany({
                where: { specialty_id: specialty_id },
                include :{
                    Doctor: true,
                    Specialty: true
                }
              });



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

    async getClinicByDoctor(req, res) {
        try {
            const doctor_id = req.params.doctor_id
            const data = await prisma.clinic.findMany({
                where:{
                    doctor_id:doctor_id
                },
                include:{
                    Specialty: true
                    
                },
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

    async createOrder(req, res) {
        try {
            const {doctorId, customerId, date_time, hour_time} = req.body
            console.log(date_time)
            const response = await prisma.order.create({
                data:{
                    time: [1],
                    date_time: date_time,
                    hour_time: hour_time,
                    comment:"ok",
                    done: false,
                    doctor :{
                        connect:{
                            id: doctorId
                        }
                    },
                    custom:{
                        connect:{
                            id: customerId
                        }
                    }
                }
            })
            console.log(response)
            res.send(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                errorCode:1,
                msg: "Server" + error.message
            })
        }
    }
    async getAllTime(req, res) {
        try {
            const response = await prisma.order.findMany({
                where: {
                    date_time: {
                        not: null
                    }
                }
            });
            
            // Tạo một mảng mới chỉ chứa giá trị của cột data_time
            const dataTimes = response.map(order => order.date_time);
            
            console.log(dataTimes);
            res.send(dataTimes);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }

    async getHourByDate(req, res) {
        try {

            const { doctor_id, date_time } = req.params; // Extract doctor_id and date_time from URL params
            console.log("date_time" + date_time)
            const response = await prisma.order.findMany({
                where: {
                    hour_time:{
                        not:null
                    },
                    date_time: date_time,
                    doctorId: doctor_id
                }
            });
            
            // Tạo một mảng mới chỉ chứa giá trị của cột data_time
            const dataTimes = response.map(order => order.hour_time);
            
            console.log(dataTimes);
            res.send(dataTimes);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                errorCode: 1,
                msg: "Server" + error.message
            });
        }
    }
    
    
}


module.exports = new scheduleController()