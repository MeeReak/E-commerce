import {
  ICommentBlog,
  IUpdateCommentBlog,
} from "../model/types/comment-blog.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";
import blogRepository from "../repository/blog.repository";
import commentBlogRepository from "../repository/comment-blog.repository";

class CommentBlogService {
  // Create a new product
  async create(data: ICommentBlog): Promise<ICommentBlog> {
    try {
      const exitingBlog = await blogRepository.getById(data.blogId);
      if (!exitingBlog) {
        throw new APIError("Blog not found", 404);
      }

      const response = await commentBlogRepository.create(data);
      await blogRepository.updateById(data.blogId, {
        commentId: [...(exitingBlog.commentId || []), response._id!],
      });

      return response;
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      throw new Error(`Error creating comment of blog: ${error.message}`);
    }
  }

  // Get a product by ID
  async getOne(id: string): Promise<ICommentBlog | null> {
    try {
      const response = await commentBlogRepository.getById(id);
      if (!response) {
        throw new APIError(`Comment with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(
        `Error fetching comment of blog with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all products with optional filtering
  async getAll(filter: IFilter): Promise<{
    data: ICommentBlog[];
    pagination: IPaginated;
  }> {
    let response = await commentBlogRepository.getAll();

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

  // Update a product by ID
  async update(
    id: string,
    data: Partial<IUpdateCommentBlog>
  ): Promise<ICommentBlog | null> {
    try {
      const response = await commentBlogRepository.updateById(id, data);
      if (!response) {
        throw new Error(`Comment with ID ${id} not found.`);
      }

      const exitingBlog = await blogRepository.getById(response.blogId);
      if (!exitingBlog) {
        throw new APIError("Blog not found", 404);
      }

      response.updateAt = new Date();

      return commentBlogRepository.updateById(id, response);
    } catch (error: unknown | any) {
      if (error instanceof APIError) {
        throw error;
      }

      throw error;
    }
  }

  // Delete a product by ID
  async delete(id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      const response = await commentBlogRepository.getById(id);
      if (!response) {
        throw new Error(`Comment with ID ${id} not found.`);
      }

      const exitingBlog = await blogRepository.getById(response.blogId);

      await blogRepository.updateById(response.blogId, {
        commentId: (exitingBlog?.commentId || []).filter(
          (blogId) => blogId != id
        ),
      });

      return commentBlogRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new CommentBlogService();
