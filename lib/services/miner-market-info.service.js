"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const wemine_apis_2 = require("wemine-apis");
const miner_market_info_model_1 = tslib_1.__importDefault(require("../models/miner-market-info.model"));
const util_1 = require("../utils/util");
const pretty_format_1 = require("pretty-format");
/**
 * Serves data from the DB based on the fetched/mutated information.
 */
class MinerMarketInfoService {
    constructor() {
        this.minerMarketInfos = miner_market_info_model_1.default;
    }
    findAllMinerMarketInfos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const minerMarketInfos = yield this.minerMarketInfos
                .find()
                .populate(wemine_apis_2.MINER_MARKET_INFO_FIELDS_TO_POPULATE);
            return minerMarketInfos;
        });
    }
    findMinerMarketInfoById(minerMarketInfoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerMarketInfoId._id.id))
                throw new wemine_apis_1.RpcException(400, "You're not minerMarketInfoId");
            const findMinerMarketInfo = yield yield this.minerMarketInfos
                .findOne({ _id: minerMarketInfoId })
                .populate(wemine_apis_2.MINER_MARKET_INFO_FIELDS_TO_POPULATE);
            if (!findMinerMarketInfo)
                throw new wemine_apis_1.RpcException(409, "You're not minerMarketInfo");
            return findMinerMarketInfo;
        });
    }
    createMinerMarketInfo(minerMarketInfoData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerMarketInfoData))
                throw new wemine_apis_1.RpcException(400, "You're not minerMarketInfoData");
            const findMinerMarketInfo = yield this.minerMarketInfos.findOne({
                coinType: minerMarketInfoData.coinType,
                minerInventoryItem: minerMarketInfoData.minerInventoryItem,
            });
            if (findMinerMarketInfo)
                throw new wemine_apis_1.RpcException(409, `A minerMarketInfo for the info ${(0, pretty_format_1.format)(minerMarketInfoData)}
        already exists.`);
            const createMinerMarketInfoData = yield this.minerMarketInfos.create(Object.assign({}, minerMarketInfoData));
            return createMinerMarketInfoData;
        });
    }
    updateMinerMarketInfo(minerMarketInfoId, minerMarketInfoData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(minerMarketInfoData))
                throw new wemine_apis_1.RpcException(400, "You're not minerMarketInfoData");
            if (minerMarketInfoData.coinType &&
                minerMarketInfoData.minerInventoryItem) {
                const findMinerMarketInfo = yield this.minerMarketInfos.findOne({
                    coinType: minerMarketInfoData.coinType,
                    minerInventoryItem: minerMarketInfoData.minerInventoryItem,
                });
                if (findMinerMarketInfo &&
                    !findMinerMarketInfo._id.equals(minerMarketInfoId))
                    throw new wemine_apis_1.RpcException(409, `You change the CoinType or ItemId of an existing MinerMarketInfo object. Please create
          a new object if you want a different CoinType + InventoryItem pair.`);
            }
            const updateMinerMarketInfoById = yield this.minerMarketInfos.findByIdAndUpdate(minerMarketInfoId, Object.assign({}, minerMarketInfoData));
            if (!updateMinerMarketInfoById) {
                throw new wemine_apis_1.RpcException(409, "You're not minerMarketInfo");
            }
            return updateMinerMarketInfoById;
        });
    }
    deleteMinerMarketInfo(minerMarketInfoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteMinerMarketInfoById = yield this.minerMarketInfos.findByIdAndDelete(minerMarketInfoId);
            if (!deleteMinerMarketInfoById) {
                throw new wemine_apis_1.RpcException(409, "You're not minerMarketInfo");
            }
            return deleteMinerMarketInfoById;
        });
    }
}
exports.default = MinerMarketInfoService;
//# sourceMappingURL=miner-market-info.service.js.map