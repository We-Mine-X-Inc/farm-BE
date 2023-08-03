"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
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
const googleOAuthInfoModel = mongoose_1.default.models["GoogleOAuthInfo"] ||
    (0, mongoose_1.model)("GoogleOAuthInfo", googleOAuthInfoSchema);
exports.default = googleOAuthInfoModel;
//# sourceMappingURL=google-oauth-info.model.js.map