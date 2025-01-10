import { IWishlist, IUpdateWishlist } from "../model/types/wishlist.type";
import APIError from "../Error/api-error";
import { MongoDuplicateKeyError } from "../Error/mongo-error";
import { IFilter, IPaginated } from "../model/types/common.type";
import wishlistRepository from "../repository/wishlist.repository";
import productRepository from "../repository/product.repository";

class WishlistService {
  // Create a new category
  async create(data: IWishlist): Promise<IWishlist> {
    try {
      return await wishlistRepository.create(data);
    } catch (error: any | unknown) {
      if (error.name === "MongoServerError") {
        const fieldName = Object.keys(error.keyValue)[0];
        const fieldValue = error.keyValue[fieldName];
        throw new MongoDuplicateKeyError(fieldName, fieldValue);
      }

      throw new Error(`Error creating wishlist: ${error.message}`);
    }
  }

  // Get a category by ID
  async getOne(id: string): Promise<IWishlist | null> {
    try {
      const response = await wishlistRepository.getById(id);
      if (!response) {
        throw new APIError(`wishlist with ID ${id} not found.`);
      }
      return response;
    } catch (error: any | unknown) {
      if (error instanceof APIError) {
        throw error;
      }

      throw new Error(
        `Error fetching wishlist with ID ${id}: ${error.message}`
      );
    }
  }

  // Get all categories with optional filtering
  async getAll(filter: IFilter): Promise<{
    data: IWishlist[];
    pagination: IPaginated;
  }> {
    let response = await wishlistRepository.getAll();

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
    update: Partial<IUpdateWishlist>
  ): Promise<IWishlist | null> {
    try {
      update.productId?.map(async (productId) => {
        const response = await productRepository.getById(productId);
        if (!response) {
          throw new Error(`Product with ID ${productId} not found.`);
        }
      });

      return wishlistRepository.updateById(id, update);
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
      const response = await wishlistRepository.getById(id);
      if (!response) {
        throw new Error(`Product with ID ${id} not found.`);
      }

      return wishlistRepository.deleteById(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}

export default new WishlistService();
