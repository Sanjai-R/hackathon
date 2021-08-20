import bcrypt from "bcrypt";
import User from "../Models/User.js";
import generateAccessToken from "../../utils/generateToken.js";

const createUser = (req, res) => {
  const { username, fullname, email, password } = req.body;

  const register = new User({
    username,
    fullname,
    email,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      register.password = hash;
      register.save((err) => {
        if (err) {
          if (err.name === "MongoError" && err.code === 11000) {
            return res.json({
              success: false,
              isUserExsisted: true,
              desc: "Username Already Exsited. Try Other names",
            });
          } else {
            console.error(err);
            return res.json({
              success: false,
              desc: "Something Went Wrong. Try After Few Minutes",
            });
          }
        } else {
          const accessToken = generateAccessToken({ user: username });
          res.json({
            success: true,
            username: username,
            fullname,
            avatar:
              "https://miro.medium.com/max/790/1*reXbWdk_3cew69RuAUbVzg.png",
            accesstoken: accessToken,
          });
        }
      });
    });
  });
};

export default createUser;
