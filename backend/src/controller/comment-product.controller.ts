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
import { IComment, IUpdateComment } from "../model/types/comment-product.type";
import commentService from "../service/comment-product.service";
import {
  commentSchema,
  updateCommentSchema,
} from "../constant/comment-product/comment.validator";

@Route("v1/comment-products")
@Tags("Comment Products")
export class CommentController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all comment")
  public async getAllComment(@Queries() queryParams: IFilter): Promise<{
    data: IComment[];
    pagination: IPaginated;
  }> {
    try {
      const response = await commentService.getAll(queryParams);
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
  public async getCommentById(@Path() id: string): Promise<IComment | null> {
    try {
      return await commentService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new comment
  @Post("/")
  @SuccessResponse("201", "Successfully created a new comment")
  @Middlewares([validateSchemaMiddleware(commentSchema, "body")])
  public async createComment(@Body() data: IComment): Promise<IComment> {
    try {
      return await commentService.create(data);
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
    @Body() data: Partial<IUpdateComment>
  ): Promise<IComment | null> {
    try {
      return await commentService.update(id, data);
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
      return await commentService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
