"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
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
const hostingContractSchema = {
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
        enum: wemine_apis_1.MinerResaleStage,
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
const contractSchema = new mongoose_1.Schema({
    previousContract: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Contract",
        required: false,
    },
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    miner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Miner",
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
    hostingContract: hostingContractSchema,
    resaleContract: resaleContractSchema,
    marketInfoAtRatification: marketInfoAtRatificationSchema,
    poolActivity: poolActivitySchema,
});
const contractModel = mongoose_1.default.models["Contract"] ||
    (0, mongoose_1.model)("Contract", contractSchema);
exports.default = contractModel;
//# sourceMappingURL=contract.model.js.map