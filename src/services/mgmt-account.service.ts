import { CreateMgmtAccountDto } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { MgmtAccount } from "wemine-apis";
import mgmtAccountModel from "@models/mgmt-account.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";

/**
 * Exposes operations allowable on the MgmtAccount database resource.
 */
export class MgmtAccountService {
  public mgmtAccounts = mgmtAccountModel;

  public async findAllMgmtAccount(): Promise<MgmtAccount[]> {
    const mgmtAccounts: MgmtAccount[] = await this.mgmtAccounts.find().lean();
    return mgmtAccounts;
  }

  public async findMgmtAccountById(
    mgmtAccountId: Types.ObjectId
  ): Promise<MgmtAccount> {
    if (isEmpty(mgmtAccountId))
      throw new RpcException(400, "You're not mgmtAccountId");

    const findMgmtAccount = await this.mgmtAccounts.findOne({
      _id: mgmtAccountId,
    });
    if (!findMgmtAccount) throw new RpcException(409, "You're not mgmtAccount");

    return findMgmtAccount;
  }

  public async createMgmtAccount(
    mgmtAccountData: CreateMgmtAccountDto
  ): Promise<MgmtAccount> {
    if (isEmpty(mgmtAccountData))
      throw new RpcException(400, "You're not mgmtAccountData");

    const findMgmtAccount = await this.mgmtAccounts.findOne({
      email: mgmtAccountData.email,
    });
    if (findMgmtAccount)
      throw new RpcException(
        409,
        `You're email ${mgmtAccountData.email} already exists`
      );

    const createMgmtAccountData: MgmtAccount = await this.mgmtAccounts.create({
      ...mgmtAccountData,
    });

    return createMgmtAccountData;
  }

  public async updateMgmtAccount(
    mgmtAccountId: Types.ObjectId,
    mgmtAccountData: CreateMgmtAccountDto
  ): Promise<MgmtAccount> {
    if (isEmpty(mgmtAccountData))
      throw new RpcException(400, "You're not mgmtAccountData");

    if (mgmtAccountData.email) {
      const findMgmtAccount = await this.mgmtAccounts.findOne({
        email: mgmtAccountData.email,
      });
      if (findMgmtAccount && !findMgmtAccount._id.equals(mgmtAccountId))
        throw new RpcException(
          409,
          `You're email ${mgmtAccountData.email} already exists`
        );
    }

    const updateMgmtAccountById = await this.mgmtAccounts.findByIdAndUpdate(
      mgmtAccountId,
      {
        ...mgmtAccountData,
      }
    );
    if (!updateMgmtAccountById)
      throw new RpcException(409, "You're not mgmtAccount");

    return updateMgmtAccountById;
  }

  public async deleteMgmtAccount(
    mgmtAccountId: Types.ObjectId
  ): Promise<MgmtAccount> {
    const deleteMgmtAccountById = await this.mgmtAccounts.findByIdAndDelete(
      mgmtAccountId
    );
    if (!deleteMgmtAccountById)
      throw new RpcException(409, "You're not mgmtAccount");

    return deleteMgmtAccountById;
  }
}
