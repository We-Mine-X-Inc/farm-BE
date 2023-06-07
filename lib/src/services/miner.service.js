"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinerService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const wemine_apis_2 = require("wemine-apis");
const miner_model_1 = tslib_1.__importDefault(require("../models/miner.model"));
const util_1 = require("../utils/util");
const mongoose_1 = require("mongoose");
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
            if (mongoose_1.Types.ObjectId.isValid(minerId))
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerData))
                throw new wemine_apis_1.RpcException(400, "You're not minerData");
            const findMiner = yield this.miners.findOne({
                macAddress: minerData.macAddress,
            });
            if (findMiner)
                throw new wemine_apis_1.RpcException(409, `You're MAC Address ${minerData.macAddress} already exists`);
            const createMinerData = yield this.miners.create(Object.assign({}, minerData));
            return createMinerData;
        });
    }
    updateMiner(minerData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerData))
                throw new wemine_apis_1.RpcException(400, "You're not minerData");
            const updateMinerById = yield this.miners.findByIdAndUpdate(minerData.minerId, Object.assign({}, minerData));
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