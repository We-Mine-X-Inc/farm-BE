import  {  Schema, Document, Connection } from "mongoose";
import { SupplierQuote } from "wemine-apis";

const supplierQuoteSchema: Schema = new Schema({
  supplierId: {
    type: Schema.Types.ObjectId,
    ref: "Supplier",
    required: true,
  },
  itemModel: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  sourceDateInMillis: {
    type: Number,
    required: true,
  },
  expirationDateInMillis: {
    type: Number,
    required: false,
  },
});

export function loadSupplierQuoteModel(connection: Connection) {
  return (
    connection.models["SupplierQuote"] ||
    connection.model<SupplierQuote & Document>(
      "SupplierQuote",
      supplierQuoteSchema
    )
  );
}
