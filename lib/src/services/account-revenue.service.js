"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRevenueService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const account_revenue_model_1 = tslib_1.__importDefault(require("../../src/models/account-revenue.model"));
const util_1 = require("../utils/util");
const pretty_format_1 = require("pretty-format");
/** CRUD operations for revenue metrics associated with miners. */
class AccountRevenueService {
    constructor() {
        this.accountRevenueModel = account_revenue_model_1.default;
    }
    addAccountRevenue(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(request))
                throw new wemine_apis_1.RpcException(400, "You're not a AddMiningAccountRevenueRequest");
            return yield this.accountRevenueModel.create({
                miningAccountUsername: request.accountAddress,
                timeRange: request.timeRange,
                cummulativeProfits: request.cummulativeProfits,
            });
        });
    }
    getAccountRevenues(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(request))
                throw new wemine_apis_1.RpcException(400, "You're not a AddMiningAccountRevenueRequest");
            const specifiedTime = request.timeRange || request.timeSingleton;
            if (!specifiedTime)
                throw new wemine_apis_1.RpcException(400, "Must specify time.");
            const accountRevenuesPromise = !!request.timeRange
                ? this.buildTimeRangeQuery(request)
                : this.buildTimeSingletonQuery(request);
            const accountRevenues = yield accountRevenuesPromise;
            console.log((0, pretty_format_1.format)(accountRevenues));
            return { accountRevenues };
        });
    }
    buildTimeRangeQuery(request) {
        var _a, _b, _c, _d, _e, _f;
        return this.accountRevenueModel.find({
            $or: [
                {
                    // First timeRange if startInMillis lands in the middle a stored range.
                    poolUsername: { $in: request.accountAddresses },
                    "timeRange.startInMillis": {
                        $lte: (_a = request.timeRange) === null || _a === void 0 ? void 0 : _a.startInMillis,
                    },
                    "timeRange.endInMillis": { $gte: (_b = request.timeRange) === null || _b === void 0 ? void 0 : _b.startInMillis },
                },
                {
                    // Middle timeRanges if any exist.
                    poolUsername: { $in: request.accountAddresses },
                    "timeRange.startInMillis": {
                        $gte: (_c = request.timeRange) === null || _c === void 0 ? void 0 : _c.startInMillis,
                    },
                    "timeRange.endInMillis": { $lte: (_d = request.timeRange) === null || _d === void 0 ? void 0 : _d.endInMillis },
                },
                {
                    // Last timeRange if endInMillis lands in the middle a stored range.
                    poolUsername: { $in: request.accountAddresses },
                    "timeRange.startInMillis": {
                        $lte: (_e = request.timeRange) === null || _e === void 0 ? void 0 : _e.endInMillis,
                    },
                    "timeRange.endInMillis": { $gte: (_f = request.timeRange) === null || _f === void 0 ? void 0 : _f.endInMillis },
                },
            ],
        });
    }
    buildTimeSingletonQuery(request) {
        var _a, _b;
        return this.accountRevenueModel
            .find({
            poolUsername: { $in: request.accountAddresses },
            "timeRange.startInMillis": {
                $lte: (_a = request.timeSingleton) === null || _a === void 0 ? void 0 : _a.timeInMillis,
            },
            "timeRange.endInMillis": { $gte: (_b = request.timeSingleton) === null || _b === void 0 ? void 0 : _b.timeInMillis },
        })
            .sort({ "timeRange.startInMillis": 1 })
            .limit(1);
    }
}
exports.AccountRevenueService = AccountRevenueService;
//# sourceMappingURL=account-revenue.service.js.map