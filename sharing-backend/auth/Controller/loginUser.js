import bcrypt from "bcrypt";
import User from "../Models/User.js";
import generateAccessToken from "../../utils/generateToken.js";

const loginUser = (req, res) => {
  const { username, password } = req.body;

  if (username.length === 0 && password.length === 0) {
    res.status(401).json({
      success: false,
      desc: "invalid credentials",
    });
    return null;
  }

  User.findOne({ username }).then((user) => {
    if (!user)
      res.status(404).json({
        success: false,
        desc: "user not found",
      });
    else {
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          res.status(503).json({
            success: false,
            desc: "something went wrong",
          });
          return null;
        }
        if (isMatch) {
          const accessToken = generateAccessToken({ user: user.username });
          res.json({
            success: true,
            username: user.username,
            fullname: user.fullname,
            avatar: user.avatar,
            accesstoken: accessToken,
          });
        } else {
          res.status(501).json({
            success: false,
            desc: "Wrong Password",
          });
        }
      });
    }
  });
};

export default loginUser;
