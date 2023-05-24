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
import { CreateFacilityInfoDto } from "wemine-apis";
import { FacilityInfo } from "wemine-apis";
import { Types } from "mongoose";
/**
 * Serves data from the DB based on the fetched/mutated information.
 */
declare class FacilityInfoService {
    facilityInfos: import("mongoose").Model<FacilityInfo & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, FacilityInfo & import("mongoose").Document<any, any, any>> & Omit<FacilityInfo & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>, any>;
    findAllFacilityInfos(): Promise<FacilityInfo[]>;
    findFacilityInfoById(facilityInfoId: Types.ObjectId): Promise<FacilityInfo>;
    createFacilityInfo(facilityInfoData: CreateFacilityInfoDto): Promise<FacilityInfo>;
    updateFacilityInfo(facilityInfoId: Types.ObjectId, facilityInfoData: CreateFacilityInfoDto): Promise<FacilityInfo>;
    deleteFacilityInfo(facilityInfoId: Types.ObjectId): Promise<FacilityInfo>;
}
export default FacilityInfoService;
//# sourceMappingURL=facility-info.service.d.ts.map