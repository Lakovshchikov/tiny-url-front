import { getRedirectUrl } from "@shared/lib";
import type { Url } from "@shared/types";
import { Empty, Skeleton, Space, Typography } from "antd";
import type { FC } from "react";

type UrlCardProps = {
  title: string;
  url:
    | (Url & {
        clickCount?: number;
      })
    | null;
  loading?: boolean;
  error?: Error | null;
};

export const UrlCard: FC<UrlCardProps> = ({ url, title, error, loading }) => {
  return (
    <>
      <Typography.Title level={5}>{title}</Typography.Title>
      {loading && <Skeleton active />}
      {((!loading && !url) || error) && <Empty />}
      {url && !loading && (
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
          {url.clickCount && (
            <>
              <Typography.Text type="secondary">Всего кликов:</Typography.Text>
              <Typography.Text>{url.clickCount}</Typography.Text>
            </>
          )}
        </Space>
      )}
    </>
  );
};
