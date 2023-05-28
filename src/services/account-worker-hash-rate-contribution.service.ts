import {
  AddPoolWorkerHashRateContributionRequest,
  ListPoolWorkerHashRateContributionRequestDto,
  ListPoolWorkerHashRateContributionResponseDto,
} from "wemine-apis";
import { RpcException } from "wemine-apis";
import {
  WorkerHashRateContribution,
  WorkerHashRateContributionModel,
} from "wemine-apis";
import workerHashRateContributionModel from "@/src/models/account-worker-hash-rate-contribution.model";
import { isEmpty } from "@utils/util";

/** CRUD operations for hash rate metrics for pool workers for a miner. */
export class WorkerHashRateContributionService {
  private workerHashRateContributionModel = workerHashRateContributionModel;

  public async addWorkerHashRateContribution(
    hashRateContribution: AddPoolWorkerHashRateContributionRequest
  ) {
    if (isEmpty(hashRateContribution))
      throw new RpcException(
        400,
        "You're not a AddPoolWorkerHashRateContributionRequest"
      );

    const existingContributionRecord =
      await this.workerHashRateContributionModel.find({
        accountAddress: hashRateContribution.accountAddress,
        timeRange: hashRateContribution.timeRange,
      });
    if (existingContributionRecord.length > 0) {
      throw new RpcException(400, "TimeRange for this pool already exists.");
    }

    return await this.workerHashRateContributionModel
      .create({
        poolUsername: hashRateContribution.accountAddress,
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

    const workerContributions: WorkerHashRateContributionModel[] =
      await this.workerHashRateContributionModel.find({
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

    return {
      workerContributions: workerContributions.map((model) =>
        this.convertPoolWorkerHashRateContribution(model)
      ),
    };
  }

  private convertPoolWorkerHashRateContribution(
    contributionModel: WorkerHashRateContributionModel
  ): WorkerHashRateContribution {
    return {
      _id: contributionModel._id,
      timeRange: contributionModel.timeRange,
      accountAddress: contributionModel.accountAddress,
      clientWorkers: JSON.parse(contributionModel.clientWorkers),
      companyWorkers: JSON.parse(contributionModel.companyWorkers),
    };
  }
}
