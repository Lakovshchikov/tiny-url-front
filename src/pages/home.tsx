import { Flex } from "antd";
import { CreateShortUrlSection, UrlInfoSection } from "../features";
import { PageLayout } from "../shared//components";

export const Home = () => {
  return (
    <PageLayout>
      <Flex gap="middle" wrap justify="center" align="center">
        <CreateShortUrlSection />
        <UrlInfoSection />
      </Flex>
    </PageLayout>
  );
};
