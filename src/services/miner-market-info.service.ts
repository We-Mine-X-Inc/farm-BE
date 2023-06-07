import { CreateMinerMarketInfoRequest } from "wemine-apis";
import { RpcException } from "wemine-apis";
import {
  MinerMarketInfo,
  MINER_MARKET_INFO_FIELDS_TO_POPULATE,
} from "wemine-apis";
import minerMarketInfoModel from "@models/miner-market-info.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";
import { format as prettyFormat } from "pretty-format";

/**
 * Exposes operations allowable on the MinerMarketInfo database resource.
 */
export class MinerMarketInfoService {
  public minerMarketInfos = minerMarketInfoModel;

  public async findAllMinerMarketInfos(): Promise<MinerMarketInfo[]> {
    const minerMarketInfos: MinerMarketInfo[] = await this.minerMarketInfos
      .find()
      .populate(MINER_MARKET_INFO_FIELDS_TO_POPULATE);
    return minerMarketInfos;
  }

  public async findMinerMarketInfoById(
    minerMarketInfoId: Types.ObjectId
  ): Promise<MinerMarketInfo> {
    if (isEmpty(minerMarketInfoId))
      throw new RpcException(400, "You're not minerMarketInfoId");

    const findMinerMarketInfo = await await this.minerMarketInfos
      .findOne({ _id: minerMarketInfoId })
      .populate(MINER_MARKET_INFO_FIELDS_TO_POPULATE);

    if (!findMinerMarketInfo)
      throw new RpcException(409, "You're not minerMarketInfo");

    return findMinerMarketInfo;
  }

  public async createMinerMarketInfo(
    minerMarketInfoData: CreateMinerMarketInfoRequest
  ): Promise<MinerMarketInfo> {
    if (isEmpty(minerMarketInfoData))
      throw new RpcException(400, "You're not minerMarketInfoData");

    const findMinerMarketInfo = await this.minerMarketInfos.findOne({
      coinType: minerMarketInfoData.coinType,
      minerInventoryItem: minerMarketInfoData.minerInventoryItem,
    });
    if (findMinerMarketInfo)
      throw new RpcException(
        409,
        `A minerMarketInfo for the info ${prettyFormat(minerMarketInfoData)}
        already exists.`
      );

    const createMinerMarketInfoData: MinerMarketInfo =
      await this.minerMarketInfos.create({
        ...minerMarketInfoData,
      });

    return createMinerMarketInfoData;
  }

  public async updateMinerMarketInfo(
    minerMarketInfoId: Types.ObjectId,
    minerMarketInfoData: CreateMinerMarketInfoRequest
  ): Promise<MinerMarketInfo> {
    if (isEmpty(minerMarketInfoData))
      throw new RpcException(400, "You're not minerMarketInfoData");

    if (
      minerMarketInfoData.coinType &&
      minerMarketInfoData.minerInventoryItem
    ) {
      const findMinerMarketInfo = await this.minerMarketInfos.findOne({
        coinType: minerMarketInfoData.coinType,
        minerInventoryItem: minerMarketInfoData.minerInventoryItem,
      });
      if (
        findMinerMarketInfo &&
        !findMinerMarketInfo._id.equals(minerMarketInfoId)
      )
        throw new RpcException(
          409,
          `You change the CoinType or ItemId of an existing MinerMarketInfo object. Please create
          a new object if you want a different CoinType + InventoryItem pair.`
        );
    }

    const updateMinerMarketInfoById =
      await this.minerMarketInfos.findByIdAndUpdate(minerMarketInfoId, {
        ...minerMarketInfoData,
      });
    if (!updateMinerMarketInfoById) {
      throw new RpcException(409, "You're not minerMarketInfo");
    }

    return updateMinerMarketInfoById;
  }

  public async deleteMinerMarketInfo(
    minerMarketInfoId: Types.ObjectId
  ): Promise<MinerMarketInfo> {
    const deleteMinerMarketInfoById =
      await this.minerMarketInfos.findByIdAndDelete(minerMarketInfoId);
    if (!deleteMinerMarketInfoById) {
      throw new RpcException(409, "You're not minerMarketInfo");
    }

    return deleteMinerMarketInfoById;
  }
}
