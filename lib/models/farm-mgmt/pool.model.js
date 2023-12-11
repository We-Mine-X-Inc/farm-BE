"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPoolModel = void 0;
const mongoose_1 = require("mongoose");
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
function loadPoolModel(connection) {
    return (connection.models["Pool"] ||
        connection.model("Pool", poolSchema));
}
exports.loadPoolModel = loadPoolModel;
//# sourceMappingURL=pool.model.js.map