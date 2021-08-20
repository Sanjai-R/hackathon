import { Books } from "../InterCOM/models.js";
import WareHouse from "../Models/WareHouse.js";

const approveBook = (req, res) => {
  const { bookid } = req.query;

  Books.findByIdAndDelete(bookid)
    .then(async (success) => {
      await WareHouse.updateOne(
        { id: "Warehouse" },
        {
          $inc: {
            bookscount: 1,
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

export default approveBook;
