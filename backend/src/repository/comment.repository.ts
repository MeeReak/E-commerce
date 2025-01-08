import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import commentModel from "../model/comment.model";
import { IComment, IUpdateComment } from "../model/types/comment.type";

class CommentRepository {
  private model: Model<IComment>;

  constructor(model: Model<IComment>) {
    this.model = model;
  }

  // Create a new product
  async create(data: IComment): Promise<IComment> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating comment: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<IComment | null> {
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
      throw new Error(`Error fetching comment with ID ${id}: ${error.message}`);
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<IComment[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching comments: ${error.message}`);
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IUpdateComment>
  ): Promise<IComment | null> {
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
  async deleteById(id: string): Promise<IComment | null> {
    try {
      const response = await this.model.findByIdAndDelete(id).exec();

      if (!response) {
        throw new ApiError(
          `Comment with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error deleting comment with ID ${id}: ${error.message}`);
    }
  }
}

// Initialize the repository with the model
const commentRepository = new CommentRepository(commentModel);
export default commentRepository;
