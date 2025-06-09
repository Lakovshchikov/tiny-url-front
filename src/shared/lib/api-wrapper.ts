import type { ErrorResponse } from "@shared/types";
import { message } from "antd";

const isErrorResponse = (obj: unknown): obj is ErrorResponse => {
  const testError = obj as ErrorResponse;
  return (
    typeof testError === "object" &&
    testError !== null &&
    "error" in testError &&
    typeof testError.error === "string" &&
    "details" in testError &&
    typeof testError.details === "string"
  );
};

export async function apiWrapper<T>(
  apiCall: () => Promise<Response>,
): Promise<T> {
  try {
    const response = await apiCall();
    if (!response.ok) {
      let errorMsg = "Ошибка запроса";
      try {
        const data = await response.json();
        if (isErrorResponse(data)) {
          errorMsg = `Ошибка: ${data.error}, Подробности: ${data.details}`;
        } else {
          errorMsg = data?.message || errorMsg;
        }
      } catch {
        errorMsg = "Не удалось обработать ответ сервера";
      }
      throw new Error(errorMsg);
    }

    if (response.status === 204) {
      return undefined as T;
    }
    const text = await response.text();
    if (!text) {
      return undefined as T;
    }
    return JSON.parse(text) as T;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Неизвестная ошибка";
    message.error(errorMessage);
    throw error;
  }
}
