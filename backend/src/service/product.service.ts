import categoryRepository from "../repository/category-product.repository";
import {
  IPaginatedProducts,
  IProduct,
  ProductQueryParams,
} from "../model/types/product.type";
import productRepository from "../repository/product.repository";
import APIError from "../Error/api-error";
import commentRepository from "../repository/comment-product.repository";

class ProductService {
  // Create a new product
  async create(product: IProduct): Promise<IProduct> {
    try {
      if (product.price < 0) {
        throw new APIError("Price cannot be negative.");
      }

      if (product.stockQuantity < 0) {
        throw new APIError("Stock quantity cannot be negative.");
      }

      const category = await categoryRepository.getById(product.categoryId);
      if (!category) {
        throw new APIError(`Category with ID ${product.categoryId} not found.`);
      }
      const response = await productRepository.create(product);

      await categoryRepository.updateById(product.categoryId, {
        productId: [...(category.productId || []), response._id!],
      });
      return response;
    } catch (error: unknown | any) {
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  // Get a product by ID
  async getById(id: string): Promise<IProduct | null> {
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
  async getAll(filter: ProductQueryParams): Promise<{
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
  async update(
    id: string,
    update: Partial<IProduct>
  ): Promise<IProduct | null> {
    const product = await productRepository.getById(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }

    // Example of business logic: Validate updated fields
    if (update.price != undefined && update.price < 0) {
      throw new Error("Price cannot be negative.");
    }

    product.updateAt = new Date();

    return productRepository.updateById(id, update);
  }

  // Delete a product by ID
  async delete(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const product = await productRepository.getById(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found.`);
      }

      const category = await categoryRepository.getById(product.categoryId);
      if (!category) {
        throw new Error(`Category with ID ${product.categoryId} not found.`);
      }

      await categoryRepository.updateById(product.categoryId, {
        productId: category.productId?.filter((pid) => pid != id),
      });

      product.commentId?.map(async (commentId) => {
        await commentRepository.deleteById(commentId);
      });

      return productRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new ProductService();
