import { Model } from "mongoose";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import { IWishlist, IUpdateWishlist } from "../model/types/wishlist.type";
import wishlistModel from "../model/wishlist.model";

class WishlistRepository {
  private model: Model<IWishlist>;

  constructor(model: Model<IWishlist>) {
    this.model = model;
  }

  // Create a new product
  async create(data: IWishlist): Promise<IWishlist> {
    try {
      const response = await this.model.create(data);
      return response.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating wishlist: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<IWishlist | null> {
    try {
      const response = await this.model.findById(id).exec();

      if (!response) {
        throw new ApiError(
          `wishlist with Id ${id} not found.`,
          StatusCode.NotFound
        );
      }
      return response;
    } catch (error: any | unknown) {
      throw new Error(
        `Error fetching wishlist with Id ${id}: ${error.message}`
      );
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<IWishlist[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching category  of blog: ${error.message}`);
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IUpdateWishlist>
  ): Promise<IWishlist | null> {
    try {
      const response = await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();

      if (!response) {
        throw new ApiError(
          `wishlist with Id ${id} not found.`,
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
        message: `wishlist with Id ${id} deleted successfully`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw new Error(
        `Error deleting wishlist with Id ${id}: ${error.message}`
      );
    }
  }
}

// Initialize the repository with the model
const wishlistRepository = new WishlistRepository(wishlistModel);
export default wishlistRepository;
