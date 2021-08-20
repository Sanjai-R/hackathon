import Books from "../Models/Books.js";

const getBooks = (req, res) => {
  const { limit } = req.query;

  if (limit === "all") {
    Books.find()
      .sort({ _id: -1 })
      .populate({
        path: "uploadby",
        model: "User",
        select: "-password -booksupload -stationaryupload -conversation",
      })
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
          desc: "something went wrong",
        });
      });
  } else {
    Books.find()
      .populate({
        path: "uploadby",
        model: "User",
        select: "-password -booksupload -stationaryupload -conversation",
      })
      .sort({ _id: -1 })
      .limit(parseInt(limit))
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
          desc: "something went wrong",
        });
      });
  }
};

export default getBooks;
