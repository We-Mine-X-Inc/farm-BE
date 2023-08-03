"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const wemine_apis_1 = require("wemine-apis");
const poolSchema = new mongoose_1.Schema({
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    protocol: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    poolType: {
        type: Number,
        enum: wemine_apis_1.PoolType,
        required: true,
    },
    apiToken: {
        type: String,
        required: false,
    },
    purpose: {
        type: Number,
        enum: wemine_apis_1.PoolPurposeType,
        required: true,
    },
});
const poolModel = mongoose_1.default.models["Pool"] || (0, mongoose_1.model)("Pool", poolSchema);
exports.default = poolModel;
//# sourceMappingURL=pool.model.js.map