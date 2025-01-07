import {
  IPaginatedProducts,
  IProduct,
  ProductQueryParams,
} from "../model/types/product.type";
import productRepository from "../repository/product.repository";

class ProductService {
  // Create a new product
  async createProduct(product: IProduct): Promise<IProduct> {
    try {
      if (product.price < 0) {
        throw new Error("Price cannot be negative.");
      }
      return productRepository.create(product);
    } catch (error: unknown | any) {
      throw error;
    }
  }

  // Get a product by ID
  async getProductById(id: string): Promise<IProduct | null> {
    try {
      const product = await productRepository.getById(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found.`);
      }
      return product;
    } catch (error: unknown | any) {
      throw error;
    }
  }

  // Get all products with optional filtering
  async getAllProducts(filter: ProductQueryParams): Promise<{
    products: IProduct[];
    pagination: IPaginatedProducts;
  }> {
    try {
      let products = await productRepository.getAll();

      const { page = 1, perPage = 10, search, price, star, date } = filter;

      if (search) {
        products = products.filter((product) => product.name.includes(search));
      }

      if (price) {
        products = products.sort((a, b) => a.price - b.price);
      }

      if (star) {
        products = products.sort((a, b) => b.star - a.star);
      }

      if (date) {
        products = products.sort((a, b) => {
          if (a.createAt && b.createAt) {
            return b.createAt.getTime() - a.createAt.getTime();
          }
          return 0;
        });
      }

      const totalRecord = products.length;
      const totalPage = Math.ceil(totalRecord / perPage);

      products = products.slice((page - 1) * perPage, page * perPage);
      return {
        products,
        pagination: {
          page,
          perPage,
          totalRecord,
          totalPage,
        },
      };
    } catch (error: unknown | any) {
      throw error;
    }
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

    product.updateAt = new Date();

    return productRepository.updateById(id, update);
  }

  // Delete a product by ID
  async deleteProductById(id: string): Promise<IProduct | null> {
    try {
      const product = await productRepository.getById(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found.`);
      }
      return productRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new ProductService();
