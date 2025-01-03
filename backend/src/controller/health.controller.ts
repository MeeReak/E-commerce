import { Controller, Get, Route, Tags } from "tsoa";

@Route("v1/users")
@Tags("Health")
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
