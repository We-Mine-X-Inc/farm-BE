"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wemine_apis_1 = require("wemine-apis");
const minerMarketInfoSchema = new mongoose_1.Schema({
    minerInventoryItem: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "InventoryItem",
        required: true,
    },
    coinType: {
        type: Number,
        enum: wemine_apis_1.CoinType,
        required: true,
    },
    dailyCoinEarning: {
        type: Number,
        required: true,
    },
});
const minerMarketInfoModel = (0, mongoose_1.model)("MinerMarketInfo", minerMarketInfoSchema);
exports.default = minerMarketInfoModel;
//# sourceMappingURL=miner-market-info.model.js.map