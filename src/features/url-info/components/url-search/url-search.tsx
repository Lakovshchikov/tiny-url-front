import { Button, Form, Input, Space } from "antd";
import { useForm } from "../../hooks";
import styles from "./styles.module.css";

export const UrlSearch = () => {
  const form = useForm();

  const handleChangeValue =
    (field: keyof typeof form.values) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      form.setFieldValue(field, event.target.value);
    };

  return (
    <Space direction="horizontal" size="middle" className={styles.space}>
      <Form.Item
        label="Короткий URL"
        htmlFor="shortUrl"
        validateStatus={form.errors.shortUrl ? "error" : ""}
        help={form.errors.shortUrl}
      >
        <Input
          required
          id="shortUrl"
          value={form.values.shortUrl}
          onChange={handleChangeValue("shortUrl")}
          placeholder="my-alias"
        />
      </Form.Item>

      <Button type="primary" block onClick={() => form.handleSubmit()}>
        Найти
      </Button>
    </Space>
  );
};
