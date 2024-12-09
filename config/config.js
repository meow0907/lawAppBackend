import { config } from "dotenv";


config()

export const port = Number(process.env.PORT) || 8080;
export const dbUrl = process.env.DB_URL

export const staticFolder = "./public";
