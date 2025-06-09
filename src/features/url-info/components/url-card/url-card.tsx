import { Empty, Skeleton, Space, Typography } from "antd";
import { useUnit } from "effector-react";
import { getRedirectUrl } from "@shared/lib";
import { searchUrlFormModel } from "../../model";

export const UrlCard: React.FC = () => {
  const [url, isLoading, error] = useUnit([
    searchUrlFormModel.$url,
    searchUrlFormModel.$isLoading,
    searchUrlFormModel.$error,
  ]);

  console.log("url", url, "isLoading", isLoading, "error", error);

  return (
    <>
      <Typography.Title level={5}>Информация о ссылке:</Typography.Title>
      {isLoading && <Skeleton active />}
      {((!isLoading && !url) || error) && <Empty />}
      {url && !isLoading && (
        <Space direction="vertical" size="small" style={{ width: "100%" }}>
          <Typography.Text type="secondary">Ссылка:</Typography.Text>
          <Space>
            <Typography.Text copyable>
              {getRedirectUrl(url.shortUrl)}
            </Typography.Text>
          </Space>
          <Typography.Text type="secondary">Оригинальный URL:</Typography.Text>
          <Typography.Text copyable>{url.originalUrl}</Typography.Text>
          <Typography.Text type="secondary">Истекает:</Typography.Text>
          <Typography.Text>{url.expiresAt}</Typography.Text>
          <Typography.Text type="secondary">Создана:</Typography.Text>
          <Typography.Text>{url.createdAt}</Typography.Text>
          <Typography.Text type="secondary">Всего кликов:</Typography.Text>
          <Typography.Text>{url.clickCount}</Typography.Text>
        </Space>
      )}
    </>
  );
};
