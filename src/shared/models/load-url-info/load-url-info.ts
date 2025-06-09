import { createEffect, createEvent, restore, sample } from "effector";
import { api, type GetUrlResponse } from "@shared/api";

const urlInfoLoaded = createEvent<string>();

const loadOriginalUrl = createEffect<string, GetUrlResponse>(
  async (shortUrl: string) => {
    return api.getUrlInfo({ shortUrl });
  },
);

const $url = restore<GetUrlResponse>(loadOriginalUrl.doneData, null);

const $error = restore(loadOriginalUrl.failData, null);

const $isLoading = loadOriginalUrl.pending;

sample({
  clock: urlInfoLoaded,
  source: { isLoading: $isLoading, url: $url },
  filter: ({ isLoading, url }) => !isLoading && url === null,
  fn: (_, shortUrl) => shortUrl,
  target: loadOriginalUrl,
});

export const loadUrlModel = {
  $url: $url,
  $isLoading: $isLoading,
  error: $error,
  urlInfoLoaded,
};
