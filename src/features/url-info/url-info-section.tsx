import { Typography } from "antd";

import {
  UrlSearch,
  UrlInfoCard,
  LastClicksList,
  DeleteShortUrlButton,
} from "./components";
import { Section } from "@shared/components";

export const UrlInfoSection = () => {
  return (
    <Section
      title={<Typography.Title level={4}>Аналитика ссылки</Typography.Title>}
    >
      <UrlSearch />
      <UrlInfoCard />
      <DeleteShortUrlButton />
      <LastClicksList />
    </Section>
  );
};
