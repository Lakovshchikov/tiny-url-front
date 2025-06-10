import { Flex } from "antd";
import { CreateShortUrlSection, UrlInfoSection } from "@features/index";
import { PageLayout } from "@shared/components";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <PageLayout>
      <Flex
        className={styles["content-wrapper"]}
        gap="middle"
        wrap
        justify="center"
        align="center"
      >
        <CreateShortUrlSection />
        <UrlInfoSection />
      </Flex>
    </PageLayout>
  );
};
