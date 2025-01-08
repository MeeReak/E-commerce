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
import { ICategory, IUpdateCategory } from "../model/types/category.type";
import categoryService from "../service/category.service";
import {
  categorySchema,
  updateCategorySchema,
} from "../constant/category/category.validator";

@Route("v1/categorys")
@Tags("Category")
export class CategoryController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all categories")
  public async getAllCategories(@Queries() queryParams: IFilter): Promise<{
    data: ICategory[];
    pagination: IPaginated;
  }> {
    try {
      const response = await categoryService.getAll(queryParams);
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
  public async getCategoryById(@Path() id: string): Promise<ICategory | null> {
    try {
      return await categoryService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new category
  @Post("/")
  @SuccessResponse("201", "Successfully created a new category")
  @Middlewares([validateSchemaMiddleware(categorySchema, "body")])
  public async createCategory(@Body() data: ICategory): Promise<ICategory> {
    try {
      return await categoryService.create(data);
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
    @Body() data: Partial<IUpdateCategory>
  ): Promise<ICategory | null> {
    try {
      return await categoryService.update(id, data);
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
      return await categoryService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
