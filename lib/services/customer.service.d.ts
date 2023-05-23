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
import { CreateCustomerDto } from "wemine-apis";
import { Customer } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Serves data from the DB based on the fetched/mutated information.
 */
declare class CustomerService {
    customers: import("mongoose").Model<Customer & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, Customer & import("mongoose").Document<any, any, any>> & Omit<Customer & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>, any>;
    findAllCustomer(): Promise<Customer[]>;
    findCustomerById(customerId: Types.ObjectId): Promise<Customer>;
    createCustomer(customerData: CreateCustomerDto): Promise<Customer>;
    updateCustomer(customerId: Types.ObjectId, customerData: CreateCustomerDto): Promise<Customer>;
    deleteCustomer(customerId: Types.ObjectId): Promise<Customer>;
}
export default CustomerService;
//# sourceMappingURL=customer.service.d.ts.map