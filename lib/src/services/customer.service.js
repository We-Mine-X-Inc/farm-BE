"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const customer_model_1 = tslib_1.__importDefault(require("../models/customer.model"));
const util_1 = require("../utils/util");
/**
 * Serves data from the DB based on the fetched/mutated information.
 */
class CustomerService {
    constructor() {
        this.customers = customer_model_1.default;
    }
    findAllCustomer() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customers.find().lean();
            return customers;
        });
    }
    findCustomerById(customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(customerId))
                throw new wemine_apis_1.RpcException(400, "You're not customerId");
            const findCustomer = yield this.customers.findOne({
                _id: customerId,
            });
            if (!findCustomer)
                throw new wemine_apis_1.RpcException(409, "You're not customer");
            return findCustomer;
        });
    }
    createCustomer(customerData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(customerData))
                throw new wemine_apis_1.RpcException(400, "You're not customerData");
            const findCustomer = yield this.customers.findOne({
                email: customerData.email,
            });
            if (findCustomer)
                throw new wemine_apis_1.RpcException(409, `You're email ${customerData.email} already exists`);
            const createCustomerData = yield this.customers.create(Object.assign({}, customerData));
            return createCustomerData;
        });
    }
    updateCustomer(customerId, customerData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(customerData))
                throw new wemine_apis_1.RpcException(400, "You're not customerData");
            if (customerData.email) {
                const findCustomer = yield this.customers.findOne({
                    email: customerData.email,
                });
                if (findCustomer && !findCustomer._id.equals(customerId))
                    throw new wemine_apis_1.RpcException(409, `You're email ${customerData.email} already exists`);
            }
            const updateCustomerById = yield this.customers.findByIdAndUpdate(customerId, Object.assign({}, customerData));
            if (!updateCustomerById)
                throw new wemine_apis_1.RpcException(409, "You're not customer");
            return updateCustomerById;
        });
    }
    deleteCustomer(customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleteCustomerById = yield this.customers.findByIdAndDelete(customerId);
            if (!deleteCustomerById)
                throw new wemine_apis_1.RpcException(409, "You're not customer");
            return deleteCustomerById;
        });
    }
}
exports.default = CustomerService;
//# sourceMappingURL=customer.service.js.map