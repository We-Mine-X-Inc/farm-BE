import { AddPoolWorkerHashRateContributionDto, ListPoolWorkerHashRateContributionRequestDto, ListPoolWorkerHashRateContributionResponseDto } from "wemine-apis";
import { PoolWorkerHashRateContribution } from "wemine-apis";
/** CRUD operations for hash rate metrics for pool workers for a miner. */
declare class PoolWorkerHashRateContributionService {
    private poolWorkerHashRateContributionModel;
    addWorkerHashRateContribution(hashRateContribution: AddPoolWorkerHashRateContributionDto): Promise<PoolWorkerHashRateContribution>;
    getWorkerHashRateContributions(request: ListPoolWorkerHashRateContributionRequestDto): Promise<ListPoolWorkerHashRateContributionResponseDto>;
    private convertPoolWorkerHashRateContribution;
}
export default PoolWorkerHashRateContributionService;
//# sourceMappingURL=pool-worker-hash-rate-contribution.service.d.ts.map