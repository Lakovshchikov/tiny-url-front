import type { Click } from "@shared/types";
import { API_URL } from "../config";
import { apiWrapper } from "@shared/lib";

export type GetAnalyticsResponse = {
  clickCount: number;
  clicks: Click[];
};

export type GetAnalyticsRequestParams = {
  shortUrl: string;
};

export const getAnalytics = async (
  params: GetAnalyticsRequestParams,
): Promise<GetAnalyticsResponse> => {
  return apiWrapper<GetAnalyticsResponse>(() =>
    fetch(`${API_URL}/api/v1/analytics/${params.shortUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }),
  );
};
