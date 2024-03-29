"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadHostingContractModel = void 0;
const wemine_apis_1 = require("wemine-apis");
const mongoose_1 = require("mongoose");
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
        type: mongoose_1.Schema.Types.ObjectId,
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
        enum: wemine_apis_1.CoinType,
        required: true,
    },
    minerInventoryItem: {
        type: mongoose_1.Types.ObjectId,
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
        enum: wemine_apis_1.CoinType,
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
const hostingContractSchema = new mongoose_1.Schema({
    previousContract: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "HostingContract",
        required: false,
    },
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    hostedMiner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "HostedMiner",
        required: true,
    },
    contractStage: {
        type: Number,
        enum: wemine_apis_1.ContractStage,
        required: true,
    },
    minerIntakeStage: {
        type: Number,
        enum: wemine_apis_1.MinerIntakeStage,
        required: true,
    },
    hostingStage: {
        type: Number,
        enum: wemine_apis_1.MinerHostingConfigurationStage,
        required: true,
    },
    contractDuration: contractDurationSchema,
    finalCompanyPool: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Pool",
        required: true,
    },
    poolMiningOptions: [poolMiningOptionsSchema],
    marketInfoAtRatification: marketInfoAtRatificationSchema,
    poolActivity: poolActivitySchema,
});
function loadHostingContractModel(connection) {
    return (connection.models["HostingContract"] ||
        connection.model("HostingContract", hostingContractSchema));
}
exports.loadHostingContractModel = loadHostingContractModel;
//# sourceMappingURL=hosting-contract.model.js.map