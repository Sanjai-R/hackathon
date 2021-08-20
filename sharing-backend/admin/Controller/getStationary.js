import { Stationary } from "../InterCOM/models.js";

const getStationary = (req, res) => {
  const userId = req.user._id;
  Stationary.find({ uploadby: userId, isasked: true })
    .then((stationary) => {
      res.json({
        success: true,
        data: stationary,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        success: false,
        desc: "something went wrong. try again",
      });
    });
};

export default getStationary;
