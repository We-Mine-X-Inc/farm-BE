import { CoinType } from "wemine-apis";

export const RevenueSchema = {
  amount: { type: Number },
  coinType: { type: Number, enum: CoinType },
};
