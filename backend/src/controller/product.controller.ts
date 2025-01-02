import { IProduct } from "../model/types/product.type";
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
} from "tsoa";

@Route("v1/products")
export class ProductController extends Controller {
  // Get all products
  @Get("/")
  public async getAllProducts(
  ): Promise<IProduct[]> {
    try {
      return await productService.getAllProducts();
    } catch (error) {
      throw error;
    }
  }

  // Get a single product by ID
  @Get("/{id}")
  public async getProductById(@Path() id: string): Promise<IProduct | null> {
    try {
      return await productService.getProductById(id);
    } catch (error) {
      throw error;
    }
  }

  // Create a new product
  @Post("/")
  public async createProduct(@Body() product: IProduct): Promise<IProduct> {
    try {
      return await productService.createProduct(product);
    } catch (error) {
      throw error;
    }
  }

  // Update a product by ID
  @Put("/{id}")
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
  public async deleteProduct(@Path() id: string): Promise<IProduct | null> {
    try {
      return await productService.deleteProductById(id);
    } catch (error) {
      throw error;
    }
  }
}
