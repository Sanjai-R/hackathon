import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";

// middlewares
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

// subapps

import api from "../api/app.js";
import auth from "../auth/app.js";
import admin from "../admin/app.js";

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(compression());
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// subapps

app.use("/api", api);
app.use("/auth", auth);
app.use("/admin", admin);

app.get("/", (req, res) => {
  res.send("Hello From Express");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server Running On PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`ERROR :  ${err}`);
  });
