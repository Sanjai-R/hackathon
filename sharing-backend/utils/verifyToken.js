import User from "../auth/Models/User.js";
import jwt from "jsonwebtoken";

const CLIENT_DOMAIN = "http://localhost:3000";

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader === "Bearer null")
    return res.redirect(`${CLIENT_DOMAIN}/login`);

  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.redirect(`${CLIENT_DOMAIN}/login`);

  jwt.verify(token, "grjaejrg@jfg", (err, data) => {
    if (err) return res.redirect(`${CLIENT_DOMAIN}/login`);
    User.findOne({ username: data.user })
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        res.redirect(`${CLIENT_DOMAIN}/login`);
      });
  });
};

export default VerifyToken;
