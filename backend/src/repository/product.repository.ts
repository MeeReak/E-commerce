import { Model } from "mongoose";
import productModel from "../model/product.model";
import { IProduct } from "../model/types/product.type";

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
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<IProduct | null> {
    try {
      return await this.model.findById(id).exec();
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
      return await this.model
        .findByIdAndUpdate(id, update, { new: true })
        .exec();
    } catch (error: any | unknown) {
      throw new Error(`Error updating product with ID ${id}: ${error.message}`);
    }
  }

  // Delete a product by ID
  async deleteById(id: string): Promise<IProduct | null> {
    try {
      return await this.model.findByIdAndDelete(id).exec();
    } catch (error: any | unknown) {
      throw new Error(`Error deleting product with ID ${id}: ${error.message}`);
    }
  }
}

// Initialize the repository with the model
const productRepository = new ProductRepository(productModel);
export default productRepository;
