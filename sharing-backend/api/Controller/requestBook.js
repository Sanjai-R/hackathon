import Books from "../Models/Books.js";

const requestBook = async (req, res) => {
  const { id } = req.query;

  const askeduser = req.user._id;

  Books.findByIdAndUpdate(
    id,
    {
      isasked: true,
      askedby: askeduser,
    },
    (err) => {
      if (err) {
        console.error(error);
        res.status(500).json({
          success: false,
          isasked: false,
          desc: "something went wrong, Try again",
        });
      } else {
        res.json({
          success: true,
          isasked: true,
        });
      }
    }
  );
};

export default requestBook;
