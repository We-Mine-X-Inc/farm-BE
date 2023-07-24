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
import { GoogleOAuthServiceType } from "wemine-apis";
import { GoogleOAuthInfo } from "wemine-apis";
/**
 * Exposes operations allowable on the GoogleOAuthInfo database resource.
 */
export declare class GoogleOAuthInfoService {
    googleOAuthInfos: import("mongoose").Model<GoogleOAuthInfo & import("mongoose").Document<any, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, GoogleOAuthInfo & import("mongoose").Document<any, any, any>> & GoogleOAuthInfo & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, any>;
    findAllGoogleOAuthInfos(): Promise<GoogleOAuthInfo[]>;
    findGoogleOAuthInfoByType(googleOAuthType: GoogleOAuthServiceType): Promise<GoogleOAuthInfo>;
}
//# sourceMappingURL=google-oauth-info.service.d.ts.map