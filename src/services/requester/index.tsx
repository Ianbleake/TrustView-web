import axios from "axios";
import errorHandler from "@/utils/errorHandler";
import { axiosClient } from "./axiosClient";

type RequesterArgs<TPayload> = {
  method: HttpMethod;
  endpoint: string;
  payload?: TPayload;
  token?: string;
  params?: Record<string, unknown>;
};

export const requester = async <TResponse, TPayload = unknown>({
  method,
  endpoint,
  payload,
  token,
  params,
}: RequesterArgs<TPayload>): Promise<TResponse> => {
  try {
    const response = await axiosClient.request<TResponse>({
      url: endpoint,
      method,
      data: payload,
      params,
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw errorHandler(error, endpoint);
    }

    throw {
      code: "UNDEFINED",
      message: "Error desconocido en el cliente",
      origin: "requester",
    } as AppError;
  }
};
