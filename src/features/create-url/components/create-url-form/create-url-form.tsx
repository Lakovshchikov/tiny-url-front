import { Button, DatePicker, Form, Input, Space } from "antd";
import type { DatePickerProps } from "antd";
import { useForm } from "../../hooks/use-form";
import styles from "./styles.module.css";

export const CreateUrlForm = () => {
  const form = useForm();

  const handleChangeDate: DatePickerProps["onChange"] = (day, dateString) => {
    form.setFieldValue("expiresAt", dateString);
    form.setFieldValue("currentSelectedExpiresAt", day);
  };

  const handleChangeValue =
    (field: keyof typeof form.values) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      form.setFieldValue(field, event.target.value);
    };

  const handleSubmit = () => {
    form.handleSubmit();
  };

  return (
    <Space direction="vertical" size="middle" className={styles.space}>
      <Form.Item
        label="Оригинальный URL"
        htmlFor="originalUrl"
        validateStatus={form.errors.originalUrl ? "error" : ""}
        help={form.errors.originalUrl}
      >
        <Input
          required
          id="originalUrl"
          value={form.values.originalUrl}
          onChange={handleChangeValue("originalUrl")}
          placeholder="https://example.com"
        />
      </Form.Item>

      <Form.Item
        label="Псевдоним (необязательно)"
        htmlFor="shortUrl"
        validateStatus={form.errors.shortUrl ? "error" : ""}
        help={form.errors.shortUrl}
      >
        <Input
          id="shortUrl"
          value={form.values.shortUrl}
          onChange={handleChangeValue("originalUrl")}
          placeholder="my-alias"
        />
      </Form.Item>

      <Form.Item
        htmlFor="expiresAt"
        label="Дата истечения (необязательно)"
        validateStatus={form.errors.expiresAt ? "error" : ""}
        help={form.errors.expiresAt}
      >
        <DatePicker
          id="expiresAt"
          placeholder="Выберите дату и время"
          showTime
          value={form.values.currentSelectedExpiresAt}
          onChange={handleChangeDate}
        />
      </Form.Item>

      <Button type="primary" block onClick={handleSubmit}>
        Создать
      </Button>
    </Space>
  );
};
