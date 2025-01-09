import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import { ICommentBlog, IUpdateCommentBlog } from "../model/types/comment-blog.type";
import commentBlogModel from "../model/comment-blog.model";

class CommentBlogRepository {
  private model: Model<ICommentBlog>;

  constructor(model: Model<ICommentBlog>) {
    this.model = model;
  }

  // Create a new product
  async create(data: ICommentBlog): Promise<ICommentBlog> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating comment of blog: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<ICommentBlog | null> {
    try {
      const response = await this.model.findById(id).exec();

      if (!response) {
        throw new ApiError(
          `Comment with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }
      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error fetching comment of blog with ID ${id}: ${error.message}`);
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<ICommentBlog[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching comments of blog: ${error.message}`);
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IUpdateCommentBlog>
  ): Promise<ICommentBlog | null> {
    try {
      const response = await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();

      if (!response) {
        throw new ApiError(
          `Comment of blog with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error updating comment of blog with ID ${id}: ${error.message}`);
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
          `Comment of blog with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return {
        message: `Comment of blog with ID ${id} deleted successfully.`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw new Error(`Error deleting comment of blog with ID ${id}: ${error.message}`);
    }
  }
}

// Initialize the repository with the model
const commentBlogRepository = new CommentBlogRepository(commentBlogModel);
export default commentBlogRepository;
