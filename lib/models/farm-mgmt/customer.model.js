"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCustomerModel = void 0;
const mongoose_1 = require("mongoose");
const customerSchema = new mongoose_1.Schema({
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
    hasSubmittedSignUpInfo: {
        type: Boolean,
        required: true,
    },
});
function loadCustomerModel(connection) {
    return (connection.models["Customer"] ||
        connection.model("Customer", customerSchema));
}
exports.loadCustomerModel = loadCustomerModel;
//# sourceMappingURL=customer.model.js.map