import { Stationary } from "../InterCOM/models.js";
import WareHouse from "../Models/WareHouse.js";

const approveStationary = (req, res) => {
  const { id } = req.query;

  Stationary.findByIdAndDelete(id)
    .then(async (success) => {
      await WareHouse.updateOne(
        { id: "Warehouse" },
        {
          $inc: {
            stationaryCount: 1,
          },
        }
      );
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        success: false,
        desc: "Something Went Wrong. Try again",
      });
    });
};

export default approveStationary;
