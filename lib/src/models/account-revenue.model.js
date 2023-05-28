"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const revenue_model_1 = require("./performance/revenue.model");
const time_model_1 = require("./performance/time.model");
const accountRevenueSchema = new mongoose_1.Schema({
    accountAddress: {
        type: String,
        required: true,
    },
    timeRange: Object.assign({}, time_model_1.TimeRangeSchema),
    cummulativeProfits: Object.assign({}, revenue_model_1.RevenueSchema),
});
const accountRevenueModel = (0, mongoose_1.model)("MiningAccountRevenue", accountRevenueSchema);
exports.default = accountRevenueModel;
//# sourceMappingURL=account-revenue.model.js.map