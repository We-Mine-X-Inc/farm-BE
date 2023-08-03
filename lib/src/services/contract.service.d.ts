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
import { CreateContractRequest, UpdateContractRequest } from "wemine-apis";
import { Contract } from "wemine-apis";
import { Types } from "mongoose";
export type GetContractRequest = {
    minerId: Types.ObjectId;
};
/**
 * Exposes operations allowable on the Contract database resource.
 */
export declare class ContractService {
    contracts: import("mongoose").Model<any, {}, {}, {}, any, any>;
    findAllContracts(): Promise<Contract[]>;
    findContractById(contractId: Types.ObjectId): Promise<Contract>;
    findContractByMiner(request: GetContractRequest): Promise<Contract>;
    createContract(contractData: CreateContractRequest): Promise<Contract>;
    updateContract(request: UpdateContractRequest): Promise<Contract>;
    deleteContract(contractId: Types.ObjectId): Promise<Contract>;
}
//# sourceMappingURL=contract.service.d.ts.map