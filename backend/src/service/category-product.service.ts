import categoryRepository from "../repository/category-product.repository";
import { ICategory, IUpdateCategory } from "../model/types/category.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";
import productRepository from "../repository/product.repository";

class CategoryService {
  // Create a new category
  async create(data: ICategory): Promise<ICategory> {
    try {
      if (!data.name || data.name.trim() === "") {
        throw new APIError("Category name is required", 400);
      }

      return await categoryRepository.create(data);
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0];
        const fieldValue = error.keyValue[fieldName];
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  // Get a category by ID
  async getOne(id: string): Promise<ICategory | null> {
    try {
      const response = await categoryRepository.getById(id);
      if (!response) {
        throw new APIError(`Category with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(
        `Error fetching category with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all categories with optional filtering
  async getAll(filter: IFilter): Promise<{
    data: ICategory[];
    pagination: IPaginated;
  }> {
    let response = await categoryRepository.getAll();

    const { page = 1, perPage = 10 } = filter;
    const totalRecord = response.length;
    const totalPage = Math.ceil(totalRecord / perPage);

    response = response.slice((page - 1) * perPage, page * perPage);
    return {
      data: response,
      pagination: {
        page,
        perPage,
        totalRecord,
        totalPage,
      },
    };
  }

  // Update a category by ID
  async update(
    id: string,
    update: Partial<IUpdateCategory>
  ): Promise<ICategory | null> {
    try {
      const response = await categoryRepository.getById(id);
      if (!response) {
        throw new Error(`Category with ID ${id} not found.`);
      }

      if (update.name && update.name.trim() === "") {
        throw new APIError("Category name cannot be empty", 400);
      }

      response.updateAt = new Date();

      return categoryRepository.updateById(id, { ...response, ...update });
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
      const response = await categoryRepository.getById(id);
      if (!response) {
        throw new Error(`Category with ID ${id} not found.`);
      }

      response.productId?.map(async (productId) => {
        await productRepository.deleteById(productId);
      });

      return categoryRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new CategoryService();
