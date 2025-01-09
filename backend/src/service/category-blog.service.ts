import categoryBlogRepository from "../repository/category-blog.repository";
import {
  ICategoryBlog,
  IUpdateCategoryBlog,
} from "../model/types/category-blog.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";

class CategoryBlogService {
  // Create a new category
  async create(data: ICategoryBlog): Promise<ICategoryBlog> {
    try {
      if (!data.name || data.name.trim() === "") {
        throw new APIError("Category name is required", 400);
      }

      return await categoryBlogRepository.create(data);
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0];
        const fieldValue = error.keyValue[fieldName];
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      throw new Error(`Error creating category of blog: ${error.message}`);
    }
  }

  // Get a category by ID
  async getOne(id: string): Promise<ICategoryBlog | null> {
    try {
      const response = await categoryBlogRepository.getById(id);
      if (!response) {
        throw new APIError(`Category of blog with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(
        `Error fetching category of blog with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all categories with optional filtering
  async getAll(filter: IFilter): Promise<{
    data: ICategoryBlog[];
    pagination: IPaginated;
  }> {
    let response = await categoryBlogRepository.getAll();

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
    update: Partial<IUpdateCategoryBlog>
  ): Promise<ICategoryBlog | null> {
    try {
      const response = await categoryBlogRepository.getById(id);
      if (!response) {
        throw new Error(`Category of blog with ID ${id} not found.`);
      }

      if (update.name && update.name.trim() === "") {
        throw new APIError("Category name cannot be empty", 400);
      }

      return categoryBlogRepository.updateById(id, update);
    } catch (error: unknown | any) {
      console.log(error.message);
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
      const response = await categoryBlogRepository.getById(id);
      if (!response) {
        throw new Error(`Category with ID ${id} not found.`);
      }

      return categoryBlogRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new CategoryBlogService();
