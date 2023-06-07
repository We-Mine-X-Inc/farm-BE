"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinMarketInfoService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const coin_market_info_model_1 = tslib_1.__importDefault(require("../models/coin-market-info.model"));
const util_1 = require("../utils/util");
const pretty_format_1 = require("pretty-format");
/**
 * Exposes operations allowable on the CoinMarketInfo database resource.
 */
class CoinMarketInfoService {
    constructor() {
        this.coinMarketInfos = coin_market_info_model_1.default;
    }
    findAllCoinMarketInfos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coinMarketInfos = yield this.coinMarketInfos
                .find()
                .lean();
            return coinMarketInfos;
        });
    }
    findCoinMarketInfoById(coinMarketInfoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findCoinMarketInfo = yield this.coinMarketInfos.findOne({
                _id: coinMarketInfoId,
            });
            if (!findCoinMarketInfo)
                throw new wemine_apis_1.RpcException(409, "You're not coinMarketInfo");
            return findCoinMarketInfo;
        });
    }
    createCoinMarketInfo(coinMarketInfoData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(coinMarketInfoData))
                throw new wemine_apis_1.RpcException(400, "You're not coinMarketInfoData");
            const findCoinMarketInfo = yield this.coinMarketInfos.findOne({
                coinType: coinMarketInfoData.coinType,
            });
            if (findCoinMarketInfo)
                throw new wemine_apis_1.RpcException(409, `A coinMarketInfo for the coinType ${(0, pretty_format_1.format)(coinMarketInfoData.coinType)}
        already exists.`);
            const createCoinMarketInfoData = yield this.coinMarketInfos.create(Object.assign({}, coinMarketInfoData));
            return createCoinMarketInfoData;
        });
    }
    updateCoinMarketInfo(coinMarketInfoId, coinMarketInfoData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(coinMarketInfoData))
                throw new wemine_apis_1.RpcException(400, "You're not coinMarketInfoData");
            if (coinMarketInfoData.coinType) {
                const findCoinMarketInfo = yield this.coinMarketInfos.findOne({
                    coinType: coinMarketInfoData.coinType,
                });
                if (findCoinMarketInfo &&
                    !findCoinMarketInfo._id.equals(coinMarketInfoId))
                    throw new wemine_apis_1.RpcException(409, `You cannot update the coinType of an existing CoinMarketInfo. Create a new object
          if you want a different CoinType. `);
            }
            const updateCoinMarketInfoById = yield this.coinMarketInfos.findByIdAndUpdate(coinMarketInfoId, Object.assign({}, coinMarketInfoData));
            if (!updateCoinMarketInfoById) {
                throw new wemine_apis_1.RpcException(409, "You're not coinMarketInfo");
            }
            return updateCoinMarketInfoById;
        });
    }
    deleteCoinMarketInfo(coinMarketInfoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteCoinMarketInfoById = yield this.coinMarketInfos.findByIdAndDelete(coinMarketInfoId);
            if (!deleteCoinMarketInfoById) {
                throw new wemine_apis_1.RpcException(409, "You're not coinMarketInfo");
            }
            return deleteCoinMarketInfoById;
        });
    }
}
exports.CoinMarketInfoService = CoinMarketInfoService;
//# sourceMappingURL=coin-market-info.service.js.map