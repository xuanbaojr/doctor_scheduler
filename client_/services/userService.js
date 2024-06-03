import instance from "../utils/axios";

const fecthUser = async () => {
    return instance.get("/user")
}