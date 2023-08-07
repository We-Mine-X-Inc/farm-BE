"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const tslib_1 = require("tslib");
const wemine_apis_1 = require("wemine-apis");
const customer_model_1 = tslib_1.__importDefault(require("../models/customer.model"));
const util_1 = require("../utils/util");
// import { format as prettyFormat } from "pretty-format";
/**
 * Exposes operations allowable on the Customer database resource.
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
            const foundCustomer = yield this.customers.findOne({
                _id: customerId,
            });
            if (!foundCustomer)
                throw new wemine_apis_1.RpcException(409, "You're not customer");
            return foundCustomer;
        });
    }
    findCustomerByEmail(customerEmail) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const foundCustomer = yield this.customers.findOne({
                email: customerEmail,
            });
            if (!foundCustomer)
                throw new wemine_apis_1.RpcException(409, "You're not customer");
            return foundCustomer;
        });
    }
    createCustomer(customerData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(customerData))
                throw new wemine_apis_1.RpcException(400, "You're not customerData");
            const foundCustomer = yield this.customers.findOne({
                email: customerData.email,
            });
            if (foundCustomer)
                throw new wemine_apis_1.RpcException(409, `Your email ${customerData.email} already exists`);
            const createCustomerData = yield this.customers.create(Object.assign({}, customerData));
            return createCustomerData;
        });
    }
    updateCustomerById(customerId, customerData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, util_1.isEmpty)(customerData))
                throw new wemine_apis_1.RpcException(400, "You're not customerData");
            // if (customerData.email) {
            //   const foundCustomer = await this.customers.findOne({
            //     email: customerData.email,
            //   });
            //   if (foundCustomer && !foundCustomer._id.equals(customerId))
            //     throw new RpcException(
            //       409,
            //       `Your email ${
            //         customerData.email
            //       } is tied to a different user account than the id you
            //       provided: ${prettyFormat(customerId)} ---- ${prettyFormat(
            //         foundCustomer._id
            //       )}.`
            //     );
            // }
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
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map