import { Schema, Document, Connection } from "mongoose";
import { HashAlgorithmType, InventoryItemStatus, Miner } from "wemine-apis";

const hashRateRangeSchema = {
  minimum: {
    type: Number,
    required: true,
  },
  maximum: {
    type: Number,
    required: true,
  },
};

const minerMetadataSchema = {
  hashAlgorithmType: {
    type: Number,
    enum: HashAlgorithmType,
    required: true,
  },
  expectedHashRateRange: hashRateRangeSchema,
};

const minerSchema: Schema = new Schema({
  status: {
    type: Number,
    enum: InventoryItemStatus,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  details: {
    type: Schema.Types.ObjectId,
    ref: "MinerDetails",
    required: true,
  },
  metadata: minerMetadataSchema,
});

export function minerModel(connection: Connection) {
  return (
    connection.models["Miner"] ||
    connection.model<Miner & Document>("Miner", minerSchema)
  );
}
