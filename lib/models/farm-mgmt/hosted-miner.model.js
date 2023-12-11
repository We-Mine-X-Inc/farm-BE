"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadHostedMinerModel = void 0;
const mongoose_1 = require("mongoose");
const wemine_apis_1 = require("wemine-apis");
const hostedMinerStatusSchema = {
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
const hostedMinerSchema = new mongoose_1.Schema({
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    miner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Miner",
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
    status: hostedMinerStatusSchema,
    rackLocation: rackLocationSchema,
});
function loadHostedMinerModel(connection) {
    return (connection.models["HostedMiner"] ||
        connection.model("HostedMiner", hostedMinerSchema));
}
exports.loadHostedMinerModel = loadHostedMinerModel;
//# sourceMappingURL=hosted-miner.model.js.map