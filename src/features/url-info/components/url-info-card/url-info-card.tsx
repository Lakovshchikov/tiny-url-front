import { useUnit } from "effector-react";
import { searchUrlFormModel } from "../../model";
import { UrlCard } from "@shared/components";

export const UrlInfoCard: React.FC = () => {
  const [url, isLoading, error] = useUnit([
    searchUrlFormModel.$url,
    searchUrlFormModel.$isLoading,
    searchUrlFormModel.$error,
  ]);

  return (
    <UrlCard
      url={url}
      title="Информация о ссылке:"
      error={error}
      loading={isLoading}
    />
  );
};
