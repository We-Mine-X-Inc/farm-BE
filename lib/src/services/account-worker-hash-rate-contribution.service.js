"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerHashRateContributionService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const account_worker_hash_rate_contribution_model_1 = tslib_1.__importDefault(require("../../src/models/account-worker-hash-rate-contribution.model"));
const util_1 = require("../utils/util");
/** CRUD operations for hash rate metrics for pool workers for a miner. */
class WorkerHashRateContributionService {
    constructor() {
        this.workerHashRateContributionModel = account_worker_hash_rate_contribution_model_1.default;
    }
    addWorkerHashRateContribution(hashRateContribution) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(hashRateContribution))
                throw new wemine_apis_1.RpcException(400, "You're not a AddPoolWorkerHashRateContributionRequest");
            const existingContributionRecord = yield this.workerHashRateContributionModel.find({
                accountAddress: hashRateContribution.accountAddress,
                timeRange: hashRateContribution.timeRange,
            });
            if (existingContributionRecord.length > 0) {
                throw new wemine_apis_1.RpcException(400, "TimeRange for this pool already exists.");
            }
            return yield this.workerHashRateContributionModel
                .create({
                poolUsername: hashRateContribution.accountAddress,
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
            const workerContributions = yield this.workerHashRateContributionModel.find({
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
            return {
                workerContributions: workerContributions.map((model) => this.convertPoolWorkerHashRateContribution(model)),
            };
        });
    }
    convertPoolWorkerHashRateContribution(contributionModel) {
        return {
            _id: contributionModel._id,
            timeRange: contributionModel.timeRange,
            accountAddress: contributionModel.accountAddress,
            clientWorkers: JSON.parse(contributionModel.clientWorkers),
            companyWorkers: JSON.parse(contributionModel.companyWorkers),
        };
    }
}
exports.WorkerHashRateContributionService = WorkerHashRateContributionService;
//# sourceMappingURL=account-worker-hash-rate-contribution.service.js.map