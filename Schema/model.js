import { model } from "mongoose";
import authSchema from "./authSchema.js";

export const Auth = model("Auth", authSchema)
