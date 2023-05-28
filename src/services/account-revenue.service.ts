import {
  AddMiningAccountRevenueRequest,
  ListMiningAccountRevenueRequest,
  ListMiningAccountRevenueResponse,
} from "wemine-apis";
import { RpcException } from "wemine-apis";
import accountRevenueModel from "@/src/models/account-revenue.model";
import { isEmpty } from "@utils/util";
import { format as prettyFormat } from "pretty-format";

/** CRUD operations for revenue metrics associated with miners. */
export class AccountRevenueService {
  private accountRevenueModel = accountRevenueModel;

  public async addAccountRevenue(request: AddMiningAccountRevenueRequest) {
    if (isEmpty(request))
      throw new RpcException(
        400,
        "You're not a AddMiningAccountRevenueRequest"
      );

    return await this.accountRevenueModel.create({
      miningAccountUsername: request.accountAddress,
      timeRange: request.timeRange,
      cummulativeProfits: request.cummulativeProfits,
    });
  }

  public async getAccountRevenues(
    request: ListMiningAccountRevenueRequest
  ): Promise<ListMiningAccountRevenueResponse> {
    if (isEmpty(request))
      throw new RpcException(
        400,
        "You're not a AddMiningAccountRevenueRequest"
      );

    const specifiedTime = request.timeRange || request.timeSingleton;
    if (!specifiedTime) throw new RpcException(400, "Must specify time.");

    const accountRevenuesPromise = !!request.timeRange
      ? this.buildTimeRangeQuery(request)
      : this.buildTimeSingletonQuery(request);
    const accountRevenues = await accountRevenuesPromise;

    console.log(prettyFormat(accountRevenues));
    return { accountRevenues };
  }

  private buildTimeRangeQuery(request: ListMiningAccountRevenueRequest) {
    return this.accountRevenueModel.find({
      $or: [
        {
          // First timeRange if startInMillis lands in the middle a stored range.
          poolUsername: { $in: request.accountAddresses },
          "timeRange.startInMillis": {
            $lte: request.timeRange?.startInMillis,
          },
          "timeRange.endInMillis": { $gte: request.timeRange?.startInMillis },
        },
        {
          // Middle timeRanges if any exist.
          poolUsername: { $in: request.accountAddresses },
          "timeRange.startInMillis": {
            $gte: request.timeRange?.startInMillis,
          },
          "timeRange.endInMillis": { $lte: request.timeRange?.endInMillis },
        },
        {
          // Last timeRange if endInMillis lands in the middle a stored range.
          poolUsername: { $in: request.accountAddresses },
          "timeRange.startInMillis": {
            $lte: request.timeRange?.endInMillis,
          },
          "timeRange.endInMillis": { $gte: request.timeRange?.endInMillis },
        },
      ],
    });
  }

  private buildTimeSingletonQuery(request: ListMiningAccountRevenueRequest) {
    return this.accountRevenueModel
      .find({
        poolUsername: { $in: request.accountAddresses },
        "timeRange.startInMillis": {
          $lte: request.timeSingleton?.timeInMillis,
        },
        "timeRange.endInMillis": { $gte: request.timeSingleton?.timeInMillis },
      })
      .sort({ "timeRange.startInMillis": 1 })
      .limit(1);
  }
}
