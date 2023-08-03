"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
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
const accountModel = mongoose_1.default.models["Customer"] ||
    (0, mongoose_1.model)("Customer", accountSchema);
exports.default = accountModel;
//# sourceMappingURL=customer.model.js.map