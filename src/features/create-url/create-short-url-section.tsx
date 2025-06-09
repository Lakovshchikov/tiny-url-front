import { Card, Divider, Typography } from "antd";
import { CreatedUrlCard, CreateUrlForm } from "./components";

export const CreateShortUrlSection = () => {
  return (
    <Card
      title={
        <Typography.Title level={4}>Создать короткую ссылку</Typography.Title>
      }
    >
      <CreateUrlForm />
      <Divider />
      <CreatedUrlCard />
    </Card>
  );
};
