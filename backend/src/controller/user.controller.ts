import UserService from "../service/user.service";
import { Body, Post, Route } from "tsoa";

interface UserRequestBody {
  name: string;
}

@Route("v1/user")
export class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  @Post()
  async createUser(@Body() requestBody: UserRequestBody): Promise<void> {
    try {
      this._userService.createUser(requestBody);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
