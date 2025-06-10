import { useUnit } from "effector-react";
import { createUrlFormModel } from "../../model";
import { UrlCard } from "@shared/components";

export const CreatedUrlCard: React.FC = () => {
  const [url, isLoading, error] = useUnit([
    createUrlFormModel.$url,
    createUrlFormModel.$isLoading,
    createUrlFormModel.$error,
  ]);

  return (
    <UrlCard
      url={url}
      title="Cозданная ссылка:"
      error={error}
      loading={isLoading}
    />
  );
};
