import Stationary from "../Models/Stationary.js";

const getStationaryByID = (req, res) => {
  const { id } = req.query;
  if (id === undefined) {
    res.status(406).json({
      success: false,
      desc: "Invalid Query",
    });
    return null;
  }
  Stationary.findById(id)
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
        desc: "Something Wrong",
      });
    });
};

export default getStationaryByID;
