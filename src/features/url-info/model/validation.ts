import z from "zod";

export const searchUrlInfoFormValuesSchema = z.object({
  shortUrl: z
    .string()
    .regex(/^[a-zA-Z0-9\-_.]+$/)
    .max(50),
});
