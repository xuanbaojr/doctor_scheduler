import { db } from "../database/db"


export const CreateThreads = async () => {
    try {
        await db.thread.create({
            data : {
                name : "as",
                sex : "man",
                age : "19",
                content : "asdas",
            }
        })
    } catch {

    }
}