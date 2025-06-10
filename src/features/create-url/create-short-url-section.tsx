import { Divider, Typography } from "antd";
import { CreatedUrlCard, CreateUrlForm } from "./components";
import { Section } from "@shared/components";

export const CreateShortUrlSection = () => {
  return (
    <Section
      title={
        <Typography.Title level={4}>Создать короткую ссылку</Typography.Title>
      }
    >
      <CreateUrlForm />
      <Divider />
      <CreatedUrlCard />
    </Section>
  );
};
