import dotenv from "dotenv";
dotenv.config();

import express from "express";

import fs from "fs";
import path from "path";

import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";

import router from "./Routes/index.js";

//constants
const app = express();
const __dirname = path.resolve();

//middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(compression());
app.use(helmet());

//logger
app.use(
  morgan("common", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
    stream: fs.createWriteStream(path.join(__dirname, "logs/auth.log")),
  })
);

//route
app.use("/", router);

export default app;
