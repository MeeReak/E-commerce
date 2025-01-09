import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import {
  ICategoryProduct,
  IUpdateCategoryProduct,
} from "../model/types/category-product.type";
import categoryProductModel from "../model/category-product.model";

class CategoryProductRepository {
  private model: Model<ICategoryProduct>;

  constructor(model: Model<ICategoryProduct>) {
    this.model = model;
  }

  // Create a new product
  async create(data: ICategoryProduct): Promise<ICategoryProduct> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating category of product: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<ICategoryProduct | null> {
    try {
      const response = await this.model.findById(id).exec();

      if (!response) {
        throw new ApiError(
          `Category of product with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }
      return response;
    } catch (error: any | unknown) {
      throw new Error(
        `Error fetching Category of product with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<ICategoryProduct[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching category of product: ${error.message}`);
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IUpdateCategoryProduct>
  ): Promise<ICategoryProduct | null> {
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
      throw new Error(`Error updating category of product with ID ${id}: ${error.message}`);
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
        message: `Category  of product with ID ${id} deleted successfully`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw new Error(
        `Error deleting category of product with ID ${id}: ${error.message}`
      );
    }
  }
}

// Initialize the repository with the model
const categoryProductRepository = new CategoryProductRepository(categoryProductModel);
export default categoryProductRepository;
