import { createShortUrl } from "./create-short-url";
import { getUrlInfo } from "./get-url-info";
import { getAnalytics } from "./get-analytics";
import { deleteClick } from "./delete-click";

export type {
  CreateShortUrlResponse,
  CreateShortUrlRequestBody,
} from "./create-short-url";
export type { GetUrlRequestParams, GetUrlResponse } from "./get-url-info";
export type {
  GetAnalyticsResponse,
  GetAnalyticsRequestParams,
} from "./get-analytics";

export type { DeleteClickRequestParams } from "./delete-click";

export const api = {
  createShortUrl,
  getUrlInfo,
  getAnalytics,
  deleteClick,
};
