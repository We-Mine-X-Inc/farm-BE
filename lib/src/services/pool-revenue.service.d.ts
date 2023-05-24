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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AddPoolRevenueDto, ListPoolRevenueRequestDto, ListPoolRevenueResponseDto } from "wemine-apis";
/** CRUD operations for revenue metrics associated with miners. */
declare class PoolRevenueService {
    private poolRevenueModel;
    addPoolRevenue(poolRevenue: AddPoolRevenueDto): Promise<import("mongoose").Document<unknown, {}, import("wemine-apis").PoolRevenue & import("mongoose").Document<any, any, any>> & Omit<import("wemine-apis").PoolRevenue & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getPoolRevenues(request: ListPoolRevenueRequestDto): Promise<ListPoolRevenueResponseDto>;
    private buildTimeRangeQuery;
    private buildTimeSingletonQuery;
}
export default PoolRevenueService;
//# sourceMappingURL=pool-revenue.service.d.ts.map