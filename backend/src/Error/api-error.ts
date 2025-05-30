import { StatusCode } from "../util/consts/status-code";
import { SerializedErrorOutput } from "../Error/@types/serialized-error-output";
import BaseCustomError from "./base-error";

export default class APIError extends BaseCustomError {
  constructor(
    message: string,
    statusCode: number = StatusCode.InternalServerError
  ) {
    super(message, statusCode);
    Object.setPrototypeOf(this, APIError.prototype);
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  serializeErrorOutput(): SerializedErrorOutput {
    let errorMessageObject;
    try {
      errorMessageObject = JSON.parse(this.message);
    } catch (error: unknown) {
      // If parsing fails, return the message as is
      errorMessageObject = { message: this.message };
    }
    return { errors: [errorMessageObject] };
  }
}
