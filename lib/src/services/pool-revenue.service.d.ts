import { AddPoolRevenueDto, ListPoolRevenueRequestDto, ListPoolRevenueResponseDto } from "wemine-apis";
/** CRUD operations for revenue metrics associated with miners. */
export declare class PoolRevenueService {
    private poolRevenueModel;
    addPoolRevenue(poolRevenue: AddPoolRevenueDto): Promise<any>;
    getPoolRevenues(request: ListPoolRevenueRequestDto): Promise<ListPoolRevenueResponseDto>;
    private buildTimeRangeQuery;
    private buildTimeSingletonQuery;
}
//# sourceMappingURL=pool-revenue.service.d.ts.map