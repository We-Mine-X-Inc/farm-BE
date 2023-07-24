/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateInventoryItemReqeust } from "wemine-apis";
import { InventoryItem } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Exposes operations allowable on the InventoryItem database resource.
 */
export declare class InventoryItemService {
    inventoryItems: import("mongoose").Model<InventoryItem & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, InventoryItem & import("mongoose").Document<any, any, any>> & InventoryItem & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, any>;
    findAllInventoryItems(): Promise<InventoryItem[]>;
    findInventoryItemById(inventoryItemId: Types.ObjectId): Promise<InventoryItem>;
    createInventoryItem(inventoryItemData: CreateInventoryItemReqeust): Promise<InventoryItem>;
    updateInventoryItem(inventoryItemId: Types.ObjectId, inventoryItemData: CreateInventoryItemReqeust): Promise<InventoryItem>;
    deleteInventoryItem(inventoryItemId: Types.ObjectId): Promise<InventoryItem>;
}
//# sourceMappingURL=inventory-item.service.d.ts.map