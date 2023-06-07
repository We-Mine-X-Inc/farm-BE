"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const wemine_apis_2 = require("wemine-apis");
const pool_model_1 = tslib_1.__importDefault(require("../models/pool.model"));
const util_1 = require("../utils/util");
const mongoose_1 = require("mongoose");
/**
 * Exposes operations allowable on the Pool database resource.
 */
class PoolService {
    constructor() {
        this.pools = pool_model_1.default;
    }
    findAllPools() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const pools = yield this.pools
                .find()
                .populate(wemine_apis_2.POOL_FIELDS_TO_POPULATE);
            return pools;
        });
    }
    findPoolById(poolId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (mongoose_1.Types.ObjectId.isValid(poolId))
                throw new wemine_apis_1.RpcException(400, "You're not poolId");
            const findPool = yield this.pools
                .findOne({ _id: poolId })
                .populate(wemine_apis_2.POOL_FIELDS_TO_POPULATE);
            if (!findPool)
                throw new wemine_apis_1.RpcException(409, "You're not pool");
            return findPool;
        });
    }
    createPool(poolData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(poolData))
                throw new wemine_apis_1.RpcException(400, "You're not poolData");
            const findPool = yield this.pools.findOne(Object.assign({}, poolData));
            if (findPool)
                throw new wemine_apis_1.RpcException(409, `Duplicate pool not permitted: ${poolData}. `);
            const createPoolData = yield this.pools.create(Object.assign({}, poolData));
            return createPoolData;
        });
    }
    deletePool(poolId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deletePoolById = yield this.pools.findByIdAndDelete(poolId);
            if (!deletePoolById)
                throw new wemine_apis_1.RpcException(409, "You're not pool");
            return deletePoolById;
        });
    }
}
exports.PoolService = PoolService;
//# sourceMappingURL=pool.service.js.map