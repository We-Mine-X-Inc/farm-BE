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
import { CreatePoolRequest } from "wemine-apis";
import { Pool } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Exposes operations allowable on the Pool database resource.
 */
export declare class PoolService {
    pools: import("mongoose").Model<any, {}, {}, {}, any, any>;
    findAllPools(): Promise<Pool[]>;
    findPoolById(poolId: Types.ObjectId): Promise<Pool>;
    createPool(poolData: CreatePoolRequest): Promise<Pool>;
    deletePool(poolId: Types.ObjectId): Promise<Pool>;
}
//# sourceMappingURL=pool.service.d.ts.map