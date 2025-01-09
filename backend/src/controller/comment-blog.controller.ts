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
  ICommentBlog,
  IUpdateCommentBlog,
} from "../model/types/comment-blog.type";
import {
  commentSchema,
  updateCommentSchema,
} from "../constant/comment-blog/comment.validator";
import commentBlogService from "../service/comment-blog.service";

@Route("v1/comment-blogs")
@Tags("Comment Blogs")
export class CommentBlogController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all comment")
  public async getAllComment(@Queries() queryParams: IFilter): Promise<{
    data: ICommentBlog[];
    pagination: IPaginated;
  }> {
    try {
      const response = await commentBlogService.getAll(queryParams);
      return {
        data: response.data,
        pagination: response.pagination,
      };
    } catch (error) {
      throw error;
    }
  }

  // Get a single Comment by ID
  @Get("/{id}")
  @SuccessResponse("200", "Successfully fetched Comment by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async getCommentById(
    @Path() id: string
  ): Promise<ICommentBlog | null> {
    try {
      return await commentBlogService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new comment
  @Post("/")
  @SuccessResponse("201", "Successfully created a new comment")
  @Middlewares([validateSchemaMiddleware(commentSchema, "body")])
  public async createComment(
    @Body() data: ICommentBlog
  ): Promise<ICommentBlog> {
    try {
      return await commentBlogService.create(data);
    } catch (error) {
      throw error;
    }
  }

  // Update a comment by ID
  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated comment by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  @Middlewares([validateSchemaMiddleware(updateCommentSchema, "body")])
  public async updateComment(
    @Path() id: string,
    @Body() data: Partial<IUpdateCommentBlog>
  ): Promise<ICommentBlog | null> {
    try {
      return await commentBlogService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  // Delete a comment by ID
  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted comment by ID")
  @Middlewares(validateSchemaMiddleware(idParamSchema, "params"))
  public async deleteComment(@Path() id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      return await commentBlogService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
