import z from "zod";

export const createShortUrlFormValuesSchema = z.object({
  expiresAt: z.string().optional(),
  originalUrl: z.string().url(),
  shortUrl: z
    .string()
    .regex(/^[a-zA-Z0-9\-_.]+$/)
    .max(50)
    .min(3)
    .or(z.literal(""))
    .optional(),
});
