import { HashRateUnitType } from "wemine-apis";
export declare const HashRateSchema: {
    unit: {
        type: NumberConstructor;
        enum: typeof HashRateUnitType;
    };
    quantity: {
        type: NumberConstructor;
    };
};
//# sourceMappingURL=hash-rate.model.d.ts.map