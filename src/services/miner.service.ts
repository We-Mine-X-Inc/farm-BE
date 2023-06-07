import { CreateMinerRequest, UpdateMinerRequest } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { Miner, MINER_FILEDS_TO_POPULATE } from "wemine-apis";
import minerModel from "@models/miner.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";

/**
 * Exposes operations allowable on the Miner database resource.
 */
export class MinerService {
  public miners = minerModel;

  public async findAllMiners(): Promise<Miner[]> {
    const miners: Miner[] = await this.miners
      .find()
      .populate(MINER_FILEDS_TO_POPULATE);
    return miners;
  }

  public async findMinerByFriendlyId(friendlyMinerId: string): Promise<Miner> {
    if (isEmpty(friendlyMinerId))
      throw new RpcException(400, "You're not a friendlyMinerId");

    const findMiner = await this.miners
      .findOne({ friendlyMinerId })
      .populate(MINER_FILEDS_TO_POPULATE);

    if (!findMiner) throw new RpcException(409, "You're not miner");

    return findMiner;
  }

  public async findMinerById(minerId: Types.ObjectId): Promise<Miner> {
    const findMiner = await this.miners
      .findOne({ _id: minerId })
      .populate(MINER_FILEDS_TO_POPULATE);

    if (!findMiner) throw new RpcException(409, "You're not miner");

    return findMiner;
  }

  public async createMiner(minerData: CreateMinerRequest): Promise<Miner> {
    if (isEmpty(minerData)) throw new RpcException(400, "You're not minerData");

    const findMiner = await this.miners.findOne({
      macAddress: minerData.macAddress,
    });
    if (findMiner)
      throw new RpcException(
        409,
        `You're MAC Address ${minerData.macAddress} already exists`
      );

    const createMinerData: Miner = await this.miners.create({ ...minerData });

    return createMinerData;
  }

  public async updateMiner(minerData: UpdateMinerRequest): Promise<Miner> {
    if (isEmpty(minerData)) throw new RpcException(400, "You're not minerData");

    const updateMinerById = await this.miners.findByIdAndUpdate(
      minerData.minerId,
      {
        ...minerData,
      }
    );
    if (!updateMinerById) throw new RpcException(409, "You're not miner.");

    return updateMinerById;
  }

  public async deleteMiner(minerId: Types.ObjectId): Promise<Miner> {
    const deleteMinerById = await this.miners.findByIdAndDelete(minerId);
    if (!deleteMinerById) throw new RpcException(409, "You're not miner.");

    return deleteMinerById;
  }
}
