import  {
  
  Schema,
  Document,
  Connection,
} from "mongoose";
import { UptimeTick } from "wemine-apis";

const uptimeTickSchema: Schema = new Schema({
  environmentConfigId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
  },
});

export function loadUptimeTickModel(connection: Connection) {
  return (
    connection.models["UptimeTick"] ||
    connection.model<UptimeTick & Document>("UptimeTick", uptimeTickSchema)
  );
}
