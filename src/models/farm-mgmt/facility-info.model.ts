import { Schema, Document, Connection } from "mongoose";
import { FacilityInfo } from "wemine-apis";

const facilityInfoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: Number,
    required: true,
  },
  estPowerUsageInKiloWatts: {
    type: Number,
    required: true,
  },
  estPowerCapacityInKiloWatts: {
    type: Number,
    required: true,
  },
  estPowerCostInMicros: {
    type: Number,
    required: true,
  },
  farenheitTemp: {
    type: Number,
    required: true,
  },
  isAutoManaged: {
    type: Boolean,
    required: true,
  },
});

export function loadFacilityInfoModel(connection: Connection) {
  return (
    connection.models["FacilityInfo"] ||
    connection.model<FacilityInfo & Document>(
      "FacilityInfo",
      facilityInfoSchema
    )
  );
}
