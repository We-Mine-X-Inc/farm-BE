"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueSchema = void 0;
const wemine_apis_1 = require("wemine-apis");
exports.RevenueSchema = {
    amount: { type: Number },
    coinType: { type: Number, enum: wemine_apis_1.CoinType },
};
//# sourceMappingURL=revenue.model.js.map