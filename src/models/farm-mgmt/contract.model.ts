import {
  CoinType,
  Contract,
  ContractStage,
  MinerHostingConfigurationStage,
  MinerIntakeStage,
  MinerResaleStage,
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

const hostingContractSchema = {
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
};

const poolActivitySchema = {
  expectedActivePoolIndex: {
    type: Number,
    required: true,
  },
};

const resaleContractSchema = {
  resaleStage: {
    type: Number,
    enum: MinerResaleStage,
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

const contractSchema: Schema = new Schema({
  previousContract: {
    type: Schema.Types.ObjectId,
    ref: "Contract",
    required: false,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  miner: {
    type: Schema.Types.ObjectId,
    ref: "Miner",
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
  hostingContract: hostingContractSchema,
  resaleContract: resaleContractSchema,
  marketInfoAtRatification: marketInfoAtRatificationSchema,
  poolActivity: poolActivitySchema,
});

export function loadContractModel(connection: Connection) {
  return (
    connection.models["Contract"] ||
    connection.model<Contract & Document>("Contract", contractSchema)
  );
}
