import { useFormik } from "formik";
import {
  type SearchUrlInfoFormValues,
  searchUrlInfoFormValuesSchema,
  searchUrlFormModel,
} from "../model";
import { useUnit } from "effector-react";

export const useForm = () => {
  const [submitForm] = useUnit([searchUrlFormModel.formSubmitted]);

  const formik = useFormik<SearchUrlInfoFormValues>({
    initialValues: {
      shortUrl: "",
    },
    onSubmit: (values) => {
      submitForm(values.shortUrl);
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      const result = searchUrlInfoFormValuesSchema.safeParse(values);

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
