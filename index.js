import express, { json } from "express";
import { config } from "dotenv";
import { connectDb } from "./connectdb/db.js";
import { port, staticFolder } from "./config/config.js";
import bodyParser from "body-parser";
import cors from "cors";
import { Auth } from "./Schema/model.js";
import successResponseData from "./helper/successResponseData.js";
import { HttpStatus } from "./constant/constant.js";
import { failResponseData } from "./helper/throwError.js";
const app = express();

//cors setup
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentials: true,
  })
);

//Body Parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(json());

//database connection
// connectDb();

//configuration for dotenv
config();

//for static files serving
app.use(express.static(staticFolder));

// testing the routes
app.get("/", (req, res) => {
  res.send("Namaste from lawapp backend");
});

// Login Route
app.post("/login", async (req, res) => {
  console.log("/login hit success");
  let username = req.body.username;
  let password = req.body.password;
  // let user = await Auth.findOne({ username });
  let user;
  if (username === "anjila" && password === "123") user = "anjila";
  if (username === "rekha" && password === "123") user = "rekha";
  if (username === "keshab" && password === "123") user = "keshab";
  if (username === "barsat" && password === "123") user = "barsat";
  if (user === null) {
    failResponseData({
      res,
      message: "Please enter valid username or password.",
      statusCode: 401,
    });
  } else {
    if (password === "123") {
      successResponseData({
        res,
        message: "Login Successfully.",
        statusCode: HttpStatus.OK,
        data: {
          user: user,
        },
      });
    } else {
      failResponseData({
        res,
        message: "Please enter valid username or password.",
        statusCode: 401,
      });
    }
  }
});

//logout user
app.get("/logout", async (req, res, next) => {
  console.log(req);

  successResponseData({
    res,
    message: "Logout successfully.Route to login page from frontend",
    statusCode: HttpStatus.OK,
  });
});

//start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
