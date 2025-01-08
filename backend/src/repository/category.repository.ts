import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import { ICategory, IUpdateCategory } from "../model/types/category.type";
import categoryModel from "../model/category.model";

class CategoryRepository {
  private model: Model<ICategory>;

  constructor(model: Model<ICategory>) {
    this.model = model;
  }

  // Create a new product
  async create(data: ICategory): Promise<ICategory> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<ICategory | null> {
    try {
      const response = await this.model.findById(id).exec();

      if (!response) {
        throw new ApiError(
          `Category with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }
      return response;
    } catch (error: any | unknown) {
      throw new Error(
        `Error fetching Category with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<ICategory[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching category: ${error.message}`);
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IUpdateCategory>
  ): Promise<ICategory | null> {
    try {
      const response = await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();

      if (!response) {
        throw new ApiError(
          `Comment with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error updating comment with ID ${id}: ${error.message}`);
    }
  }

  // Delete a product by ID
  async deleteById(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const response = await this.model.findByIdAndDelete(id).exec();

      if (!response) {
        throw new ApiError(
          `Comment with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return {
        message: `Category with ID ${id} deleted successfully`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw new Error(
        `Error deleting category with ID ${id}: ${error.message}`
      );
    }
  }
}

// Initialize the repository with the model
const categoryRepository = new CategoryRepository(categoryModel);
export default categoryRepository;
