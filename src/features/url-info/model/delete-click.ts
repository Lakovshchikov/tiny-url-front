import { createEffect, createEvent, restore, sample } from "effector";
import { api } from "@shared/api";
import { searchUrlFormModel } from "./search-url-form";
import { analyticsModel } from "./analytics";

const clickDeleted = createEvent();

const deleteClickFx = createEffect<string, unknown>(
  async (shortUrl: string) => {
    await api.deleteClick({ shortUrl });
    return true;
  },
);

const $error = restore(deleteClickFx.failData, null);

const $isLoading = deleteClickFx.pending;

sample({
  clock: clickDeleted,
  source: { url: searchUrlFormModel.$url },
  filter: (url) => {
    console.log("filter url", url);
    return url !== null;
  },
  fn: ({ url }) => (url ? url.shortUrl : ""),
  target: deleteClickFx,
});

sample({
  clock: deleteClickFx.done,
  target: [searchUrlFormModel.resetUrl, analyticsModel.resetAnalytics],
});

export const deleteUrlModel = {
  $isLoading,
  $error,
  clickDeleted,
};
