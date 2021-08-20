import Stationary from "../Models/Stationary.js";

const getStationary = (req, res) => {
  const { limit } = req.query;

  if (limit === "all") {
    Stationary.find()
      .sort({ _id: -1 })
      .populate({
        path: "uploadby",
        model: "User",
        select: "-password -booksupload -stationaryupload -conversation",
      })
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
          desc: "something went wrong",
        });
      });
  } else {
    Stationary.find()
      .sort({ _id: -1 })
      .populate({
        path: "uploadby",
        model: "User",
        select: "-password -booksupload -stationaryupload -conversation",
      })
      .limit(parseInt(limit))
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
          desc: "something went wrong",
        });
      });
  }
};

export default getStationary;
