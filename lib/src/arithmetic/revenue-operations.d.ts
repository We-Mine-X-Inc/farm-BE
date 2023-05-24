import { CoinType, Revenue } from "wemine-apis";
export declare function revenueSum(augend: Revenue, addend: Revenue): {
    amount: number;
    coinType: CoinType;
};
export declare function revenueDifference(minuend: Revenue, subtrahend: Revenue): {
    amount: number;
    coinType: CoinType;
};
export declare function revenueDivision(dividend: Revenue, divisor: Revenue): void;
//# sourceMappingURL=revenue-operations.d.ts.map