import type z from "zod";
import type { createShortUrlFormValuesSchema } from "./validation";
import type { Dayjs } from "dayjs";

export type CreateShortUrlFormValues = z.infer<
  typeof createShortUrlFormValuesSchema
> & {
  currentSelectedExpiresAt: Dayjs | null;
};
