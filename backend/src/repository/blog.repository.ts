import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import { IBlog, IUpdateBlog } from "../model/types/blog.type";
import blogModel from "../model/blog.model";

class BlogRepository {
  private model: Model<IBlog>;

  constructor(model: Model<IBlog>) {
    this.model = model;
  }

  // Create a new blog
  async create(data: IBlog): Promise<IBlog> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0];
        const fieldValue = error.keyValue[fieldName];

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating blog: ${error.message}`);
    }
  }

  // Get a blog by ID
  async getById(id: string): Promise<IBlog | null> {
    try {
      const response = await this.model.findById(id).exec();

      if (!response) {
        throw new ApiError(
          `Blog with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }
      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error fetching blog with ID ${id}: ${error.message}`);
    }
  }

  // Get all blogs with optional filtering
  async getAll(): Promise<IBlog[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }
  }

  // Update a blog by ID
  async updateById(
    id: string,
    update: Partial<IUpdateBlog>
  ): Promise<IBlog | null> {
    try {
      const response = await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();

      if (!response) {
        throw new ApiError(
          `Blog with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error updating blog with ID ${id}: ${error.message}`);
    }
  }

  // Delete a blog by ID
  async deleteById(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const response = await this.model.findByIdAndDelete(id).exec();

      if (!response) {
        throw new ApiError(
          `Blog with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return {
        message: `Blog with ID ${id} deleted successfully`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw new Error(`Error deleting blog with ID ${id}: ${error.message}`);
    }
  }
}

// Initialize the repository with the model
const blogRepository = new BlogRepository(blogModel);
export default blogRepository;
