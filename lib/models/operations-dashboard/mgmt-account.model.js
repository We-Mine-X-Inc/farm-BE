"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMgmtAccountModel = void 0;
const mongoose_1 = require("mongoose");
const contractModePermissionsSchema = {
    canRead: {
        type: Boolean,
        required: true,
    },
    canWrite: {
        type: Boolean,
        required: true,
    },
};
const customerModelPermissionsSchema = {
    canRead: {
        type: Boolean,
        required: true,
    },
    canWrite: {
        type: Boolean,
        required: true,
    },
};
const minerModelPermissionsSchema = {
    canRead: {
        type: Boolean,
        required: true,
    },
    canWrite: {
        type: Boolean,
        required: true,
    },
};
const poolModelPermissionsSchema = {
    canRead: {
        type: Boolean,
        required: true,
    },
    canWrite: {
        type: Boolean,
        required: true,
    },
};
const supplierQuoteModelPermissionsSchema = {
    canRead: {
        type: Boolean,
        required: true,
    },
    canWrite: {
        type: Boolean,
        required: true,
    },
};
const mgmtPermissionsSchema = {
    contractModelPermissions: contractModePermissionsSchema,
    customerModelPermissions: customerModelPermissionsSchema,
    minerModelPermissions: minerModelPermissionsSchema,
    poolModelPermissions: poolModelPermissionsSchema,
    supplierQuoteModelPermissions: supplierQuoteModelPermissionsSchema,
};
const mgmtAccountSchema = new mongoose_1.Schema({
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
    mgmtPermissions: mgmtPermissionsSchema,
});
function loadMgmtAccountModel(connection) {
    return (connection.models["MgmtAccount"] ||
        connection.model("MgmtAccount", mgmtAccountSchema));
}
exports.loadMgmtAccountModel = loadMgmtAccountModel;
//# sourceMappingURL=mgmt-account.model.js.map