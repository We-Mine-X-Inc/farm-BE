"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const pool_worker_hash_rate_contribution_model_1 = tslib_1.__importDefault(require("../models/pool-worker-hash-rate-contribution.model"));
const util_1 = require("../utils/util");
/** CRUD operations for hash rate metrics for pool workers for a miner. */
class PoolWorkerHashRateContributionService {
    constructor() {
        this.poolWorkerHashRateContributionModel = pool_worker_hash_rate_contribution_model_1.default;
    }
    addWorkerHashRateContribution(hashRateContribution) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(hashRateContribution))
                throw new wemine_apis_1.RpcException(400, "You're not a AddPoolWorkerHashRateContributionDto");
            const existingContributionRecord = yield this.poolWorkerHashRateContributionModel.find({
                poolUsername: hashRateContribution.poolUsername,
                timeRange: hashRateContribution.timeRange,
            });
            if (existingContributionRecord.length > 0) {
                throw new wemine_apis_1.RpcException(400, "TimeRange for this pool already exists.");
            }
            return yield this.poolWorkerHashRateContributionModel
                .create({
                poolUsername: hashRateContribution.poolUsername,
                timeRange: hashRateContribution.timeRange,
                clientWorkers: JSON.stringify(hashRateContribution.clientWorkers),
                companyWorkers: JSON.stringify(hashRateContribution.companyWorkers),
            })
                .then((newContribution) => this.convertPoolWorkerHashRateContribution(newContribution));
        });
    }
    getWorkerHashRateContributions(request) {
        var _a, _b, _c, _d, _e, _f;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(request))
                throw new wemine_apis_1.RpcException(400, "You're not a ListPoolWorkerHashRateContributionRequestDto");
            const poolWorkerContributions = yield this.poolWorkerHashRateContributionModel.find({
                $or: [
                    {
                        // First timeRange if startInMillis lands in the middle a stored range.
                        poolUsername: { $in: request.poolUsernames },
                        "timeRange.startInMillis": {
                            $lte: (_a = request.timeRange) === null || _a === void 0 ? void 0 : _a.startInMillis,
                        },
                        "timeRange.endInMillis": { $gte: (_b = request.timeRange) === null || _b === void 0 ? void 0 : _b.startInMillis },
                    },
                    {
                        // Middle timeRanges if any exist.
                        poolUsername: { $in: request.poolUsernames },
                        "timeRange.startInMillis": {
                            $gte: (_c = request.timeRange) === null || _c === void 0 ? void 0 : _c.startInMillis,
                        },
                        "timeRange.endInMillis": { $lte: (_d = request.timeRange) === null || _d === void 0 ? void 0 : _d.endInMillis },
                    },
                    {
                        // Last timeRange if endInMillis lands in the middle a stored range.
                        poolUsername: { $in: request.poolUsernames },
                        "timeRange.startInMillis": {
                            $lte: (_e = request.timeRange) === null || _e === void 0 ? void 0 : _e.endInMillis,
                        },
                        "timeRange.endInMillis": { $gte: (_f = request.timeRange) === null || _f === void 0 ? void 0 : _f.endInMillis },
                    },
                ],
            });
            return {
                poolWorkerContributions: poolWorkerContributions.map((model) => this.convertPoolWorkerHashRateContribution(model)),
            };
        });
    }
    convertPoolWorkerHashRateContribution(contributionModel) {
        return {
            _id: contributionModel._id,
            timeRange: contributionModel.timeRange,
            poolUsername: contributionModel.poolUsername,
            clientWorkers: JSON.parse(contributionModel.clientWorkers),
            companyWorkers: JSON.parse(contributionModel.companyWorkers),
        };
    }
}
exports.default = PoolWorkerHashRateContributionService;
//# sourceMappingURL=pool-worker-hash-rate-contribution.service.js.map