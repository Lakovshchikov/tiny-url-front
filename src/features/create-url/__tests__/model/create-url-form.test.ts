import { describe, it, expect, beforeEach, vi } from "vitest";
import { fork, allSettled } from "effector";
import { createUrlFormModel } from "../../model/create-url-form";
import { api } from "@shared/api";
import type { Url } from "@shared/types";
import dayjs from "dayjs";
import type { CreateShortUrlFormValues } from "@features/create-url/model";

describe("Tests for createUrlFormModel", () => {
  const mockResponse: Url = {
    id: 1,
    originalUrl: "https://example.com",
    shortUrl: "https://short.ly/abc",
    expiresAt: "2024-12-31T23:59:59Z",
    createdAt: "2024-01-01T00:00:00Z",
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("Should successfully submit form and save response", async () => {
    vi.spyOn(api, "createShortUrl").mockResolvedValueOnce(mockResponse);

    const scope = fork();

    const values: CreateShortUrlFormValues = {
      originalUrl: "https://example.com",
      expiresAt: "2024-12-31T23:59:59Z",
      shortUrl: "",
      currentSelectedExpiresAt: dayjs(),
    };

    await allSettled(createUrlFormModel.formSubmitted, {
      scope,
      params: values,
    });

    expect(scope.getState(createUrlFormModel.$url)).toEqual(mockResponse);
    expect(scope.getState(createUrlFormModel.$isLoading)).toBe(false);
    expect(scope.getState(createUrlFormModel.$error)).toBeNull();
  });

  it("Should save error when request fails", async () => {
    const error = new Error("Ошибка сети");
    vi.spyOn(api, "createShortUrl").mockRejectedValueOnce(error);

    const scope = fork();

    const values: CreateShortUrlFormValues = {
      originalUrl: "https://example.com",
      expiresAt: "2024-12-31T23:59:59Z",
      shortUrl: "",
      currentSelectedExpiresAt: dayjs(),
    };

    await allSettled(createUrlFormModel.formSubmitted, {
      scope,
      params: values,
    });

    expect(scope.getState(createUrlFormModel.$url)).toBeNull();
    expect(scope.getState(createUrlFormModel.$isLoading)).toBe(false);
    expect(scope.getState(createUrlFormModel.$error)).toBeDefined();
  });
});
