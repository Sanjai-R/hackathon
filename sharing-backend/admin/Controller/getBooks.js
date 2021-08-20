import { Books } from "../InterCOM/models.js";

const getBooks = (req, res) => {
  const userId = req.user._id;
  Books.find({ uploadby: userId, isasked: true })
    .then((books) => {
      res.json({
        success: true,
        data: books,
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

export default getBooks;
