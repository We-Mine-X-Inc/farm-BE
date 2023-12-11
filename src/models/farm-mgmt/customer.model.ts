import { Schema, Document, Connection } from "mongoose";
import { Customer } from "wemine-apis";

const customerSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  isCompanyCustomer: {
    type: Boolean,
    required: true,
  },
  hasSubmittedSignUpInfo: {
    type: Boolean,
    required: true,
  },
});

export function loadCustomerModel(connection: Connection) {
  return (
    connection.models["Customer"] ||
    connection.model<Customer & Document>("Customer", customerSchema)
  );
}
