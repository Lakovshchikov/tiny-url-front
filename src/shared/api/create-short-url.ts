import type { Url } from "@shared/types";
import { API_URL } from "../config";
import { apiWrapper } from "@shared/lib";

export type CreateShortUrlResponse = Url;

export type CreateShortUrlRequestBody = {
  originalUrl: string;
  expiresAt?: string;
  shortUrl?: string;
};

export const createShortUrl = async (
  data: CreateShortUrlRequestBody,
): Promise<CreateShortUrlResponse> => {
  return apiWrapper<CreateShortUrlResponse>(() =>
    fetch(`${API_URL}/api/v1/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }),
  );
};
