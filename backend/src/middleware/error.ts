import { ErrorRequestHandler } from "express";
import BaseCustomError from "../Error/base-error";
import { StatusCode } from "../util/consts";

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof BaseCustomError) {
    res.status(err.getStatusCode()).json(err.serializeErrorOutput());
    return;
  }

  res
    .status(StatusCode.InternalServerError)
    .json({ errors: [{ message: err.message }] });
};

export default errorHandler;
