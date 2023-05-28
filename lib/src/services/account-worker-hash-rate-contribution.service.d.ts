import { AddPoolWorkerHashRateContributionRequest, ListPoolWorkerHashRateContributionRequestDto, ListPoolWorkerHashRateContributionResponseDto } from "wemine-apis";
import { WorkerHashRateContribution } from "wemine-apis";
/** CRUD operations for hash rate metrics for pool workers for a miner. */
export declare class WorkerHashRateContributionService {
    private workerHashRateContributionModel;
    addWorkerHashRateContribution(hashRateContribution: AddPoolWorkerHashRateContributionRequest): Promise<WorkerHashRateContribution>;
    getWorkerHashRateContributions(request: ListPoolWorkerHashRateContributionRequestDto): Promise<ListPoolWorkerHashRateContributionResponseDto>;
    private convertPoolWorkerHashRateContribution;
}
//# sourceMappingURL=account-worker-hash-rate-contribution.service.d.ts.map