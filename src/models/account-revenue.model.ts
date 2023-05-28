import { MiningAccountRevenue } from "wemine-apis";
import { model, Schema, Document } from "mongoose";
import { RevenueSchema } from "./performance/revenue.model";
import { TimeRangeSchema } from "./performance/time.model";

const accountRevenueSchema: Schema = new Schema({
  accountAddress: {
    type: String,
    required: true,
  },
  timeRange: {
    ...TimeRangeSchema,
  },
  cummulativeProfits: {
    ...RevenueSchema,
  },
});

const accountRevenueModel = model<MiningAccountRevenue & Document>(
  "MiningAccountRevenue",
  accountRevenueSchema
);

export default accountRevenueModel;
