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
  ICategoryBlog,
  IUpdateCategoryBlog,
} from "../model/types/category-blog.type";
import categoryBlogService from "../service/category-blog.service";
import {
  categorySchema,
  // updateCategorySchema,
} from "../constant/category-blog/category-blog.validator";

@Route("v1/category-blogs")
@Tags("Category Blog")
export class CategoryBlogController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all categories of blog")
  public async getAllCategories(@Queries() queryParams: IFilter): Promise<{
    data: ICategoryBlog[];
    pagination: IPaginated;
  }> {
    try {
      const response = await categoryBlogService.getAll(queryParams);
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
  @SuccessResponse("200", "Successfully fetched category of blog by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async getCategoryById(
    @Path() id: string
  ): Promise<ICategoryBlog | null> {
    try {
      return await categoryBlogService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new category
  @Post("/")
  @SuccessResponse("201", "Successfully created a new category of blog")
  @Middlewares([validateSchemaMiddleware(categorySchema, "body")])
  public async createCategory(
    @Body() data: ICategoryBlog
  ): Promise<ICategoryBlog> {
    try {
      return await categoryBlogService.create(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Update a category by ID
  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated category of blog by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  // @Middlewares([validateSchemaMiddleware(updateCategorySchema, "body")])
  public async updateCategory(
    @Path() id: string,
    @Body() data: Partial<IUpdateCategoryBlog>
  ): Promise<ICategoryBlog | null> {
    try {
      return await categoryBlogService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  // Delete a category by ID
  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted category of blog by ID")
  @Middlewares(validateSchemaMiddleware(idParamSchema, "params"))
  public async deleteCategory(@Path() id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      return await categoryBlogService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
