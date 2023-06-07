import { CreateCoinMarketInfoRequest } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { CoinMarketInfo } from "wemine-apis";
import coinMarketInfoModel from "@models/coin-market-info.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";
import { format as prettyFormat } from "pretty-format";

/**
 * Exposes operations allowable on the CoinMarketInfo database resource.
 */
export class CoinMarketInfoService {
  public coinMarketInfos = coinMarketInfoModel;

  public async findAllCoinMarketInfos(): Promise<CoinMarketInfo[]> {
    const coinMarketInfos: CoinMarketInfo[] = await this.coinMarketInfos
      .find()
      .lean();
    return coinMarketInfos;
  }

  public async findCoinMarketInfoById(
    coinMarketInfoId: Types.ObjectId
  ): Promise<CoinMarketInfo> {
    if (Types.ObjectId.isValid(coinMarketInfoId))
      throw new RpcException(400, "You're not coinMarketInfoId");

    const findCoinMarketInfo = await this.coinMarketInfos.findOne({
      _id: coinMarketInfoId,
    });
    if (!findCoinMarketInfo)
      throw new RpcException(409, "You're not coinMarketInfo");

    return findCoinMarketInfo;
  }

  public async createCoinMarketInfo(
    coinMarketInfoData: CreateCoinMarketInfoRequest
  ): Promise<CoinMarketInfo> {
    if (isEmpty(coinMarketInfoData))
      throw new RpcException(400, "You're not coinMarketInfoData");

    const findCoinMarketInfo = await this.coinMarketInfos.findOne({
      coinType: coinMarketInfoData.coinType,
    });
    if (findCoinMarketInfo)
      throw new RpcException(
        409,
        `A coinMarketInfo for the coinType ${prettyFormat(
          coinMarketInfoData.coinType
        )}
        already exists.`
      );

    const createCoinMarketInfoData: CoinMarketInfo =
      await this.coinMarketInfos.create({
        ...coinMarketInfoData,
      });

    return createCoinMarketInfoData;
  }

  public async updateCoinMarketInfo(
    coinMarketInfoId: Types.ObjectId,
    coinMarketInfoData: CreateCoinMarketInfoRequest
  ): Promise<CoinMarketInfo> {
    if (isEmpty(coinMarketInfoData))
      throw new RpcException(400, "You're not coinMarketInfoData");

    if (coinMarketInfoData.coinType) {
      const findCoinMarketInfo = await this.coinMarketInfos.findOne({
        coinType: coinMarketInfoData.coinType,
      });
      if (
        findCoinMarketInfo &&
        !findCoinMarketInfo._id.equals(coinMarketInfoId)
      )
        throw new RpcException(
          409,
          `You cannot update the coinType of an existing CoinMarketInfo. Create a new object
          if you want a different CoinType. `
        );
    }

    const updateCoinMarketInfoById =
      await this.coinMarketInfos.findByIdAndUpdate(coinMarketInfoId, {
        ...coinMarketInfoData,
      });
    if (!updateCoinMarketInfoById) {
      throw new RpcException(409, "You're not coinMarketInfo");
    }

    return updateCoinMarketInfoById;
  }

  public async deleteCoinMarketInfo(
    coinMarketInfoId: Types.ObjectId
  ): Promise<CoinMarketInfo> {
    if (Types.ObjectId.isValid(coinMarketInfoId))
      throw new RpcException(400, "You're not coinMarketInfoId");

    const deleteCoinMarketInfoById =
      await this.coinMarketInfos.findByIdAndDelete(coinMarketInfoId);
    if (!deleteCoinMarketInfoById) {
      throw new RpcException(409, "You're not coinMarketInfo");
    }

    return deleteCoinMarketInfoById;
  }
}
