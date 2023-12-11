import { Schema, Document, Connection } from "mongoose";
import { Pool, PoolPurposeType, PoolType } from "wemine-apis";

const poolSchema: Schema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  protocol: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  poolType: {
    type: Number,
    enum: PoolType,
    required: true,
  },
  apiToken: {
    type: String,
    required: false,
  },
  purpose: {
    type: Number,
    enum: PoolPurposeType,
    required: true,
  },
});

export function loadPoolModel(connection: Connection) {
  return (
    connection.models["Pool"] ||
    connection.model<Pool & Document>("Pool", poolSchema)
  );
}
