import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./styles.module.css";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>{children}</Content>
    </Layout>
  );
};
