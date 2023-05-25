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
import { CreateMinerMarketInfoDto } from "wemine-apis";
import { MinerMarketInfo } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Exposes operations allowable on the MinerMarketInfo database resource.
 */
export declare class MinerMarketInfoService {
    minerMarketInfos: import("mongoose").Model<MinerMarketInfo & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, MinerMarketInfo & import("mongoose").Document<any, any, any>> & Omit<MinerMarketInfo & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>, any>;
    findAllMinerMarketInfos(): Promise<MinerMarketInfo[]>;
    findMinerMarketInfoById(minerMarketInfoId: Types.ObjectId): Promise<MinerMarketInfo>;
    createMinerMarketInfo(minerMarketInfoData: CreateMinerMarketInfoDto): Promise<MinerMarketInfo>;
    updateMinerMarketInfo(minerMarketInfoId: Types.ObjectId, minerMarketInfoData: CreateMinerMarketInfoDto): Promise<MinerMarketInfo>;
    deleteMinerMarketInfo(minerMarketInfoId: Types.ObjectId): Promise<MinerMarketInfo>;
}
//# sourceMappingURL=miner-market-info.service.d.ts.map