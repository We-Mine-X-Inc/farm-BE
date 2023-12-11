import { Schema, Document, Connection } from "mongoose";
import { PowerController } from "wemine-apis";
import { InventoryItemStatus } from "wemine-apis/lib/business-logic-interfaces/farm-maintenance/inventory-item";

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

const powerControllerSchema: Schema = new Schema({
  status: {
    type: Number,
    enum: InventoryItemStatus,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  metadata: powerSwitchMetadataSchema,
});

export function powerControllerModel(connection: Connection) {
  return (
    connection.models["PowerController"] ||
    connection.model<PowerController & Document>(
      "PowerController",
      powerControllerSchema
    )
  );
}
