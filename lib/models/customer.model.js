"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const accountSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    isCompanyCustomer: {
        type: Boolean,
        required: true,
    },
});
const accountModel = (0, mongoose_1.model)("Customer", accountSchema);
exports.default = accountModel;
//# sourceMappingURL=customer.model.js.map