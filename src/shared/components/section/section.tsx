import { Card } from "antd";
import type { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

type SectionProps = PropsWithChildren<{
  title: React.ReactNode;
}>;

export const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <Card className={styles.section} title={title}>
      {children}
    </Card>
  );
};
