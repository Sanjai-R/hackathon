import User from "../auth/Models/User.js";
import jwt from "jsonwebtoken";

const CLIENT_DOMAIN = "https://share-appfrontend.vercel.app";

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader === "Bearer null") {
    console.log("head null");
    res.json({
      success: false,
    });
    return;
  }
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    console.log("null");
    res.json({
      success: false,
    });
    return;
  }

  jwt.verify(token, "grjaejrg@jfg", (err, data) => {
    if (err) {
      console.log("invalid");
      res.json({
        success: false,
      });
      return;
    }
    User.findOne({ username: data.user })
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        console.log("catch");
        res.json({
          success: false,
        });
      });
  });
};

export default VerifyToken;
