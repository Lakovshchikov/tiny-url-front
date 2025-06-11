import { createEffect, createEvent, restore, sample } from "effector";
import { api, type GetUrlResponse } from "@shared/api";
import { analyticsModel } from "./analytics";

const formSubmitted = createEvent<string>();

const resetUrl = createEvent();

const submitFormFx = createEffect<string, GetUrlResponse>(
  async (shortUrl: string) => {
    return api.getUrlInfo({ shortUrl });
  },
);

const $url = restore<GetUrlResponse>(submitFormFx.doneData, null).reset(
  resetUrl,
);

const $error = restore(submitFormFx.failData, null);

const $isLoading = submitFormFx.pending;

sample({
  clock: formSubmitted,
  source: { isLoading: $isLoading },
  filter: ({ isLoading }) => !isLoading,
  fn: (_, shortUrl) => shortUrl,
  target: submitFormFx,
});

sample({
  clock: submitFormFx.failData,
  target: [resetUrl, analyticsModel.resetAnalytics],
});

sample({
  clock: submitFormFx.doneData,
  fn: () => null,
  target: $error,
});

sample({
  clock: $url,
  filter: (url) => url !== null,
  fn: (url) => (url ? url.shortUrl : ""),
  target: analyticsModel.analyticsRequested,
});

export const searchUrlFormModel = {
  $url,
  $isLoading,
  $error,
  formSubmitted,
  resetUrl,
};
