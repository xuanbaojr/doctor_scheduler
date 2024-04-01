import instance from "../utils/axios";

const getAllDoctor = async () => {
    return instance.get('/doctors')
}

const getDoctorById = async (id) => {
    return instance.get('/doctor/${id}')
}
export {
    getAllDoctor
}