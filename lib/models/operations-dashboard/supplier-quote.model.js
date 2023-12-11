"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSupplierQuoteModel = void 0;
const mongoose_1 = require("mongoose");
const supplierQuoteSchema = new mongoose_1.Schema({
    supplierId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
function loadSupplierQuoteModel(connection) {
    return (connection.models["SupplierQuote"] ||
        connection.model("SupplierQuote", supplierQuoteSchema));
}
exports.loadSupplierQuoteModel = loadSupplierQuoteModel;
//# sourceMappingURL=supplier-quote.model.js.map