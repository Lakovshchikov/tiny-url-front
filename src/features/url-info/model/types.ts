import type z from "zod";
import { searchUrlInfoFormValuesSchema } from "./validation";

export type SearchUrlInfoFormValues = z.infer<
  typeof searchUrlInfoFormValuesSchema
>;
