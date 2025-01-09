import blogRepository from "../repository/blog.repository";
import {
  IBlog,
  IBlogQueryParams,
  IPaginatedBlog,
  IUpdateBlog,
} from "../model/types/blog.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import categoryBlogRepository from "../repository/category-blog.repository";

class BlogService {
  // Create a new blog
  async create(data: IBlog): Promise<IBlog> {
    try {
      if (!data.title || data.title.trim() === "") {
        throw new APIError("Blog title is required", 400);
      }

      const exitedCategory = await categoryBlogRepository.getById(
        data.categoryId!
      );
      if (!exitedCategory) {
        throw new APIError(
          `Category with ID ${data.categoryId} not found.`,
          404
        );
      }
      const response = await blogRepository.create(data);

      await categoryBlogRepository.updateById(response.categoryId!, {
        blogId: [...(exitedCategory.blogId || []), response._id!],
      });

      return response;
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0];
        const fieldValue = error.keyValue[fieldName];
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      throw new Error(`Error creating blog: ${error.message}`);
    }
  }

  // Get a blog by ID
  async getOne(id: string): Promise<IBlog | null> {
    try {
      const response = await blogRepository.getById(id);
      if (!response) {
        throw new APIError(`Blog with ID ${id} not found.`, 404);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(`Error fetching blog with ID ${id}: ${error.message}`);
    }
  }

  // Get all blogs with optional filtering
  async getAll(filter: IBlogQueryParams): Promise<{
    data: IBlog[];
    pagination: IPaginatedBlog;
  }> {
    try {
      let response = await blogRepository.getAll();

      const { page = 1, perPage = 10, date, search } = filter;

      if (search) {
        response = response.filter((res) => res.title.includes(search));
      }

      if (date) {
        response = response.sort((a, b) => {
          if (a.createAt && b.createAt) {
            return b.createAt.getTime() - a.createAt.getTime();
          }
          return 0;
        });
      }

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
    } catch (error: any | unknown) {
      throw error;
    }
  }

  // Update a blog by ID
  async update(id: string, data: Partial<IUpdateBlog>): Promise<IBlog | null> {
    try {
      const response = await blogRepository.getById(id);
      if (!response) {
        throw new APIError(`Blog with ID ${id} not found.`, 404);
      }

      if (data.title && data.title.trim() === "") {
        throw new APIError("Blog title cannot be empty", 400);
      }

      const exitedCategory = await categoryBlogRepository.getById(
        data.categoryId!
      );
      if (!exitedCategory) {
        throw new APIError(
          `Category with ID ${data.categoryId} not found.`,
          404
        );
      }

      if (response.categoryId !== data.categoryId) {
        await categoryBlogRepository.updateById(data.categoryId!, {
          blogId: [...(exitedCategory.blogId || []), response._id!],
        });

        await categoryBlogRepository.updateById(response.categoryId!, {
          blogId: (exitedCategory.blogId || []).filter(
            (id) => id != response._id
          ),
        });
      }

      data.updateAt = new Date();

      return blogRepository.updateById(id, data);
    } catch (error: unknown | any) {
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  // Delete a blog by ID
  async delete(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const response = await blogRepository.getById(id);
      if (!response) {
        throw new APIError(`Blog with ID ${id} not found.`, 404);
      }

      const category = await categoryBlogRepository.getById(
        response.categoryId!
      );
      if (!category) {
        throw new APIError(
          `Category with ID ${response.categoryId} not found.`,
          404
        );
      }

      await categoryBlogRepository.updateById(response.categoryId!, {
        blogId: (category.blogId || []).filter((blogId) => blogId != id),
      });

      await blogRepository.deleteById(id);
      return {
        message: `Blog with ID ${id} deleted successfully.`,
        status: 200,
      };
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new BlogService();
