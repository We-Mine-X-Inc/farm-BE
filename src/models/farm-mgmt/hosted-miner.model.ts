import { Schema, Document, Connection } from "mongoose";
import { HostedMiner, MinerNetworkStatus, MinerApiType } from "wemine-apis";

const hostedMinerStatusSchema = {
  lastOnlineDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  networkStatus: {
    type: Number,
    enum: MinerNetworkStatus,
    required: true,
  },
  poolIsBeingSwitched: {
    type: Boolean,
    required: true,
    default: false,
  },
};

const rackLocationSchema = {
  facility: {
    type: String,
    required: false,
  },
  rack: {
    type: String,
    required: false,
  },
  slot: {
    type: String,
    required: false,
  },
};

const hostedMinerSchema: Schema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  miner: {
    type: Schema.Types.ObjectId,
    ref: "Miner",
    required: true,
  },
  friendlyMinerId: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  macAddress: {
    type: String,
    required: true,
  },
  API: {
    type: Number,
    enum: MinerApiType,
    required: true,
  },
  status: hostedMinerStatusSchema,
  rackLocation: rackLocationSchema,
});

export function loadHostedMinerModel(connection: Connection) {
  return (
    connection.models["HostedMiner"] ||
    connection.model<HostedMiner & Document>("HostedMiner", hostedMinerSchema)
  );
}
