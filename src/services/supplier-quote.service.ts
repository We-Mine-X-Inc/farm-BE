import { CreateSupplierQuoteRequest } from "wemine-apis";
import { RpcException } from "wemine-apis";
import { SupplierQuote } from "wemine-apis";
import supplierQuoteModel from "@models/supplier-quote.model";
import { isEmpty } from "@utils/util";
import { Types } from "mongoose";

/**
 * Exposes operations allowable on the SupplierQuote database resource.
 */
export class SupplierQuoteService {
  public supplierQuotes = supplierQuoteModel;

  public async findAllSupplierQuotes(): Promise<SupplierQuote[]> {
    const supplierQuotes: SupplierQuote[] = await this.supplierQuotes
      .find()
      .lean();
    return supplierQuotes;
  }

  public async findSupplierQuoteById(
    supplierQuoteId: Types.ObjectId
  ): Promise<SupplierQuote> {
    const findSupplierQuote = await this.supplierQuotes.findOne({
      _id: supplierQuoteId,
    });
    if (!findSupplierQuote)
      throw new RpcException(409, "You're not supplierQuote");

    return findSupplierQuote;
  }

  public async createSupplierQuote(
    supplierQuoteData: CreateSupplierQuoteRequest
  ): Promise<SupplierQuote> {
    if (isEmpty(supplierQuoteData))
      throw new RpcException(400, "You're not supplierQuoteData");

    const createSupplierQuoteData: SupplierQuote =
      await this.supplierQuotes.create({ ...supplierQuoteData });

    return createSupplierQuoteData;
  }

  public async updateSupplierQuote(
    supplierQuoteId: Types.ObjectId,
    supplierQuoteData: CreateSupplierQuoteRequest
  ): Promise<SupplierQuote> {
    if (isEmpty(supplierQuoteData))
      throw new RpcException(400, "You're not supplierQuoteData");

    const updateSupplierQuoteById = await this.supplierQuotes.findByIdAndUpdate(
      supplierQuoteId,
      {
        ...supplierQuoteData,
      }
    );
    if (!updateSupplierQuoteById)
      throw new RpcException(409, "You're not supplierQuote");

    return updateSupplierQuoteById;
  }

  public async deleteSupplierQuote(
    supplierQuoteId: Types.ObjectId
  ): Promise<SupplierQuote> {
    const deleteSupplierQuoteById = await this.supplierQuotes.findByIdAndDelete(
      supplierQuoteId
    );
    if (!deleteSupplierQuoteById)
      throw new RpcException(409, "You're not supplierQuote");

    return deleteSupplierQuoteById;
  }
}
