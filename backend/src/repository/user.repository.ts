import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { StatusCode } from "../util/consts";
import { IUser, IUpdateUser } from "../model/types/user.type";
import userModel from "../model/user.model";

class UserRepository {
  private model: Model<IUser>;

  constructor(model: Model<IUser>) {
    this.model = model;
  }

  // Create a new product
  async create(data: IUser): Promise<IUser> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw error;
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<IUser | null> {
    try {
      return await this.model.findById(id).exec();
    } catch (error: any | unknown) {
      throw error;
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<IUser[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw error;
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IUpdateUser>
  ): Promise<IUser | null> {
    try {
      return await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();
    } catch (error: any | unknown) {
      throw error;
    }
  }

  // Delete a product by ID
  async deleteById(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      await this.model.findByIdAndDelete(id).exec();

      return {
        message: `wishlist with Id ${id} deleted successfully`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
    throw error
    }
  }
}

// Initialize the repository with the model
const userRepository = new UserRepository(userModel);
export default userRepository;
