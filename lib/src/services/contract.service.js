"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const wemine_apis_2 = require("wemine-apis");
const contract_model_1 = tslib_1.__importDefault(require("../models/contract.model"));
const util_1 = require("../utils/util");
const mongoose_1 = require("mongoose");
const pretty_format_1 = require("pretty-format");
/**
 * Exposes operations allowable on the Contract database resource.
 */
class ContractService {
    constructor() {
        this.contracts = contract_model_1.default;
    }
    findAllContracts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const contracts = yield this.contracts
                .find()
                .populate(wemine_apis_2.CONTRACT_FIELDS_TO_POPULATE);
            return contracts;
        });
    }
    findContractById(contractId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(contractId))
                throw new wemine_apis_1.RpcException(400, "You're not contractId");
            const findContract = yield this.contracts
                .findOne({ _id: contractId })
                .populate(wemine_apis_2.CONTRACT_FIELDS_TO_POPULATE);
            if (!findContract)
                throw new wemine_apis_1.RpcException(409, "You're not contract");
            return findContract;
        });
    }
    findContractByMiner(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!request)
                throw new wemine_apis_1.RpcException(400, "You're not GetContractRequest");
            const findContract = yield this.contracts
                .findOne({ miner: new mongoose_1.Types.ObjectId(request.minerId) })
                .populate(wemine_apis_2.CONTRACT_FIELDS_TO_POPULATE);
            if (!findContract)
                throw new wemine_apis_1.RpcException(409, `The following request: 
        ${(0, pretty_format_1.format)(request)} resulted in contract: 
        ${(0, pretty_format_1.format)(findContract)}`);
            return findContract;
        });
    }
    createContract(contractData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(contractData))
                throw new wemine_apis_1.RpcException(400, "You're not contractData");
            const findContract = yield this.contracts.findOne({
                miner: contractData.miner,
                isActive: true /** TODO: Add this field to Contract */,
            });
            if (findContract)
                throw new wemine_apis_1.RpcException(409, `A contract for the miner ${(0, pretty_format_1.format)(contractData.miner)} already exists.`);
            const createContractData = yield this.contracts.create(Object.assign(Object.assign({}, contractData), { miner: contractData.miner }));
            return createContractData;
        });
    }
    updateContract(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(request))
                throw new wemine_apis_1.RpcException(400, "You're not contractData");
            const updateContractById = yield this.contracts.findByIdAndUpdate(request.contractId, Object.assign({}, request));
            if (!updateContractById) {
                throw new wemine_apis_1.RpcException(409, "You're not contract");
            }
            return updateContractById;
        });
    }
    deleteContract(contractId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteContractById = yield this.contracts.findByIdAndDelete(contractId);
            if (!deleteContractById) {
                throw new wemine_apis_1.RpcException(409, "You're not contract");
            }
            return deleteContractById;
        });
    }
}
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map