"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryItemService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const wemine_apis_2 = require("wemine-apis");
const inventory_item_model_1 = tslib_1.__importDefault(require("../models/inventory-item.model"));
const util_1 = require("../utils/util");
const mongoose_1 = require("mongoose");
/**
 * Exposes operations allowable on the InventoryItem database resource.
 */
class InventoryItemService {
    constructor() {
        this.inventoryItems = inventory_item_model_1.default;
    }
    findAllInventoryItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inventoryItems = yield this.inventoryItems
                .find()
                .populate(wemine_apis_2.INVENTORY_ITEM_FIELDS_TO_POPULATE);
            return inventoryItems;
        });
    }
    findInventoryItemById(inventoryItemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (mongoose_1.Types.ObjectId.isValid(inventoryItemId))
                throw new wemine_apis_1.RpcException(400, "You're not inventoryItemId");
            const findInventoryItem = yield this.inventoryItems
                .findOne({ _id: inventoryItemId })
                .populate(wemine_apis_2.INVENTORY_ITEM_FIELDS_TO_POPULATE);
            if (!findInventoryItem)
                throw new wemine_apis_1.RpcException(409, "You're not inventoryItem");
            return findInventoryItem;
        });
    }
    createInventoryItem(inventoryItemData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(inventoryItemData))
                throw new wemine_apis_1.RpcException(400, "You're not inventoryItemData");
            const createInventoryItemData = yield this.inventoryItems.create(Object.assign({}, inventoryItemData));
            return createInventoryItemData;
        });
    }
    updateInventoryItem(inventoryItemId, inventoryItemData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(inventoryItemData))
                throw new wemine_apis_1.RpcException(400, "You're not inventoryItemData");
            const updateInventoryItemById = yield this.inventoryItems.findByIdAndUpdate(inventoryItemId, Object.assign({}, inventoryItemData));
            if (!updateInventoryItemById)
                throw new wemine_apis_1.RpcException(409, "You're not inventoryItem");
            return updateInventoryItemById;
        });
    }
    deleteInventoryItem(inventoryItemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteInventoryItemById = yield this.inventoryItems.findByIdAndDelete(inventoryItemId);
            if (!deleteInventoryItemById)
                throw new wemine_apis_1.RpcException(409, "You're not inventoryItem");
            return deleteInventoryItemById;
        });
    }
}
exports.InventoryItemService = InventoryItemService;
//# sourceMappingURL=inventory-item.service.js.map