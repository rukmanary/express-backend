import { Response } from "express";
import {
  ClientErrorHttpStatusCode,
  InformationalHttpStatusCode,
  RedirectionHttpStatusCode,
  ServerErrorHttpStatusCode,
  SuccessHttpStatusCode,
} from "../../enums/httpStatusCodes";

export interface ApiResponse {
  status: number;
  message: string;
  data?: any;
  error?: any[];
}

export interface InformationalParams {
  res: Response;
  status?: InformationalHttpStatusCode;
  message?: string;
}

export interface SuccessParams {
  res: Response;
  status?: SuccessHttpStatusCode;
  message?: string;
  data?: any;
}

export interface RedirectParams {
  res: Response;
  status?: RedirectionHttpStatusCode;
  message?: string;
  location: string;
}

export interface ErrorClientParams {
  res: Response;
  status?: ClientErrorHttpStatusCode;
  message?: string;
  error?: any[];
}

export interface ErrorServerParams {
  res: Response;
  status?: ServerErrorHttpStatusCode;
  message?: string;
  error?: any[];
}
