"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MgmtAccountService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const mgmt_account_model_1 = tslib_1.__importDefault(require("../models/mgmt-account.model"));
const util_1 = require("../utils/util");
/**
 * Exposes operations allowable on the MgmtAccount database resource.
 */
class MgmtAccountService {
    constructor() {
        this.mgmtAccounts = mgmt_account_model_1.default;
    }
    findAllMgmtAccount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const mgmtAccounts = yield this.mgmtAccounts.find().lean();
            return mgmtAccounts;
        });
    }
    findMgmtAccountById(mgmtAccountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findMgmtAccount = yield this.mgmtAccounts.findOne({
                _id: mgmtAccountId,
            });
            if (!findMgmtAccount)
                throw new wemine_apis_1.RpcException(409, "You're not mgmtAccount");
            return findMgmtAccount;
        });
    }
    createMgmtAccount(mgmtAccountData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(mgmtAccountData))
                throw new wemine_apis_1.RpcException(400, "You're not mgmtAccountData");
            const findMgmtAccount = yield this.mgmtAccounts.findOne({
                email: mgmtAccountData.email,
            });
            if (findMgmtAccount)
                throw new wemine_apis_1.RpcException(409, `You're email ${mgmtAccountData.email} mgmt exists`);
            const createMgmtAccountData = yield this.mgmtAccounts.create(Object.assign({}, mgmtAccountData));
            return createMgmtAccountData;
        });
    }
    updateMgmtAccount(mgmtAccountId, mgmtAccountData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(mgmtAccountData))
                throw new wemine_apis_1.RpcException(400, "You're not mgmtAccountData");
            if (mgmtAccountData.email) {
                const findMgmtAccount = yield this.mgmtAccounts.findOne({
                    email: mgmtAccountData.email,
                });
                if (findMgmtAccount && !findMgmtAccount._id.equals(mgmtAccountId))
                    throw new wemine_apis_1.RpcException(409, `You're email ${mgmtAccountData.email} mgmt exists`);
            }
            const updateMgmtAccountById = yield this.mgmtAccounts.findByIdAndUpdate(mgmtAccountId, Object.assign({}, mgmtAccountData));
            if (!updateMgmtAccountById)
                throw new wemine_apis_1.RpcException(409, "You're not mgmtAccount");
            return updateMgmtAccountById;
        });
    }
    deleteMgmtAccount(mgmtAccountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteMgmtAccountById = yield this.mgmtAccounts.findByIdAndDelete(mgmtAccountId);
            if (!deleteMgmtAccountById)
                throw new wemine_apis_1.RpcException(409, "You're not mgmtAccount");
            return deleteMgmtAccountById;
        });
    }
}
exports.MgmtAccountService = MgmtAccountService;
//# sourceMappingURL=mgmt-account.service.js.map