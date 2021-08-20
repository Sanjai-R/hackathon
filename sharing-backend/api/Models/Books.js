import mongoose from "mongoose";

const booksSchema = mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  bookdesc: {
    type: String,
    required: true,
  },
  bookimagepath: {
    type: String,
    required: true,
  },
  uploadby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  upload_at: {
    type: String,
    required: true,
    default: Date.now(),
  },
  isasked: {
    type: Boolean,
    required: true,
    default: false,
  },
  askedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const BooksModel = mongoose.model("Book", booksSchema);

export default BooksModel;
