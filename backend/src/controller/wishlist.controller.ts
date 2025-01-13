import { validateSchemaMiddleware } from "../middleware/common-validate";
import { idParamSchema } from "../constant/common.validator";
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Route,
  Body,
  Path,
  Queries,
  Tags,
  SuccessResponse,
  Middlewares,
} from "tsoa";
import { IFilter, IPaginated } from "../model/types/common.type";
import { IWishlist, IUpdateWishlist } from "../model/types/wishlist.type";
import { schema, updateSchema } from "../constant/wishlist/wishlist.validator";
import wishlistService from "../service/wishlist.service";

@Route("v1/wishlists")
@Tags("Wishlist")
export class WishlistController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all wishlist")
  public async getAll(@Queries() queryParams: IFilter): Promise<{
    data: IWishlist[];
    pagination: IPaginated;
  }> {
    try {
      const response = await wishlistService.getAll(queryParams);
      return {
        data: response.data,
        pagination: response.pagination,
      };
    } catch (error) {
      throw error;
    }
  }

  // Get a single category by ID
  @Get("/{id}")
  @SuccessResponse("200", "Successfully fetched wishlist by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async getById(@Path() id: string): Promise<IWishlist | null> {
    try {
      return await wishlistService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new category
  @Post("/")
  @SuccessResponse("201", "Successfully created a new wishlist of blog")
  @Middlewares([validateSchemaMiddleware(schema, "body")])
  public async create(@Body() data: IWishlist): Promise<IWishlist> {
    try {
      return await wishlistService.create(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Update a category by ID
  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated wishlist by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  @Middlewares([validateSchemaMiddleware(updateSchema, "body")])
  public async update(
    @Path() id: string,
    @Body() data: Partial<IUpdateWishlist>
  ): Promise<IWishlist | null> {
    try {
      return await wishlistService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  // Delete a category by ID
  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted wishlist by ID")
  @Middlewares(validateSchemaMiddleware(idParamSchema, "params"))
  public async delete(@Path() id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      return await wishlistService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
