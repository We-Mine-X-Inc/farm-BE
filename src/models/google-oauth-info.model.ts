import mongoose, { model, Schema, Document } from "mongoose";
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

const googleOAuthInfoModel =
  mongoose.models["GoogleOAuthInfo"] ||
  model<GoogleOAuthInfo & Document>("GoogleOAuthInfo", googleOAuthInfoSchema);

export default googleOAuthInfoModel;
