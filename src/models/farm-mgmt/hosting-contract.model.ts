import {
  CoinType,
  HostingContract,
  ContractStage,
  MinerHostingConfigurationStage,
  MinerIntakeStage,
} from "wemine-apis";
import { Schema, Document, Types, Connection } from "mongoose";

const contractDurationSchema = {
  startDateInMillis: {
    type: Number,
    required: true,
  },
  endDateInMillis: {
    type: Number,
    required: true,
  },
};

const poolMiningOptionsSchema = {
  pool: {
    type: Schema.Types.ObjectId,
    ref: "Pool",
    required: true,
  },
  miningDurationInMillis: {
    type: Number,
    required: true,
  },
};

const poolActivitySchema = {
  expectedActivePoolIndex: {
    type: Number,
    required: true,
  },
};

const coinMarketInfoSchema = {
  coinType: {
    type: Number,
    enum: CoinType,
    required: true,
  },
  minerInventoryItem: {
    type: Types.ObjectId,
    required: true,
  },
  dailyCoinEarning: {
    type: Number,
    required: true,
  },
};

const minerMarketInfoSchema = {
  coinType: {
    type: Number,
    enum: CoinType,
    required: true,
  },
  coinPrice: {
    type: Number,
    required: true,
  },
};

const marketInfoAtRatificationSchema = {
  coinMarketInfo: coinMarketInfoSchema,
  minerMarketInfo: minerMarketInfoSchema,
};

const hostingContractSchema: Schema = new Schema({
  previousContract: {
    type: Schema.Types.ObjectId,
    ref: "HostingContract",
    required: false,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  hostedMiner: {
    type: Schema.Types.ObjectId,
    ref: "HostedMiner",
    required: true,
  },
  contractStage: {
    type: Number,
    enum: ContractStage,
    required: true,
  },
  minerIntakeStage: {
    type: Number,
    enum: MinerIntakeStage,
    required: true,
  },
  hostingStage: {
    type: Number,
    enum: MinerHostingConfigurationStage,
    required: true,
  },
  contractDuration: contractDurationSchema,
  finalCompanyPool: {
    type: Schema.Types.ObjectId,
    ref: "Pool",
    required: true,
  },
  poolMiningOptions: [poolMiningOptionsSchema],
  marketInfoAtRatification: marketInfoAtRatificationSchema,
  poolActivity: poolActivitySchema,
});

export function loadHostingContractModel(connection: Connection) {
  return (
    connection.models["HostingContract"] ||
    connection.model<HostingContract & Document>(
      "HostingContract",
      hostingContractSchema
    )
  );
}
