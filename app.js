import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/web.js";
import { connectDb } from "./db/connectDb.js";
import cors from "cors";
import bodyParser from "body-parser";
const port = process.env.PORT || 8400;

// configure dotenv
dotenv.config();

// initialize app
const app = express();

// static file load
app.use(express.static("frontend"));

// allow cors
app.use(cors());

// get form encoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load routes
app.use("/", router);

// template engine
app.set("view engine", "ejs");

// connecting database
connectDb(
  "mongodb+srv://bebekdas7:bebekdas7@vivek.ffunkje.mongodb.net/?retryWrites=true&w=majority"
);

// listen to browser port
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${process.env.PORT} `);
});
