import type { AxiosError } from "axios";

export default function errorHandler(
  error: AxiosError<ApiError>,
  origin: string
): AppError {
  let code: AppErrorCode = "UNDEFINED";
  let message = "Ocurrió un error inesperado";

  if (error.response) {
    const { status, data } = error.response;

    if (data?.error) {
      message = data.error.message;

      switch (data.error.code) {
        case "VALIDATION_ERROR":
          code = "VALIDATION_ERROR";
          break;
        case "UNAUTHORIZED":
          code = "UNAUTHORIZED";
          break;
        case "FORBIDDEN":
          code = "FORBIDDEN";
          break;
        case "NOT_FOUND":
          code = "NOT_FOUND";
          break;
        case "CONFLICT":
          code = "CONFLICT";
          break;
        case "INTERNAL_ERROR":
          code = "SERVER_ERROR";
          break;
        default:
          code = "HTTP_ERROR";
      }
    } else {
      // Fallback por status HTTP
      switch (status) {
        case 400:
          code = "BAD_REQUEST";
          break;
        case 401:
          code = "UNAUTHORIZED";
          break;
        case 403:
          code = "FORBIDDEN";
          break;
        case 404:
          code = "NOT_FOUND";
          break;
        case 409:
          code = "CONFLICT";
          break;
        case 422:
          code = "VALIDATION_ERROR";
          break;
        case 500:
        case 502:
        case 503:
          code = "SERVER_ERROR";
          break;
        default:
          code = "HTTP_ERROR";
      }

      message = error.message;
    }
  }

  // 🌐 No hubo respuesta
  else if (error.request) {
    code = "NETWORK_ERROR";
    message = "No se pudo conectar con el servidor";
  }

  // 💥 Error local
  else {
    code = "CLIENT_ERROR";
    message = error.message;
  }

  return {
    code,
    message,
    origin,
  };
}
