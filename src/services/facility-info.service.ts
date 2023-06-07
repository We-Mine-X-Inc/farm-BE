import { CreateFacilityInfoReqeust } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { FacilityInfo } from "wemine-apis";
import facilityInfoModel from "@models/facility-info.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";
import { format as prettyFormat } from "pretty-format";

/**
 * Exposes operations allowable on the FacilityInfo database resource.
 */
export class FacilityInfoService {
  public facilityInfos = facilityInfoModel;

  public async findAllFacilityInfos(): Promise<FacilityInfo[]> {
    const facilityInfos: FacilityInfo[] = await this.facilityInfos
      .find()
      .lean();
    return facilityInfos;
  }

  public async findFacilityInfoById(
    facilityInfoId: Types.ObjectId
  ): Promise<FacilityInfo> {
    const findFacilityInfo = await this.facilityInfos.findOne({
      _id: facilityInfoId,
    });
    if (!findFacilityInfo)
      throw new RpcException(409, "You're not facilityInfo");

    return findFacilityInfo;
  }

  public async createFacilityInfo(
    facilityInfoData: CreateFacilityInfoReqeust
  ): Promise<FacilityInfo> {
    if (isEmpty(facilityInfoData))
      throw new RpcException(400, "You're not facilityInfoData");

    const findFacilityInfo = await this.facilityInfos.findOne({
      name: facilityInfoData.name,
    });
    if (findFacilityInfo)
      throw new RpcException(
        409,
        `A facilityInfo for the miner ${prettyFormat(facilityInfoData.name)}
        already exists.`
      );

    const createFacilityInfoData: FacilityInfo =
      await this.facilityInfos.create({
        ...facilityInfoData,
      });

    return createFacilityInfoData;
  }

  public async updateFacilityInfo(
    facilityInfoId: Types.ObjectId,
    facilityInfoData: CreateFacilityInfoReqeust
  ): Promise<FacilityInfo> {
    // if (isEmpty(facilityInfoData))
    //   throw new RpcException(400, "You're not facilityInfoData");

    if (facilityInfoData.name) {
      const findFacilityInfo = await this.facilityInfos.findOne({
        name: facilityInfoData.name,
      });
      if (findFacilityInfo && !findFacilityInfo._id.equals(facilityInfoId))
        throw new RpcException(
          409,
          `You cannot apply an existing facilityInfo to a miner. You must create
          a new facilityInfo with the name already set.`
        );
    }

    const updateFacilityInfoById = await this.facilityInfos.findByIdAndUpdate(
      facilityInfoId,
      {
        ...facilityInfoData,
        isAutoManaged: facilityInfoData.isAutoManaged == "on",
      }
    );
    if (!updateFacilityInfoById) {
      throw new RpcException(409, "You're not facilityInfo");
    }

    return updateFacilityInfoById;
  }

  public async deleteFacilityInfo(
    facilityInfoId: Types.ObjectId
  ): Promise<FacilityInfo> {
    const deleteFacilityInfoById = await this.facilityInfos.findByIdAndDelete(
      facilityInfoId
    );
    if (!deleteFacilityInfoById) {
      throw new RpcException(409, "You're not facilityInfo");
    }

    return deleteFacilityInfoById;
  }
}
