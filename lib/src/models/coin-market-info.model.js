"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wemine_apis_1 = require("wemine-apis");
const coinMarketInfoSchema = new mongoose_1.Schema({
    coinType: {
        type: Number,
        enum: wemine_apis_1.CoinType,
        required: true,
    },
    coinPrice: {
        type: Number,
        required: true,
    },
});
const coinMarketInfoModel = (0, mongoose_1.model)("CoinMarketInfo", coinMarketInfoSchema);
exports.default = coinMarketInfoModel;
//# sourceMappingURL=coin-market-info.model.js.map