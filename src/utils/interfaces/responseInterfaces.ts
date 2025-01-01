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
  res: any;
  status?: InformationalHttpStatusCode;
  message?: string;
}

export interface SuccessParams {
  res: any;
  status?: SuccessHttpStatusCode;
  message?: string;
  data?: any;
}

export interface RedirectParams {
  res: any;
  status?: RedirectionHttpStatusCode;
  message?: string;
  location: string;
}

export interface ErrorClientParams {
  res: any;
  status?: ClientErrorHttpStatusCode;
  message?: string;
  error?: any[];
}

export interface ErrorServerParams {
  res: any;
  status?: ServerErrorHttpStatusCode;
  message?: string;
  error?: any[];
}
