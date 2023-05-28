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
import { CreateMinerRequest, UpdateMinerRequest } from "wemine-apis";
import { Miner } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Exposes operations allowable on the Miner database resource.
 */
export declare class MinerService {
    miners: import("mongoose").Model<Miner & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, Miner & import("mongoose").Document<any, any, any>> & Omit<Miner & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>, any>;
    findAllMiners(): Promise<Miner[]>;
    findMinerByFriendlyId(friendlyMinerId: string): Promise<Miner>;
    findMinerById(minerId: Types.ObjectId): Promise<Miner>;
    createMiner(minerData: CreateMinerRequest): Promise<Miner>;
    updateMiner(minerId: Types.ObjectId, minerData: UpdateMinerRequest): Promise<Miner>;
    deleteMiner(minerId: Types.ObjectId): Promise<Miner>;
}
//# sourceMappingURL=miner.service.d.ts.map