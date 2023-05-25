"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityInfoService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const facility_info_model_1 = tslib_1.__importDefault(require("../models/facility-info.model"));
const util_1 = require("../utils/util");
const pretty_format_1 = require("pretty-format");
/**
 * Exposes operations allowable on the FacilityInfo database resource.
 */
class FacilityInfoService {
    constructor() {
        this.facilityInfos = facility_info_model_1.default;
    }
    findAllFacilityInfos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const facilityInfos = yield this.facilityInfos
                .find()
                .lean();
            return facilityInfos;
        });
    }
    findFacilityInfoById(facilityInfoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(facilityInfoId._id.id))
                throw new wemine_apis_1.RpcException(400, "You're not facilityInfoId");
            const findFacilityInfo = yield this.facilityInfos.findOne({
                _id: facilityInfoId,
            });
            if (!findFacilityInfo)
                throw new wemine_apis_1.RpcException(409, "You're not facilityInfo");
            return findFacilityInfo;
        });
    }
    createFacilityInfo(facilityInfoData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(facilityInfoData))
                throw new wemine_apis_1.RpcException(400, "You're not facilityInfoData");
            const findFacilityInfo = yield this.facilityInfos.findOne({
                name: facilityInfoData.name,
            });
            if (findFacilityInfo)
                throw new wemine_apis_1.RpcException(409, `A facilityInfo for the miner ${(0, pretty_format_1.format)(facilityInfoData.name)}
        already exists.`);
            const createFacilityInfoData = yield this.facilityInfos.create(Object.assign({}, facilityInfoData));
            return createFacilityInfoData;
        });
    }
    updateFacilityInfo(facilityInfoId, facilityInfoData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // if (isEmpty(facilityInfoData))
            //   throw new RpcException(400, "You're not facilityInfoData");
            if (facilityInfoData.name) {
                const findFacilityInfo = yield this.facilityInfos.findOne({
                    name: facilityInfoData.name,
                });
                if (findFacilityInfo && !findFacilityInfo._id.equals(facilityInfoId))
                    throw new wemine_apis_1.RpcException(409, `You cannot apply an existing facilityInfo to a miner. You must create
          a new facilityInfo with the name already set.`);
            }
            const updateFacilityInfoById = yield this.facilityInfos.findByIdAndUpdate(facilityInfoId, Object.assign(Object.assign({}, facilityInfoData), { isAutoManaged: facilityInfoData.isAutoManaged == "on" }));
            if (!updateFacilityInfoById) {
                throw new wemine_apis_1.RpcException(409, "You're not facilityInfo");
            }
            return updateFacilityInfoById;
        });
    }
    deleteFacilityInfo(facilityInfoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteFacilityInfoById = yield this.facilityInfos.findByIdAndDelete(facilityInfoId);
            if (!deleteFacilityInfoById) {
                throw new wemine_apis_1.RpcException(409, "You're not facilityInfo");
            }
            return deleteFacilityInfoById;
        });
    }
}
exports.FacilityInfoService = FacilityInfoService;
//# sourceMappingURL=facility-info.service.js.map