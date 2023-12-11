"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadGoogleOAuthInfoModel = void 0;
const mongoose_1 = require("mongoose");
const wemine_apis_1 = require("wemine-apis");
const googleOAuthInfoSchema = new mongoose_1.Schema({
    serviceType: {
        type: Number,
        enum: wemine_apis_1.GoogleOAuthServiceType,
        required: true,
    },
    clientId: {
        type: String,
        required: true,
    },
    clientSecret: {
        type: String,
        required: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    scopes: {
        type: (Array),
        required: true,
    },
});
function loadGoogleOAuthInfoModel(connection) {
    return (connection.models["GoogleOAuthInfo"] ||
        connection.model("GoogleOAuthInfo", googleOAuthInfoSchema));
}
exports.loadGoogleOAuthInfoModel = loadGoogleOAuthInfoModel;
//# sourceMappingURL=google-oauth-info.model.js.map