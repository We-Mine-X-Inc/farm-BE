import { model, Schema, Document } from "mongoose";
import { GoogleOAuthInfo } from "wemine-apis";

const googleOAuthInfoSchema: Schema = new Schema({
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

const googleOAuthInfoModel = model<GoogleOAuthInfo & Document>(
  "GoogleOAuthInfo",
  googleOAuthInfoSchema
);

export default googleOAuthInfoModel;
