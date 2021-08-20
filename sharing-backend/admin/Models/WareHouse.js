import mongoose from "mongoose";

const warehouseSchema = mongoose.Schema({
  id: {
    type: String,
    default: "Warehouse",
  },
  bookscount: {
    type: Number,
    default: 0,
  },
  stationaryCount: {
    type: Number,
    default: 0,
  },
});

const WareHouseModel = mongoose.model("Warehouse", warehouseSchema);

export default WareHouseModel;
