import categoryProductRepository from "../repository/category-product.repository";
import {
  ICategoryProduct,
  IUpdateCategoryProduct,
} from "../model/types/category-product.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";
import productRepository from "../repository/product.repository";

class CategoryProductService {
  // Create a new category
  async create(data: ICategoryProduct): Promise<ICategoryProduct> {
    try {
      if (!data.name || data.name.trim() === "") {
        throw new APIError("Category name is required", 400);
      }

      return await categoryProductRepository.create(data);
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0];
        const fieldValue = error.keyValue[fieldName];
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      throw new Error(`Error creating category of product: ${error.message}`);
    }
  }

  // Get a category by ID
  async getOne(id: string): Promise<ICategoryProduct | null> {
    try {
      const response = await categoryProductRepository.getById(id);
      if (!response) {
        throw new APIError(`Category of product with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(
        `Error fetching category of product with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all categories with optional filtering
  async getAll(filter: IFilter): Promise<{
    data: string[];
    pagination: IPaginated;
  }> {
    try {
      let response = await categoryProductRepository.getAll();

      const { page = 1, perPage = 10 } = filter;
      const totalRecord = response.length;
      const totalPage = Math.ceil(totalRecord / perPage);

      response = response.slice((page - 1) * perPage, page * perPage);

      const data = response.map((item) => item.name);

      return {
        data: data,
        pagination: {
          page,
          perPage,
          totalRecord,
          totalPage,
        },
      };
    } catch (error: any | unknown) {
      throw error;
    }
  }

  // Update a category by ID
  async update(
    id: string,
    update: Partial<IUpdateCategoryProduct>
  ): Promise<ICategoryProduct | null> {
    try {
      const response = await categoryProductRepository.getById(id);
      if (!response) {
        throw new Error(`Category of product with ID ${id} not found.`);
      }

      if (update.name && update.name.trim() === "") {
        throw new APIError("Category of product name cannot be empty", 400);
      }

      response.updateAt = new Date();

      return categoryProductRepository.updateById(id, {
        ...response,
        ...update,
      });
    } catch (error: unknown | any) {
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  // Delete a category by ID
  async delete(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const response = await categoryProductRepository.getById(id);
      if (!response) {
        throw new APIError(`Category of product with ID ${id} not found.`, 404);
      }

      response.productId?.map(async (productId) => {
        await productRepository.deleteById(productId);
      });

      return categoryProductRepository.deleteById(id);
    } catch (error: unknown | any) {
      if (error instanceof APIError) {
        throw error;
      }
      throw error;
    }
  }
}

export default new CategoryProductService();
