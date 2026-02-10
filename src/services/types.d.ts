type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

type ApiErrorCode = "VALIDATION_ERROR" | "NOT_FOUND" | "UNAUTHORIZED" | "FORBIDDEN" | "CONFLICT" | "INTERNAL_ERROR";

type AppErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "VALIDATION_ERROR"
  | "SERVER_ERROR"
  | "NETWORK_ERROR"
  | "CLIENT_ERROR"
  | "HTTP_ERROR"
  | "UNDEFINED";

type ApiError = {
  success: boolean,
  error: {
    code: ApiErrorCode,
    message: string,
    details: undefined
  }
};

type AppError = {
  code: AppErrorCode;
  message: string;
  origin: string;
};
