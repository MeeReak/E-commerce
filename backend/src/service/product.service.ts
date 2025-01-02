import { IProduct } from "../model/types/product.type";
import productRepository from "../repository/product.repository";

class ProductService {
  // Create a new product
  async createProduct(product: IProduct): Promise<IProduct> {
    // Example of business logic: Ensure the price is not negative
    if (product.price < 0) {
      throw new Error("Price cannot be negative.");
    }
    return productRepository.create(product);
  }

  // Get a product by ID
  async getProductById(id: string): Promise<IProduct | null> {
    const product = await productRepository.getById(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return product;
  }

  // Get all products with optional filtering
  async getAllProducts(): Promise<IProduct[]> {
    return productRepository.getAll();
  }

  // Update a product by ID
  async updateProductById(
    id: string,
    update: Partial<IProduct>
  ): Promise<IProduct | null> {
    const product = await productRepository.getById(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }

    // Example of business logic: Validate updated fields
    if (update.price !== undefined && update.price < 0) {
      throw new Error("Price cannot be negative.");
    }

    return productRepository.updateById(id, update);
  }

  // Delete a product by ID
  async deleteProductById(id: string): Promise<IProduct | null> {
    const product = await productRepository.getById(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return productRepository.deleteById(id);
  }
}

export default new ProductService();
