import { Model } from "mongoose";
import { IProduct } from "../model/types/product.type";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import ApiError from "../Error/api-error";
import { StatusCode } from "../util/consts";
import productModel from "../model/product.model";

class ProductRepository {
  private model: Model<IProduct>;

  constructor(model: Model<IProduct>) {
    this.model = model;
  }

  // Create a new product
  async create(product: IProduct): Promise<IProduct> {
    try {
      const createdProduct = await this.model.create(product);
      return createdProduct.toObject();
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value

        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<IProduct | null> {
    try {
      const response = await this.model.findById(id).exec();

      if (!response) {
        throw new ApiError(
          `Product with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }
      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error fetching product with ID ${id}: ${error.message}`);
    }
  }

  // Get all products with optional filtering
  async getAll(): Promise<IProduct[]> {
    try {
      return await this.model.find().exec();
    } catch (error: any | unknown) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }

  // Update a product by ID
  async updateById(
    id: string,
    update: Partial<IProduct>
  ): Promise<IProduct | null> {
    try {
      const response = await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();

      if (!response) {
        throw new ApiError(
          `Product with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return response;
    } catch (error: any | unknown) {
      throw new Error(`Error updating product with ID ${id}: ${error.message}`);
    }
  }

  // Delete a product by ID
  async deleteById(id: string): Promise<{ message: string; status: number }> {
    try {
      const response = await this.model.findByIdAndDelete(id).exec();

      if (!response) {
        throw new ApiError(
          `Product with ID ${id} not found.`,
          StatusCode.NotFound
        );
      }

      return {
        message: `Product with ID ${id} deleted.`,
        status: StatusCode.NoContent,
      };
    } catch (error: any | unknown) {
      throw new Error(`Error deleting product with ID ${id}: ${error.message}`);
    }
  }
}

// Initialize the repository with the model
const productRepository = new ProductRepository(productModel);
export default productRepository;
