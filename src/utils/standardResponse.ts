import { Response } from "express";
import {
  ClientErrorHttpStatusCode,
  InformationalHttpStatusCode,
  RedirectionHttpStatusCode,
  ServerErrorHttpStatusCode,
  SuccessHttpStatusCode,
} from "../enums/httpStatusCodes";
import { HttpStatusMessages } from "./httpStatusMessages";
import {
  ApiResponse,
  SuccessParams,
  ErrorClientParams,
  ErrorServerParams,
  RedirectParams,
  InformationalParams,
} from "./interfaces/responseInterfaces";

// status code 1xx
export const sendInformational = ({
  res,
  status = InformationalHttpStatusCode.CONTINUE_100,
  message = "Processing",
}: InformationalParams): Response => {
  return res.status(status).json({
    status,
    message: message || HttpStatusMessages[status],
  });
};

// status code 2xx
export const sendSuccess = ({
  res,
  status = SuccessHttpStatusCode.OK_200,
  message = "Success",
  data = null,
}: SuccessParams): Response => {
  const response: ApiResponse = {
    status,
    message: message || HttpStatusMessages[status],
    data,
  };

  return res.status(status).json(response);
};

// status code 3xx
export const sendRedirect = ({
  res,
  status = RedirectionHttpStatusCode.MOVED_PERMANENTLY_301,
  message = "Redirect",
  location,
}: RedirectParams): Response => {
  res.setHeader("Location", location);
  return res.status(status).json({
    status,
    message: message || HttpStatusMessages[status],
  });
};

// status code 4xx
export const sendClientError = ({
  res,
  status = ClientErrorHttpStatusCode.NOT_FOUND_404,
  message = "Error",
  error = [],
}: ErrorClientParams): Response => {
  const response: ApiResponse = {
    status,
    message: message || HttpStatusMessages[status],
    error,
  };

  return res.status(status).json(response);
};

// status code 5xx
export const sendServerError = ({
  res,
  status = ServerErrorHttpStatusCode.INTERNAL_SERVER_ERROR_500,
  message = "Error",
  error = [],
}: ErrorServerParams): Response => {
  const response: ApiResponse = {
    status,
    message: message || HttpStatusMessages[status],
    error,
  };

  return res.status(status).json(response);
};
