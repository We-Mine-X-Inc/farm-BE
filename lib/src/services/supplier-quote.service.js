"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const supplier_quote_model_1 = tslib_1.__importDefault(require("../models/supplier-quote.model"));
const util_1 = require("../utils/util");
/**
 * Serves data from the DB based on the fetched/mutated information.
 */
class SupplierQuoteService {
    constructor() {
        this.supplierQuotes = supplier_quote_model_1.default;
    }
    findAllSupplierQuotes() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const supplierQuotes = yield this.supplierQuotes
                .find()
                .lean();
            return supplierQuotes;
        });
    }
    findSupplierQuoteById(supplierQuoteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(supplierQuoteId))
                throw new wemine_apis_1.RpcException(400, "You're not supplierQuoteId");
            const findSupplierQuote = yield this.supplierQuotes.findOne({
                _id: supplierQuoteId,
            });
            if (!findSupplierQuote)
                throw new wemine_apis_1.RpcException(409, "You're not supplierQuote");
            return findSupplierQuote;
        });
    }
    createSupplierQuote(supplierQuoteData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(supplierQuoteData))
                throw new wemine_apis_1.RpcException(400, "You're not supplierQuoteData");
            const createSupplierQuoteData = yield this.supplierQuotes.create(Object.assign({}, supplierQuoteData));
            return createSupplierQuoteData;
        });
    }
    updateSupplierQuote(supplierQuoteId, supplierQuoteData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(supplierQuoteData))
                throw new wemine_apis_1.RpcException(400, "You're not supplierQuoteData");
            const updateSupplierQuoteById = yield this.supplierQuotes.findByIdAndUpdate(supplierQuoteId, Object.assign({}, supplierQuoteData));
            if (!updateSupplierQuoteById)
                throw new wemine_apis_1.RpcException(409, "You're not supplierQuote");
            return updateSupplierQuoteById;
        });
    }
    deleteSupplierQuote(supplierQuoteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteSupplierQuoteById = yield this.supplierQuotes.findByIdAndDelete(supplierQuoteId);
            if (!deleteSupplierQuoteById)
                throw new wemine_apis_1.RpcException(409, "You're not supplierQuote");
            return deleteSupplierQuoteById;
        });
    }
}
exports.default = SupplierQuoteService;
//# sourceMappingURL=supplier-quote.service.js.map