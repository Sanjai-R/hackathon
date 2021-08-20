import { Books } from "../InterCOM/models.js";

const denyBook = (req, res) => {
  const { bookid } = req.query;

  Books.findOneAndUpdate(
    { _id: bookid },
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

export default denyBook;
