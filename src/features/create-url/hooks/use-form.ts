import { useFormik } from "formik";
import {
  type CreateShortUrlFormValues,
  createShortUrlFormValuesSchema,
  createUrlFormModel,
} from "../model";
import { useUnit } from "effector-react";

export const useForm = () => {
  const [submitForm] = useUnit([createUrlFormModel.formSubmitted]);

  const formik = useFormik<CreateShortUrlFormValues>({
    initialValues: {
      originalUrl: "",
      shortUrl: "",
      expiresAt: "",
      currentSelectedExpiresAt: null,
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      const result = createShortUrlFormValuesSchema.safeParse(values);

      if (!result.success) {
        result.error.issues.forEach((issue) => {
          if (issue.path.length > 0) {
            errors[issue.path[0]] = issue.message;
          }
        });
      }

      return errors;
    },
  });

  return formik;
};
