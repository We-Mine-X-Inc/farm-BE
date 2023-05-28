import { CoinType, EconomicValue } from "wemine-apis";
export declare function revenueSum(augend: EconomicValue, addend: EconomicValue): {
    amount: number;
    coinType: CoinType;
};
export declare function revenueDifference(minuend: EconomicValue, subtrahend: EconomicValue): {
    amount: number;
    coinType: CoinType;
};
export declare function revenueDivision(dividend: EconomicValue, divisor: EconomicValue): void;
//# sourceMappingURL=revenue-operations.d.ts.map