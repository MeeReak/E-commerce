import commentRepository from "../repository/comment-product.repository";
import { IComment, IUpdateComment } from "../model/types/comment-product.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";
import productRepository from "../repository/product.repository";

class CommentService {
  // Create a new product
  async create(data: IComment): Promise<IComment> {
    try {
      if (data.star < 0 || data.star > 5 || data.comment == "") {
        throw new APIError("Invalid data", 400);
      }

      const existingProduct = await productRepository.getById(data.productId);
      if (!existingProduct) {
        throw new APIError(`Product with ID ${data.productId} not found.`);
      }

      const response = await commentRepository.create(data);
      await productRepository.updateById(data.productId, {
        commentId: [...(existingProduct.commentId || []), response._id!],
      });

      return response;
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0]; // Get the field name causing the error
        const fieldValue = error.keyValue[fieldName]; // Get the duplicate value
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      throw new Error(`Error creating comment: ${error.message}`);
    }
  }

  // Get a product by ID
  async getOne(id: string): Promise<IComment | null> {
    try {
      const response = await commentRepository.getById(id);
      if (!response) {
        throw new APIError(`Comment with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(`Error fetching comment with ID ${id}: ${error.message}`);
    }
  }

  // Get all products with optional filtering
  async getAll(filter: IFilter): Promise<{
    data: IComment[];
    pagination: IPaginated;
  }> {
    let response = await commentRepository.getAll();

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
    data: Partial<IUpdateComment>
  ): Promise<IComment | null> {
    try {
      const response = await commentRepository.updateById(id, data);
      if (!response) {
        throw new Error(`Comment with ID ${id} not found.`);
      }

      if (data.star) {
        if (data.star < 0 || data.star > 5) {
          throw new APIError("Invalid data", 400);
        }
      }

      if (data.comment == "") {
        throw new APIError("Invalid data", 400);
      }

      response.updateAt = new Date();

      return commentRepository.updateById(id, response);
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
      const response = await commentRepository.getById(id);
      if (!response) {
        throw new Error(`Product with ID ${id} not found.`);
      }

      const existingProduct = await productRepository.getById(
        response.productId
      );

      await productRepository.updateById(response.productId, {
        commentId: (existingProduct?.commentId || []).filter(
          (commentId) => commentId != id
        ),
      });

      return commentRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new CommentService();
