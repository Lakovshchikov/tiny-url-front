import { createEffect, createEvent, restore, sample } from "effector";
import { api, type GetUrlResponse } from "@shared/api";

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

export const searchUrlFormModel = {
  $url,
  $isLoading,
  $error,
  formSubmitted,
  resetUrl,
};
