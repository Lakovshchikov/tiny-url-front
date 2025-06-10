import { createEffect, createEvent, restore, sample } from "effector";
import { api, type GetAnalyticsResponse } from "@shared/api";

const analyticsRequested = createEvent<string>();
const resetAnalytics = createEvent();

const loadAnalyticsFx = createEffect<string, GetAnalyticsResponse>(
  async (shortUrl: string) => {
    return api.getAnalytics({ shortUrl });
  }
);

const $analytics = restore<GetAnalyticsResponse>(
  loadAnalyticsFx.doneData,
  null
).reset(resetAnalytics);

const $error = restore(loadAnalyticsFx.failData, null);

const $isLoading = loadAnalyticsFx.pending;

sample({
  clock: analyticsRequested,
  target: loadAnalyticsFx,
});

export const analyticsModel = {
  $analytics,
  $isLoading,
  $error,
  resetAnalytics,
  analyticsRequested,
};
