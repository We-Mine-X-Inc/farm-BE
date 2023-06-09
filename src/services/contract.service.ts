import { CreateContractRequest, UpdateContractRequest } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { Contract, CONTRACT_FIELDS_TO_POPULATE } from "wemine-apis";
import contractModel from "@models/contract.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";
import { format as prettyFormat } from "pretty-format";

export type GetContractRequest = {
  minerId: Types.ObjectId;
};

/**
 * Exposes operations allowable on the Contract database resource.
 */
export class ContractService {
  public contracts = contractModel;

  public async findAllContracts(): Promise<Contract[]> {
    const contracts: Contract[] = await this.contracts
      .find()
      .populate(CONTRACT_FIELDS_TO_POPULATE);
    return contracts;
  }

  public async findContractById(contractId: Types.ObjectId): Promise<Contract> {
    const findContract = await this.contracts
      .findOne({ _id: contractId })
      .populate(CONTRACT_FIELDS_TO_POPULATE);

    if (!findContract) throw new RpcException(409, "You're not contract");

    return findContract;
  }

  public async findContractByMiner(
    request: GetContractRequest
  ): Promise<Contract> {
    if (!request) throw new RpcException(400, "You're not GetContractRequest");

    const findContract = await this.contracts
      .findOne({ miner: new Types.ObjectId(request.minerId) })
      .populate(CONTRACT_FIELDS_TO_POPULATE);

    if (!findContract)
      throw new RpcException(
        409,
        `The following request: 
        ${prettyFormat(request)} resulted in contract: 
        ${prettyFormat(findContract)}`
      );

    return findContract;
  }

  public async createContract(
    contractData: CreateContractRequest
  ): Promise<Contract> {
    if (isEmpty(contractData))
      throw new RpcException(400, "You're not contractData");

    const findContract = await this.contracts.findOne({
      miner: contractData.miner,
      isActive: true /** TODO: Add this field to Contract */,
    });
    if (findContract)
      throw new RpcException(
        409,
        `A contract for the miner ${prettyFormat(
          contractData.miner
        )} already exists.`
      );

    const createContractData = await this.contracts.create({
      ...contractData,
      miner: contractData.miner,
    });

    return createContractData;
  }

  public async updateContract(
    request: UpdateContractRequest
  ): Promise<Contract> {
    if (isEmpty(request))
      throw new RpcException(400, "You're not contractData");

    const updateContractById = await this.contracts.findByIdAndUpdate(
      request.contractId,
      { ...request }
    );
    if (!updateContractById) {
      throw new RpcException(409, "You're not contract");
    }

    return updateContractById;
  }

  public async deleteContract(contractId: Types.ObjectId): Promise<Contract> {
    const deleteContractById = await this.contracts.findByIdAndDelete(
      contractId
    );
    if (!deleteContractById) {
      throw new RpcException(409, "You're not contract");
    }

    return deleteContractById;
  }
}
