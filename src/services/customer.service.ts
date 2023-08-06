import { CreateCustomerRequest } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { Customer } from "wemine-apis";
import customerModel from "@models/customer.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";
import { format as prettyFormat } from "pretty-format";

/**
 * Exposes operations allowable on the Customer database resource.
 */
export class CustomerService {
  public customers = customerModel;

  public async findAllCustomer(): Promise<Customer[]> {
    const customers: Customer[] = await this.customers.find().lean();
    return customers;
  }

  public async findCustomerById(customerId: Types.ObjectId): Promise<Customer> {
    const foundCustomer = await this.customers.findOne({
      _id: customerId,
    });
    if (!foundCustomer) throw new RpcException(409, "You're not customer");

    return foundCustomer;
  }

  public async findCustomerByEmail(customerEmail: string): Promise<Customer> {
    const foundCustomer = await this.customers.findOne({
      email: customerEmail,
    });
    if (!foundCustomer) throw new RpcException(409, "You're not customer");

    return foundCustomer;
  }

  public async createCustomer(
    customerData: CreateCustomerRequest
  ): Promise<Customer> {
    if (isEmpty(customerData))
      throw new RpcException(400, "You're not customerData");

    const foundCustomer = await this.customers.findOne({
      email: customerData.email,
    });
    if (foundCustomer)
      throw new RpcException(
        409,
        `Your email ${customerData.email} already exists`
      );

    const createCustomerData: Customer = await this.customers.create({
      ...customerData,
    });

    return createCustomerData;
  }

  public async updateCustomerById(
    customerId: Types.ObjectId,
    customerData: CreateCustomerRequest
  ): Promise<Customer> {
    if (isEmpty(customerData))
      throw new RpcException(400, "You're not customerData");

    if (customerData.email) {
      const foundCustomer = await this.customers.findOne({
        email: customerData.email,
      });
      if (foundCustomer && !foundCustomer._id.equals(customerId))
        throw new RpcException(
          409,
          `Your email ${
            customerData.email
          } is tied to a different user account than the id you
          provided: ${prettyFormat(customerId)} ---- ${prettyFormat(
            foundCustomer._id
          )}.`
        );
    }

    const updateCustomerById = await this.customers.findByIdAndUpdate(
      customerId,
      {
        ...customerData,
      }
    );
    if (!updateCustomerById) throw new RpcException(409, "You're not customer");

    return updateCustomerById;
  }

  public async deleteCustomer(customerId: Types.ObjectId): Promise<Customer> {
    const deleteCustomerById = await this.customers.findByIdAndDelete(
      customerId
    );
    if (!deleteCustomerById) throw new RpcException(409, "You're not customer");

    return deleteCustomerById;
  }
}
