import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";
import userRepository from "../repository/user.repository";
import { IUpdateUser, IUser } from "src/model/types/user.type";

class UserService {
  // Create a new category
  async create(data: IUser): Promise<IUser> {
    try {
      const response = await userRepository.create(data);
      if (!response) {
        throw new Error("Error creating user");
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

  // Get a category by ID
  async getOne(id: string): Promise<IUser | null> {
    try {
      const response = await userRepository.getById(id);
      if (!response) {
        throw new APIError(`user with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(`Error fetching user with ID ${id}: ${error.message}`);
    }
  }

  // Get all categories with optional filtering
  async getAll(filter: IFilter): Promise<{
    data: IUser[];
    pagination: IPaginated;
  }> {
    let response = await userRepository.getAll();

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

  // Update a category by ID
  async update(
    id: string,
    update: Partial<IUpdateUser>
  ): Promise<IUser | null> {
    try {
      const response = await userRepository.updateById(id, update);

      if (!response) {
        throw new Error(`User with ID ${id} not found.`);
      }

      return response;
    } catch (error: unknown | any) {
      console.log(error.message);
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  // Delete a category by ID
  async delete(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const response = await userRepository.getById(id);
      if (!response) {
        throw new Error(`User with ID ${id} not found.`);
      }

      return userRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new UserService();
