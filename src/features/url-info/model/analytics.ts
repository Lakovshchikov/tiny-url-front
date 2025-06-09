import { createEffect, createEvent, restore, sample } from "effector";
import { api, type GetAnalyticsResponse } from "@shared/api";
import { searchUrlFormModel } from "./search-url-form";

const loadAnalyticsFx = createEffect<string, GetAnalyticsResponse>(
  async (shortUrl: string) => {
    return api.getAnalytics({ shortUrl });
  },
);

const resetAnalytics = createEvent();

const $analytics = restore<GetAnalyticsResponse>(
  loadAnalyticsFx.doneData,
  null,
).reset(resetAnalytics);

const $error = restore(loadAnalyticsFx.failData, null);

const $isLoading = loadAnalyticsFx.pending;

sample({
  clock: searchUrlFormModel.$url,
  filter: (url) => url !== null && url.shortUrl !== undefined,
  fn: (url) => (url ? url.shortUrl : ""),
  target: loadAnalyticsFx,
});

export const analyticsModel = {
  $analytics,
  $isLoading,
  $error,
  resetAnalytics,
};
