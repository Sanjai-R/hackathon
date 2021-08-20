import { User } from "../InterCOM/models.js";

const getSettings = (req, res) => {
  const userId = req.user._id;

  User.findById(userId, "ischat, avatar")
    .then((user) => {
      res.json({
        success: true,
        data: user,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        success: false,
        desc: "Something Wrong",
      });
    });
};

export default getSettings;
