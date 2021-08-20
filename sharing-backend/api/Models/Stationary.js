import mongoose from "mongoose";

const stationarySchema = mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  productdesc: {
    type: String,
    required: true,
  },
  productimagepath: {
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

const StationaryModel = mongoose.model("Stationary", stationarySchema);

export default StationaryModel;
