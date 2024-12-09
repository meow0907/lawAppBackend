import mongoose from "mongoose";
import { dbUrl } from "../config/config.js";

export const connectDb = async () => {
    mongoose.set("strictQuery", false)

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        await mongoose.connect(dbUrl, options)
        console.log(`Mongodb is connected at law_app successfully`)
    } catch (error) {
        console.log(error.message)
    }
}