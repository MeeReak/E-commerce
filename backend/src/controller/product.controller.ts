import {
  IPaginatedProducts,
  IProduct,
  ProductQueryParams,
} from "../model/types/product.type";
import productService from "../service/product.service";
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
} from "tsoa";

@Route("v1/products")
@Tags("Product")
export class ProductController extends Controller {
  // Get all products
  @Get("/")
  @SuccessResponse("200", "Successfully fetched all products")
  public async getAllProducts(
    @Queries() queryParams: ProductQueryParams
  ): Promise<{
    data: IProduct[];
    pagination: IPaginatedProducts;
  }> {
    try {
      const product = await productService.getAllProducts(queryParams);
      return {
        data: product.products,
        pagination: product.pagination,
      };
    } catch (error) {
      throw error;
    }
  }

  // Get a single product by ID
  @Get("/{id}")
  @SuccessResponse("200", "Successfully fetched product by ID")
  public async getProductById(@Path() id: string): Promise<IProduct | null> {
    try {
      return await productService.getProductById(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new product
  @Post("/")
  @SuccessResponse("201", "Successfully created a new product")
  public async createProduct(@Body() product: IProduct): Promise<IProduct> {
    try {
      return await productService.createProduct(product);
    } catch (error) {
      throw error;
    }
  }

  // Update a product by ID
  @Put("/{id}")
  @SuccessResponse("200", "Successfully updated product by ID")
  public async updateProduct(
    @Path() id: string,
    @Body() update: Partial<IProduct>
  ): Promise<IProduct | null> {
    try {
      return await productService.updateProductById(id, update);
    } catch (error) {
      throw error;
    }
  }

  // Delete a product by ID
  @Delete("/{id}")
  @SuccessResponse("200", "Successfully deleted product by ID")
  public async deleteProduct(@Path() id: string): Promise<IProduct | null> {
    try {
      return await productService.deleteProductById(id);
    } catch (error) {
      throw error;
    }
  }
}
