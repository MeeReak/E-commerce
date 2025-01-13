import { IAddress, IUpdate } from "../model/types/address.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";
import addressRepository from "../repository/address.repository";

class AddressService {
  async create(data: IAddress): Promise<IAddress> {
    try {
      const response = await addressRepository.create(data);

      if (!response) {
        throw new APIError("Error creating address", 500);
      }

      return response;
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0];
        const fieldValue = error.keyValue[fieldName];
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  async getOne(id: string): Promise<IAddress | null> {
    try {
      const response = await addressRepository.getById(id);
      if (!response) {
        throw new APIError(`address with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  async getAll(filter: IFilter): Promise<{
    data: IAddress[];
    pagination: IPaginated;
  }> {
    let response = await addressRepository.getAll();

    const { page = 1, perPage = 10 } = filter;
    const totalRecord = response.length;
    const totalPage = Math.ceil(totalRecord / perPage);

    response = response.slice((page - 1) * perPage, page * perPage);
    return {
      data: response,
      pagination: {
        page,
        perPage,
        totalRecord,
        totalPage,
      },
    };
  }

  async update(id: string, update: Partial<IUpdate>): Promise<IAddress | null> {
    try {
      const exitingAddress = await addressRepository.getById(id);
      if (!exitingAddress) {
        throw new APIError(`address with ID ${id} not found.`);
      }

      exitingAddress.updateAt = new Date();

      return addressRepository.updateById(id, {
        ...exitingAddress,
        ...update,
      });
    } catch (error: unknown | any) {
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  async delete(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const response = await addressRepository.getById(id);
      if (!response) {
        throw new APIError(`Address with ID ${id} not found.`);
      }

      return addressRepository.deleteById(id);
    } catch (error: unknown | any) {
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }
}

export default new AddressService();
