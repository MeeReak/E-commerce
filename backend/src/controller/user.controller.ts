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
import { IUser, IUpdateUser } from "../model/types/user.type";
import { schema, updateSchema } from "../constant/user/user.validator";
import userService from "../service/user.service";

@Route("v1/users")
@Tags("User")
export class UserController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all user")
  public async getAll(@Queries() queryParams: IFilter): Promise<{
    data: IUser[];
    pagination: IPaginated;
  }> {
    try {
      const response = await userService.getAll(queryParams);
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
  @SuccessResponse("200", "Successfully fetched user by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async getById(@Path() id: string): Promise<IUser | null> {
    try {
      return await userService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new category
  @Post("/")
  @SuccessResponse("201", "Successfully created a new user of blog")
  @Middlewares([validateSchemaMiddleware(schema, "body")])
  public async create(@Body() data: IUser): Promise<IUser> {
    try {
      return await userService.create(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Update a category by ID
  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated user by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  @Middlewares([validateSchemaMiddleware(updateSchema, "body")])
  public async update(
    @Path() id: string,
    @Body() data: Partial<IUpdateUser>
  ): Promise<IUser | null> {
    try {
      return await userService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  // Delete a category by ID
  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted user by ID")
  @Middlewares(validateSchemaMiddleware(idParamSchema, "params"))
  public async delete(@Path() id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      return await userService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
