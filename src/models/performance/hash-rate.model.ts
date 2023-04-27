import { HashRateUnitType } from "wemine-apis";

export const HashRateSchema = {
  unit: { type: Number, enum: HashRateUnitType },
  quantity: { type: Number },
};
