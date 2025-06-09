import { Empty, Skeleton, Space, Typography } from "antd";
import { useUnit } from "effector-react";
import { createUrlFormModel } from "../../model";
import { getRedirectUrl } from "@shared/lib";

export const CreatedUrlCard: React.FC = () => {
  const [url, isLoading] = useUnit([
    createUrlFormModel.$url,
    createUrlFormModel.$isLoading,
  ]);

  return (
    <>
      <Typography.Title level={5}>Последняя созданная ссылка:</Typography.Title>
      {isLoading && <Skeleton active />}
      {!isLoading && !url && <Empty />}
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
        </Space>
      )}
    </>
  );
};
