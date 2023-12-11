"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powerControllerModel = void 0;
const mongoose_1 = require("mongoose");
const inventory_item_1 = require("wemine-apis/lib/business-logic-interfaces/farm-maintenance/inventory-item");
const powerSwitchMetadataSchema = {
    friendlyMinerId: {
        type: String,
        required: true,
    },
    ipAddress: {
        type: String,
        required: true,
    },
};
const powerControllerSchema = new mongoose_1.Schema({
    status: {
        type: Number,
        enum: inventory_item_1.InventoryItemStatus,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    metadata: powerSwitchMetadataSchema,
});
function powerControllerModel(connection) {
    return (connection.models["PowerController"] ||
        connection.model("PowerController", powerControllerSchema));
}
exports.powerControllerModel = powerControllerModel;
//# sourceMappingURL=power-controller.model.js.map