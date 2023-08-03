import { WorkerHashRateContributionModel } from "wemine-apis";
import mongoose, { model, Schema, Document } from "mongoose";
import { TimeRangeSchema } from "./performance/time.model";

const workerHashRateContributionSchema: Schema = new Schema({
  accountAddress: {
    type: String,
    required: true,
  },
  timeRange: {
    ...TimeRangeSchema,
  },
  clientWorkers: {
    type: String,
    required: true,
    default: JSON.stringify({}),
  },
  companyWorkers: {
    type: String,
    required: true,
    default: JSON.stringify({}),
  },
});

const workerHashRateContributionModel =
  mongoose.models["WorkerHashRateContribution"] ||
  model<WorkerHashRateContributionModel & Document>(
    "WorkerHashRateContribution",
    workerHashRateContributionSchema
  );

export default workerHashRateContributionModel;
