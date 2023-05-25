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
import { CreateCoinMarketInfoDto } from "wemine-apis";
import { CoinMarketInfo } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Exposes operations allowable on the CoinMarketInfo database resource.
 */
export declare class CoinMarketInfoService {
    coinMarketInfos: import("mongoose").Model<CoinMarketInfo & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, CoinMarketInfo & import("mongoose").Document<any, any, any>> & Omit<CoinMarketInfo & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>, any>;
    findAllCoinMarketInfos(): Promise<CoinMarketInfo[]>;
    findCoinMarketInfoById(coinMarketInfoId: Types.ObjectId): Promise<CoinMarketInfo>;
    createCoinMarketInfo(coinMarketInfoData: CreateCoinMarketInfoDto): Promise<CoinMarketInfo>;
    updateCoinMarketInfo(coinMarketInfoId: Types.ObjectId, coinMarketInfoData: CreateCoinMarketInfoDto): Promise<CoinMarketInfo>;
    deleteCoinMarketInfo(coinMarketInfoId: Types.ObjectId): Promise<CoinMarketInfo>;
}
//# sourceMappingURL=coin-market-info.service.d.ts.map