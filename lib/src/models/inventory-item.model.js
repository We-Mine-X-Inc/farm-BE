"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
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
const powerSwitchMetadataSchema = {
    clientDeviceName: {
        type: String,
        required: true,
    },
};
const operationalMetadataSchema = {
    minerMetadata: minerMetadataSchema,
    powerSwitchMetadata: powerSwitchMetadataSchema,
};
const inventoryItemSchema = new mongoose_1.Schema({
    operationalDependencies: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: "InventoryItem",
        required: false,
    },
    type: {
        type: Number,
        enum: wemine_apis_1.InventoryItemType,
        required: true,
    },
    status: {
        type: Number,
        enum: wemine_apis_1.InventoryItemStatus,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    operationalMetadata: operationalMetadataSchema,
});
const inventoryItemModel = mongoose_1.default.models["InventoryItem"] ||
    (0, mongoose_1.model)("InventoryItem", inventoryItemSchema);
exports.default = inventoryItemModel;
//# sourceMappingURL=inventory-item.model.js.map