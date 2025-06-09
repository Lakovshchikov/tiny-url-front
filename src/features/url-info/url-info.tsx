import { Card, Typography } from "antd";

import {
  UrlSearch,
  UrlCard,
  LastClicksList,
  DeleteShortUrlButton,
} from "./components";

export const UrlInfoSection = () => {
  return (
    <Card
      title={<Typography.Title level={4}>Информация о ссылке</Typography.Title>}
    >
      <UrlSearch />
      <UrlCard />
      <DeleteShortUrlButton />
      <LastClicksList />
    </Card>
  );
};
