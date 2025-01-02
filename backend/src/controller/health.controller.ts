import { Controller, Get, Route } from "tsoa";

@Route("v1/users")
export class HealthController extends Controller {
  @Get("/health")
  public async getHealth(): Promise<{ message: string }> {
    try {
      return { message: "Server is running" };
    } catch (error) {
      throw error;
    }
  }
}
