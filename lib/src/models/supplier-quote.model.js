"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const supplierQuoteModel = (0, mongoose_1.model)("SupplierQuote", supplierQuoteSchema);
exports.default = supplierQuoteModel;
//# sourceMappingURL=supplier-quote.model.js.map