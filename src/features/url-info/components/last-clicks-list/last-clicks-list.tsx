import { analyticsModel } from "@features/url-info/model";
import { List, Typography, Card } from "antd";
import { useUnit } from "effector-react";
import styles from "./styles.module.css";

export const LastClicksList = () => {
  const [analytics] = useUnit([analyticsModel.$analytics]);

  return (
    <Card title="Последние переходы" className={styles["clicks-card"]}>
      <List
        bordered
        dataSource={analytics?.clicks}
        locale={{ emptyText: "Переходов пока нет" }}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Typography.Text code>{item.ipAddress}</Typography.Text>

            <span className={styles["click-date"]}>
              {new Date(item.clickedAt).toLocaleString()}
            </span>
          </List.Item>
        )}
      />
    </Card>
  );
};
