import dayjs from "dayjs";
import z from "zod";

export const createShortUrlFormValuesSchema = z.object({
  expiresAt: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true; // если не указано — ок
        const date = dayjs(val, "YYYY-MM-DD HH:mm:ss", true);
        return date.isValid() && date.isAfter(dayjs());
      },
      {
        message: "Дата истечения должна быть больше текущего времени",
      },
    ),
  originalUrl: z.string().url(),
  shortUrl: z
    .string()
    .regex(/^[a-zA-Z0-9\-_.]+$/)
    .max(50)
    .min(3)
    .or(z.literal(""))
    .optional(),
});
