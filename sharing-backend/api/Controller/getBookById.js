import Books from "../Models/Books.js";

const getBookByID = (req, res) => {
  const { id } = req.query;
  if (id === undefined) {
    res.status(406).json({
      success: false,
      desc: "Invalid Query",
    });
    return null;
  }
  Books.findById(id)
    .populate({
      path: "uploadby",
      model: "User",
      select: "-password -booksupload -stationaryupload -conversation",
    })
    .then((book) => {
      res.json({
        success: true,
        data: book,
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

export default getBookByID;
