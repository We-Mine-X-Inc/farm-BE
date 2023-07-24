"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const googleOAuthInfoSchema = new mongoose_1.Schema({
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
const googleOAuthInfoModel = (0, mongoose_1.model)("GoogleOAuthInfo", googleOAuthInfoSchema);
exports.default = googleOAuthInfoModel;
//# sourceMappingURL=google-oauth-info.model.js.map