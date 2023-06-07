import { CreateInventoryItemReqeust } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { InventoryItem, INVENTORY_ITEM_FIELDS_TO_POPULATE } from "wemine-apis";
import inventoryItemModel from "@models/inventory-item.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";

/**
 * Exposes operations allowable on the InventoryItem database resource.
 */
export class InventoryItemService {
  public inventoryItems = inventoryItemModel;

  public async findAllInventoryItems(): Promise<InventoryItem[]> {
    const inventoryItems: InventoryItem[] = await this.inventoryItems
      .find()
      .populate(INVENTORY_ITEM_FIELDS_TO_POPULATE);
    return inventoryItems;
  }

  public async findInventoryItemById(
    inventoryItemId: Types.ObjectId
  ): Promise<InventoryItem> {
    const findInventoryItem = await this.inventoryItems
      .findOne({ _id: inventoryItemId })
      .populate(INVENTORY_ITEM_FIELDS_TO_POPULATE);

    if (!findInventoryItem)
      throw new RpcException(409, "You're not inventoryItem");

    return findInventoryItem;
  }

  public async createInventoryItem(
    inventoryItemData: CreateInventoryItemReqeust
  ): Promise<InventoryItem> {
    if (isEmpty(inventoryItemData))
      throw new RpcException(400, "You're not inventoryItemData");

    const createInventoryItemData: InventoryItem =
      await this.inventoryItems.create({ ...inventoryItemData });

    return createInventoryItemData;
  }

  public async updateInventoryItem(
    inventoryItemId: Types.ObjectId,
    inventoryItemData: CreateInventoryItemReqeust
  ): Promise<InventoryItem> {
    if (isEmpty(inventoryItemData))
      throw new RpcException(400, "You're not inventoryItemData");

    const updateInventoryItemById = await this.inventoryItems.findByIdAndUpdate(
      inventoryItemId,
      {
        ...inventoryItemData,
      }
    );
    if (!updateInventoryItemById)
      throw new RpcException(409, "You're not inventoryItem");

    return updateInventoryItemById;
  }

  public async deleteInventoryItem(
    inventoryItemId: Types.ObjectId
  ): Promise<InventoryItem> {
    const deleteInventoryItemById = await this.inventoryItems.findByIdAndDelete(
      inventoryItemId
    );
    if (!deleteInventoryItemById)
      throw new RpcException(409, "You're not inventoryItem");

    return deleteInventoryItemById;
  }
}
