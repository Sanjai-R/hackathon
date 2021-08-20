import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://miro.medium.com/max/790/1*reXbWdk_3cew69RuAUbVzg.png",
  },
  ischat: {
    type: Boolean,
    required: true,
    default: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  conversation: Array,
  booksupload: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  stationaryupload: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Stationary" },
  ],
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
