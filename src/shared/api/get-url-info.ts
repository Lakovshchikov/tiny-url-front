import type { Url } from "@shared/types";
import { API_URL } from "../config";
import { apiWrapper } from "@shared/lib";

export type GetUrlResponse = Url & {
  clickCount: number;
};

export type GetUrlRequestParams = {
  shortUrl: string;
};

export const getUrlInfo = async (
  params: GetUrlRequestParams,
): Promise<GetUrlResponse> => {
  return apiWrapper<GetUrlResponse>(() =>
    fetch(`${API_URL}/api/v1/url/${params.shortUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }),
  );
};
