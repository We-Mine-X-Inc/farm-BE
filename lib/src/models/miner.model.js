"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wemine_apis_1 = require("wemine-apis");
const minerStatusSchema = {
    lastOnlineDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    networkStatus: {
        type: Number,
        enum: wemine_apis_1.MinerNetworkStatus,
        required: true,
    },
    poolIsBeingSwitched: {
        type: Boolean,
        required: true,
        default: false,
    },
};
const rackLocationSchema = {
    facility: {
        type: String,
        required: false,
    },
    rack: {
        type: String,
        required: false,
    },
    slot: {
        type: String,
        required: false,
    },
};
const minerSchema = new mongoose_1.Schema({
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    inventoryItem: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "InventoryItem",
        required: true,
    },
    friendlyMinerId: {
        type: String,
        required: true,
    },
    ipAddress: {
        type: String,
        required: true,
    },
    macAddress: {
        type: String,
        required: true,
    },
    API: {
        type: Number,
        enum: wemine_apis_1.MinerApiType,
        required: true,
    },
    status: minerStatusSchema,
    rackLocation: rackLocationSchema,
});
const minerModel = (0, mongoose_1.model)("Miner", minerSchema);
exports.default = minerModel;
//# sourceMappingURL=miner.model.js.map