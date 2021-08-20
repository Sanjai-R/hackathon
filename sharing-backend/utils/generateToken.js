import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign(user, "grjaejrg@jfg", { expiresIn: "2d" });
};

export default generateAccessToken;
