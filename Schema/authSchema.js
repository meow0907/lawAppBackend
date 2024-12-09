import { Schema } from "mongoose";

let authSchema = Schema({
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true,
    }
}, { timestamps: true })

export default authSchema