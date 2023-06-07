import { CreatePoolRequest } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { POOL_FIELDS_TO_POPULATE, Pool } from "wemine-apis";
import poolModel from "@models/pool.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";

/**
 * Exposes operations allowable on the Pool database resource.
 */
export class PoolService {
  public pools = poolModel;

  public async findAllPools(): Promise<Pool[]> {
    const pools: Pool[] = await this.pools
      .find()
      .populate(POOL_FIELDS_TO_POPULATE);
    return pools;
  }

  public async findPoolById(poolId: Types.ObjectId): Promise<Pool> {
    if (Types.ObjectId.isValid(poolId))
      throw new RpcException(400, "You're not poolId");

    const findPool = await this.pools
      .findOne({ _id: poolId })
      .populate(POOL_FIELDS_TO_POPULATE);
    if (!findPool) throw new RpcException(409, "You're not pool");

    return findPool;
  }

  public async createPool(poolData: CreatePoolRequest): Promise<Pool> {
    if (isEmpty(poolData)) throw new RpcException(400, "You're not poolData");

    const findPool = await this.pools.findOne({
      ...poolData,
    });
    if (findPool)
      throw new RpcException(
        409,
        `Duplicate pool not permitted: ${poolData}. `
      );

    const createPoolData: Pool = await this.pools.create({ ...poolData });

    return createPoolData;
  }

  public async deletePool(poolId: Types.ObjectId): Promise<Pool> {
    const deletePoolById = await this.pools.findByIdAndDelete(poolId);
    if (!deletePoolById) throw new RpcException(409, "You're not pool");

    return deletePoolById;
  }
}
