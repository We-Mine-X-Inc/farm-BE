import { GoogleOAuthServiceType, RpcException } from "wemine-apis";
import { GoogleOAuthInfo } from "wemine-apis";
import googleOAuthInfoModel from "@models/google-oauth-info.model";

/**
 * Exposes operations allowable on the GoogleOAuthInfo database resource.
 */
export class GoogleOAuthInfoService {
  public googleOAuthInfos = googleOAuthInfoModel;

  public async findAllGoogleOAuthInfos(): Promise<GoogleOAuthInfo[]> {
    const googleOAuthInfos: GoogleOAuthInfo[] = await this.googleOAuthInfos
      .find()
      .lean();
    return googleOAuthInfos;
  }

  public async findGoogleOAuthInfoByType(
    googleOAuthType: GoogleOAuthServiceType
  ): Promise<GoogleOAuthInfo> {
    const findGoogleOAuthInfo = await this.googleOAuthInfos.findOne({
      serviceType: googleOAuthType,
    });
    if (!findGoogleOAuthInfo)
      throw new RpcException(409, "You're not googleOAuthInfo");

    return findGoogleOAuthInfo;
  }
}
