import {
  AddPoolWorkerHashRateContributionDto,
  ListPoolWorkerHashRateContributionRequestDto,
  ListPoolWorkerHashRateContributionResponseDto,
} from "wemine-apis";
import { RpcException } from "wemine-apis";
import {
  PoolWorkerHashRateContribution,
  PoolWorkerHashRateContributionModel,
} from "wemine-apis";
import poolWorkerHashRateContributionModel from "@models/pool-worker-hash-rate-contribution.model";
import { isEmpty } from "@utils/util";

/** CRUD operations for hash rate metrics for pool workers for a miner. */
class PoolWorkerHashRateContributionService {
  private poolWorkerHashRateContributionModel =
    poolWorkerHashRateContributionModel;

  public async addWorkerHashRateContribution(
    hashRateContribution: AddPoolWorkerHashRateContributionDto
  ) {
    if (isEmpty(hashRateContribution))
      throw new RpcException(
        400,
        "You're not a AddPoolWorkerHashRateContributionDto"
      );

    const existingContributionRecord =
      await this.poolWorkerHashRateContributionModel.find({
        poolUsername: hashRateContribution.poolUsername,
        timeRange: hashRateContribution.timeRange,
      });
    if (existingContributionRecord.length > 0) {
      throw new RpcException(400, "TimeRange for this pool already exists.");
    }

    return await this.poolWorkerHashRateContributionModel
      .create({
        poolUsername: hashRateContribution.poolUsername,
        timeRange: hashRateContribution.timeRange,
        clientWorkers: JSON.stringify(hashRateContribution.clientWorkers),
        companyWorkers: JSON.stringify(hashRateContribution.companyWorkers),
      })
      .then((newContribution) =>
        this.convertPoolWorkerHashRateContribution(newContribution)
      );
  }

  public async getWorkerHashRateContributions(
    request: ListPoolWorkerHashRateContributionRequestDto
  ): Promise<ListPoolWorkerHashRateContributionResponseDto> {
    if (isEmpty(request))
      throw new RpcException(
        400,
        "You're not a ListPoolWorkerHashRateContributionRequestDto"
      );

    const poolWorkerContributions: PoolWorkerHashRateContributionModel[] =
      await this.poolWorkerHashRateContributionModel.find({
        $or: [
          {
            // First timeRange if startInMillis lands in the middle a stored range.
            poolUsername: { $in: request.poolUsernames },
            "timeRange.startInMillis": {
              $lte: request.timeRange?.startInMillis,
            },
            "timeRange.endInMillis": { $gte: request.timeRange?.startInMillis },
          },
          {
            // Middle timeRanges if any exist.
            poolUsername: { $in: request.poolUsernames },
            "timeRange.startInMillis": {
              $gte: request.timeRange?.startInMillis,
            },
            "timeRange.endInMillis": { $lte: request.timeRange?.endInMillis },
          },
          {
            // Last timeRange if endInMillis lands in the middle a stored range.
            poolUsername: { $in: request.poolUsernames },
            "timeRange.startInMillis": {
              $lte: request.timeRange?.endInMillis,
            },
            "timeRange.endInMillis": { $gte: request.timeRange?.endInMillis },
          },
        ],
      });

    return {
      poolWorkerContributions: poolWorkerContributions.map((model) =>
        this.convertPoolWorkerHashRateContribution(model)
      ),
    };
  }

  private convertPoolWorkerHashRateContribution(
    contributionModel: PoolWorkerHashRateContributionModel
  ): PoolWorkerHashRateContribution {
    return {
      _id: contributionModel._id,
      timeRange: contributionModel.timeRange,
      poolUsername: contributionModel.poolUsername,
      clientWorkers: JSON.parse(contributionModel.clientWorkers),
      companyWorkers: JSON.parse(contributionModel.companyWorkers),
    };
  }
}

export default PoolWorkerHashRateContributionService;
