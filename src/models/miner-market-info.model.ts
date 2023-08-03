import mongoose, { model, Schema, Document } from "mongoose";
import { CoinType, MinerMarketInfo } from "wemine-apis";

const minerMarketInfoSchema: Schema = new Schema({
  minerInventoryItem: {
    type: Schema.Types.ObjectId,
    ref: "InventoryItem",
    required: true,
  },
  coinType: {
    type: Number,
    enum: CoinType,
    required: true,
  },
  dailyCoinEarning: {
    type: Number,
    required: true,
  },
});

const minerMarketInfoModel =
  mongoose.models["MinerMarketInfo"] ||
  model<MinerMarketInfo & Document>("MinerMarketInfo", minerMarketInfoSchema);

export default minerMarketInfoModel;
