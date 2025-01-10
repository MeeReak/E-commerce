import { Model } from "mongoose";
import { StatusCode } from "../util/consts";
import { IAddress, IUpdate } from "../model/types/address.type";
import addressModel from "../model/address.model";

class AddressRepository {
  private model: Model<IAddress>;

  constructor(model: Model<IAddress>) {
    this.model = model;
  }

  async create(data: IAddress): Promise<IAddress> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      throw error;
    }
  }

  async getById(id: string): Promise<IAddress | null> {
    try {
      const response = await this.model.findById(id).exec();

      return response;
    } catch (error: any | unknown) {
      throw error;
    }
  }

  async getAll(): Promise<IAddress[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw error;
    }
  }

  async updateById(
    id: string,
    update: Partial<IUpdate>
  ): Promise<IAddress | null> {
    try {
      return await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();
    } catch (error: any | unknown) {
      throw error;
    }
  }

  async deleteById(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      await this.model.findByIdAndDelete(id).exec();

      return {
        message: `Address with Id ${id} deleted successfully`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw error;
    }
  }
}

const addressRepository = new AddressRepository(addressModel);
export default addressRepository;
