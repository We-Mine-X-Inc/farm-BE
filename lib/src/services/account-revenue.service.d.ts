import { AddMiningAccountRevenueRequest, ListMiningAccountRevenueRequest, ListMiningAccountRevenueResponse } from "wemine-apis";
/** CRUD operations for revenue metrics associated with miners. */
export declare class AccountRevenueService {
    private accountRevenueModel;
    addAccountRevenue(request: AddMiningAccountRevenueRequest): Promise<any>;
    getAccountRevenues(request: ListMiningAccountRevenueRequest): Promise<ListMiningAccountRevenueResponse>;
    private buildTimeRangeQuery;
    private buildTimeSingletonQuery;
}
//# sourceMappingURL=account-revenue.service.d.ts.map