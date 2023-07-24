/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateCustomerRequest } from "wemine-apis";
import { Customer } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Exposes operations allowable on the Customer database resource.
 */
export declare class CustomerService {
    customers: import("mongoose").Model<Customer & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, Customer & import("mongoose").Document<any, any, any>> & Customer & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, any>;
    findAllCustomer(): Promise<Customer[]>;
    findCustomerById(customerId: Types.ObjectId): Promise<Customer>;
    createCustomer(customerData: CreateCustomerRequest): Promise<Customer>;
    updateCustomer(customerId: Types.ObjectId, customerData: CreateCustomerRequest): Promise<Customer>;
    deleteCustomer(customerId: Types.ObjectId): Promise<Customer>;
}
//# sourceMappingURL=customer.service.d.ts.map