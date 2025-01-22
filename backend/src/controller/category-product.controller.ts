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
import {
  ICategoryProduct,
  IUpdateCategoryProduct,
} from "../model/types/category-product.type";
import categoryProductService from "../service/category-product.service";
import {
  categorySchema,
  updateCategorySchema,
} from "../constant/category-product/category-product.validator";

@Route("v1/category-products")
@Tags("Category Product")
export class CategoryProductController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all categories")
  public async getAllCategories(@Queries() queryParams: IFilter): Promise<{
    data: string[];
    pagination: IPaginated;
  }> {
    try {
      const response = await categoryProductService.getAll(queryParams);
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
  @SuccessResponse("200", "Successfully fetched category by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async getCategoryById(
    @Path() id: string
  ): Promise<ICategoryProduct | null> {
    try {
      return await categoryProductService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new category
  @Post("/")
  @SuccessResponse("201", "Successfully created a new category")
  @Middlewares([validateSchemaMiddleware(categorySchema, "body")])
  public async createCategory(
    @Body() data: ICategoryProduct
  ): Promise<ICategoryProduct> {
    try {
      return await categoryProductService.create(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Update a category by ID
  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated category by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  @Middlewares([validateSchemaMiddleware(updateCategorySchema, "body")])
  public async updateCategory(
    @Path() id: string,
    @Body() data: Partial<IUpdateCategoryProduct>
  ): Promise<ICategoryProduct | null> {
    try {
      return await categoryProductService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  // Delete a category by ID
  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted category by ID")
  @Middlewares(validateSchemaMiddleware(idParamSchema, "params"))
  public async deleteCategory(@Path() id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      return await categoryProductService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
