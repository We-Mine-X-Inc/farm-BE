import  {  Schema, Document, Connection } from "mongoose";
import { GoogleOAuthInfo, GoogleOAuthServiceType } from "wemine-apis";

const googleOAuthInfoSchema: Schema = new Schema({
  serviceType: {
    type: Number,
    enum: GoogleOAuthServiceType,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
  clientSecret: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  scopes: {
    type: Array<String>,
    required: true,
  },
});

export function loadGoogleOAuthInfoModel(connection: Connection) {
  return (
    connection.models["GoogleOAuthInfo"] ||
    connection.model<GoogleOAuthInfo & Document>(
      "GoogleOAuthInfo",
      googleOAuthInfoSchema
    )
  );
}
