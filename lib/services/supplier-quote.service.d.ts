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
import { CreateSupplierQuoteDto } from "wemine-apis";
import { SupplierQuote } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Serves data from the DB based on the fetched/mutated information.
 */
declare class SupplierQuoteService {
    supplierQuotes: import("mongoose").Model<SupplierQuote & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, SupplierQuote & import("mongoose").Document<any, any, any>> & Omit<SupplierQuote & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>, any>;
    findAllSupplierQuotes(): Promise<SupplierQuote[]>;
    findSupplierQuoteById(supplierQuoteId: Types.ObjectId): Promise<SupplierQuote>;
    createSupplierQuote(supplierQuoteData: CreateSupplierQuoteDto): Promise<SupplierQuote>;
    updateSupplierQuote(supplierQuoteId: Types.ObjectId, supplierQuoteData: CreateSupplierQuoteDto): Promise<SupplierQuote>;
    deleteSupplierQuote(supplierQuoteId: Types.ObjectId): Promise<SupplierQuote>;
}
export default SupplierQuoteService;
//# sourceMappingURL=supplier-quote.service.d.ts.map