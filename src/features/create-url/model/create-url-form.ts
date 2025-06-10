import { createEffect, createEvent, restore, sample } from "effector";
import type { CreateShortUrlFormValues } from "./types";
import {
  api,
  type CreateShortUrlResponse,
  type CreateShortUrlRequestBody,
} from "@shared/api";

const formSubmitted = createEvent<CreateShortUrlFormValues>();

const submitFormFx = createEffect<
  CreateShortUrlRequestBody,
  CreateShortUrlResponse
>(async (data) => {
  return api.createShortUrl(data);
});

const $url = restore<CreateShortUrlResponse>(submitFormFx.doneData, null);

const $error = restore(submitFormFx.failData, null);

const $isLoading = submitFormFx.pending;

sample({
  clock: formSubmitted,
  source: { isLoading: $isLoading },
  filter: ({ isLoading }) => !isLoading,
  fn: (_, payload) => ({
    originalUrl: payload.originalUrl,
    expiresAt: payload.expiresAt ? payload.expiresAt : undefined,
    shortUrl: payload.shortUrl ? payload.shortUrl : undefined,
  }),
  target: submitFormFx,
});

export const createUrlFormModel = {
  $url,
  $isLoading,
  $error,
  formSubmitted,
};
