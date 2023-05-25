"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinerService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const wemine_apis_2 = require("wemine-apis");
const miner_model_1 = tslib_1.__importDefault(require("../models/miner.model"));
const util_1 = require("../utils/util");
/**
 * Exposes operations allowable on the Miner database resource.
 */
class MinerService {
    constructor() {
        this.miners = miner_model_1.default;
    }
    findAllMiners() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const miners = yield this.miners
                .find()
                .populate(wemine_apis_2.MINER_FILEDS_TO_POPULATE);
            return miners;
        });
    }
    findMinerByFriendlyId(friendlyMinerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(friendlyMinerId))
                throw new wemine_apis_1.RpcException(400, "You're not a friendlyMinerId");
            const findMiner = yield this.miners
                .findOne({ friendlyMinerId })
                .populate(wemine_apis_2.MINER_FILEDS_TO_POPULATE);
            if (!findMiner)
                throw new wemine_apis_1.RpcException(409, "You're not miner");
            return findMiner;
        });
    }
    findMinerById(minerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerId.id))
                throw new wemine_apis_1.RpcException(400, "You're not minerId");
            const findMiner = yield this.miners
                .findOne({ _id: minerId })
                .populate(wemine_apis_2.MINER_FILEDS_TO_POPULATE);
            if (!findMiner)
                throw new wemine_apis_1.RpcException(409, "You're not miner");
            return findMiner;
        });
    }
    createMiner(minerData) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerData))
                throw new wemine_apis_1.RpcException(400, "You're not minerData");
            const findMiner = yield this.miners.findOne({
                macAddress: (_a = minerData.initialFields) === null || _a === void 0 ? void 0 : _a.macAddress,
            });
            if (findMiner)
                throw new wemine_apis_1.RpcException(409, `You're MAC Address ${(_b = minerData.initialFields) === null || _b === void 0 ? void 0 : _b.macAddress} already exists`);
            const createMinerData = yield this.miners.create(Object.assign({}, minerData));
            return createMinerData;
        });
    }
    updateMiner(minerId, minerData) {
        var _a, _b, _c;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerData))
                throw new wemine_apis_1.RpcException(400, "You're not minerData");
            if ((_a = minerData.initialFields) === null || _a === void 0 ? void 0 : _a.macAddress) {
                const findMiner = yield this.miners.findOne({
                    macAddress: (_b = minerData.initialFields) === null || _b === void 0 ? void 0 : _b.macAddress,
                });
                if (findMiner && !findMiner._id.equals(minerId))
                    throw new wemine_apis_1.RpcException(409, `You're MAC Address ${(_c = minerData.initialFields) === null || _c === void 0 ? void 0 : _c.macAddress} already exists.`);
            }
            const updateMinerById = yield this.miners.findByIdAndUpdate(minerId, Object.assign({}, minerData));
            if (!updateMinerById)
                throw new wemine_apis_1.RpcException(409, "You're not miner.");
            return updateMinerById;
        });
    }
    deleteMiner(minerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteMinerById = yield this.miners.findByIdAndDelete(minerId);
            if (!deleteMinerById)
                throw new wemine_apis_1.RpcException(409, "You're not miner.");
            return deleteMinerById;
        });
    }
}
exports.MinerService = MinerService;
//# sourceMappingURL=miner.service.js.map