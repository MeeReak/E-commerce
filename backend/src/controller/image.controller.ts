import imageService from "../service/image.service";
import upload from "../util/upload";
import {
  Route,
  Tags,
  Controller,
  Request,
  Post,
  Middlewares,
  Get,
  Queries,
  SuccessResponse,
  Path,
  Delete,
  Put,
} from "tsoa";
import { IImage } from "../model/types/image.type";
import { IFilter, IPaginated } from "../model/types/common.type";
import { idParamSchema } from "../constant/common.validator";
import { validateSchemaMiddleware } from "../middleware/common-validate";

@Route("v1/images")
@Tags("Image")
export class ImagesController extends Controller {
  @Post("/")
  @Middlewares([upload.single("file")])
  public async getImages(@Request() request: any): Promise<IImage | undefined> {
    try {
      const data = {
        title: request.file.originalname,
        url: request.file.location,
        key: request.file.key,
      };
      return await imageService.create(data);
    } catch (error) {
      console.log(error);
    }
  }

  @Get("/")
  @SuccessResponse("200", "Successfully fetched all address")
  public async getAll(@Queries() queryParams: IFilter): Promise<{
    data: IImage[];
    pagination: IPaginated;
  }> {
    try {
      const response = await imageService.getAll(queryParams);
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
  public async getById(@Path() id: string): Promise<IImage | null> {
    try {
      return await imageService.getOne(id);
    } catch (error) {
      throw error;
    }
  }

  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated address by ID")
  @Middlewares([upload.single("file")])
  @Middlewares([validateSchemaMiddleware(idParamSchema, "params")])
  public async update(
    @Path() id: string,
    @Request() request: any
  ): Promise<IImage | null> {
    try {
      const data = {
        title: request.file.originalname,
        url: request.file.location,
        key: request.file.key,
      };
      return await imageService.update(id, data);
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
      return await imageService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
