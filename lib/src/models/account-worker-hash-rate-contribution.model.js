"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const time_model_1 = require("./performance/time.model");
const workerHashRateContributionSchema = new mongoose_1.Schema({
    accountAddress: {
        type: String,
        required: true,
    },
    timeRange: Object.assign({}, time_model_1.TimeRangeSchema),
    clientWorkers: {
        type: String,
        required: true,
        default: JSON.stringify({}),
    },
    companyWorkers: {
        type: String,
        required: true,
        default: JSON.stringify({}),
    },
});
const workerHashRateContributionModel = (0, mongoose_1.model)("WorkerHashRateContribution", workerHashRateContributionSchema);
exports.default = workerHashRateContributionModel;
//# sourceMappingURL=account-worker-hash-rate-contribution.model.js.map