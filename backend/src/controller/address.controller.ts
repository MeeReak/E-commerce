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
import { IAddress, IUpdate } from "../model/types/address.type";
import { schema, updateSchema } from "../constant/address/address.validator";
import addressService from "../service/address.service";

@Route("v1/addresss")
@Tags("Address")
export class AddressController extends Controller {
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all address")
  public async getAll(@Queries() queryParams: IFilter): Promise<{
    data: IAddress[];
    pagination: IPaginated;
  }> {
    try {
      const response = await addressService.getAll(queryParams);
      return {
        data: response.data,
        pagination: response.pagination,
      };
    } catch (error) {
      throw error;
    }
  }

  @Get("/{id}")
  @SuccessResponse("200", "Successfully fetched address by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async getById(@Path() id: string): Promise<IAddress | null> {
    try {
      return await addressService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  @Post("/")
  @SuccessResponse("201", "Successfully created a new address of blog")
  @Middlewares([validateSchemaMiddleware(schema, "body")])
  public async create(@Body() data: IAddress): Promise<IAddress> {
    try {
      return await addressService.create(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated address by ID")
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  @Middlewares([validateSchemaMiddleware(updateSchema, "body")])
  public async update(
    @Path() id: string,
    @Body() data: Partial<IUpdate>
  ): Promise<IAddress | null> {
    try {
      return await addressService.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted address by ID")
  @Middlewares(validateSchemaMiddleware(idParamSchema, "params"))
  public async delete(@Path() id: string): Promise<{
    message: string;
    status: number;
  }> {
    try {
      return await addressService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
