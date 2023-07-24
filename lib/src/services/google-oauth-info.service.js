"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleOAuthInfoService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const google_oauth_info_model_1 = tslib_1.__importDefault(require("../models/google-oauth-info.model"));
/**
 * Exposes operations allowable on the GoogleOAuthInfo database resource.
 */
class GoogleOAuthInfoService {
    constructor() {
        this.googleOAuthInfos = google_oauth_info_model_1.default;
    }
    findAllGoogleOAuthInfos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const googleOAuthInfos = yield this.googleOAuthInfos
                .find()
                .lean();
            return googleOAuthInfos;
        });
    }
    findGoogleOAuthInfoByType(googleOAuthType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findGoogleOAuthInfo = yield this.googleOAuthInfos.findOne({
                serviceType: googleOAuthType,
            });
            if (!findGoogleOAuthInfo)
                throw new wemine_apis_1.RpcException(409, "You're not googleOAuthInfo");
            return findGoogleOAuthInfo;
        });
    }
}
exports.GoogleOAuthInfoService = GoogleOAuthInfoService;
//# sourceMappingURL=google-oauth-info.service.js.map