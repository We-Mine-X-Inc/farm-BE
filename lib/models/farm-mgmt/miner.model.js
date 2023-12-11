"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minerModel = void 0;
const mongoose_1 = require("mongoose");
const wemine_apis_1 = require("wemine-apis");
const hashRateRangeSchema = {
    minimum: {
        type: Number,
        required: true,
    },
    maximum: {
        type: Number,
        required: true,
    },
};
const minerMetadataSchema = {
    hashAlgorithmType: {
        type: Number,
        enum: wemine_apis_1.HashAlgorithmType,
        required: true,
    },
    expectedHashRateRange: hashRateRangeSchema,
};
const minerSchema = new mongoose_1.Schema({
    status: {
        type: Number,
        enum: wemine_apis_1.InventoryItemStatus,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    details: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "MinerDetails",
        required: true,
    },
    metadata: minerMetadataSchema,
});
function minerModel(connection) {
    return (connection.models["Miner"] ||
        connection.model("Miner", minerSchema));
}
exports.minerModel = minerModel;
//# sourceMappingURL=miner.model.js.map