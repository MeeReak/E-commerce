import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import {
  ICategoryBlog,
  IUpdateCategoryBlog,
} from "../model/types/category-blog.type";
import categoryBlogModel from "../model/category-blog.model";

class CategoryBlogRepository {
  private model: Model<ICategoryBlog>;

  constructor(model: Model<ICategoryBlog>) {
    this.model = model;
  }

  // Create a new product
  async create(data: ICategoryBlog): Promise<ICategoryBlog> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating category of blog: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<ICategoryBlog | null> {
    try {
      const response = await this.model.findById(id).exec();

      if (!response) {
        throw new ApiError(
          `Category of blog with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }
      return response;
    } catch (error: any | unknown) {
      throw new Error(
        `Error fetching Category of blog with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<ICategoryBlog[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching category  of blog: ${error.message}`);
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IUpdateCategoryBlog>
  ): Promise<ICategoryBlog | null> {
    try {
      const response = await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();

      if (!response) {
        throw new ApiError(
          `Category of blog with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return response;
    } catch (error: any | unknown) {
      console.log(error.message);

      throw new Error(
        `Error updating Blog of blog with ID ${id}: ${error.message}`
      );
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
        message: `Category of blog with ID ${id} deleted successfully`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw new Error(
        `Error deleting category of blog with ID ${id}: ${error.message}`
      );
    }
  }
}

// Initialize the repository with the model
const categoryBlogRepository = new CategoryBlogRepository(categoryBlogModel);
export default categoryBlogRepository;
