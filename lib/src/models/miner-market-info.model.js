"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
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
const minerMarketInfoModel = mongoose_1.default.models["MinerMarketInfo"] ||
    (0, mongoose_1.model)("MinerMarketInfo", minerMarketInfoSchema);
exports.default = minerMarketInfoModel;
//# sourceMappingURL=miner-market-info.model.js.map