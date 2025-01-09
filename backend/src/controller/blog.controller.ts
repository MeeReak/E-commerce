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
import { IBlog, IUpdateBlog } from "../model/types/blog.type";
import blogService from "../service/blog.service";
import { blogSchema, updateBlogSchema } from "../constant/blog/blog.validator";

@Route("v1/blogs")
@Tags("Blog")
export class BlogController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all blogs")
  public async getAllBlogs(@Queries() queryParams: IFilter): Promise<{
    data: IBlog[];
    pagination: IPaginated;
  }> {
    try {
      const response = await blogService.getAll(queryParams);
      return {
        data: response.data,
        pagination: response.pagination,
      };
    } catch (error) {
      throw error;
    }
  }

  // Get a single blog by ID
  @Get("/{id}")
  @SuccessResponse("200", "Successfully fetched blog by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async getBlogById(@Path() id: string): Promise<IBlog | null> {
    try {
      return await blogService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new blog
  @Post("/")
  @SuccessResponse("201", "Successfully created a new blog")
  @Middlewares([validateSchemaMiddleware(blogSchema, "body")])
  public async createBlog(@Body() data: IBlog): Promise<IBlog> {
    try {
      return await blogService.create(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Update a blog by ID
  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated blog by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  @Middlewares([validateSchemaMiddleware(updateBlogSchema, "body")])
  public async updateBlog(
    @Path() id: string,
    @Body() data: Partial<IUpdateBlog>
  ): Promise<IBlog | null> {
    try {
      return await blogService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  // Delete a blog by ID
  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted blog by ID")
  @Middlewares(validateSchemaMiddleware(idParamSchema, "params"))
  public async deleteBlog(@Path() id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      return await blogService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
