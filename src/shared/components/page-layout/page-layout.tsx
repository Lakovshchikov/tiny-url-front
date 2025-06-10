import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import styles from "./styles.module.css";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header} />
      <Content className={styles.content}>{children}</Content>
    </Layout>
  );
};
