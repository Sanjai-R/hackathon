import { Stationary } from "../InterCOM/models.js";

const denyStationary = (req, res) => {
  const { id } = req.query;

  Stationary.findOneAndUpdate(
    { _id: id },
    {
      isasked: false,
      askedby: null,
    },
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          desc: "Something Went Wrong. Try again",
        });
      } else {
        res.json({
          success: true,
        });
      }
    }
  );
};

export default denyStationary;
