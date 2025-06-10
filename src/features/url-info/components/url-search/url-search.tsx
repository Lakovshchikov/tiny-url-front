import { Button, Flex, Form, Input } from "antd";
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
    <Flex gap="middle" className={styles["search-wrapper"]}>
      <Form.Item
        label="Короткий URL"
        htmlFor="shortUrl"
        validateStatus={form.errors.shortUrl ? "error" : ""}
        help={form.errors.shortUrl}
        className={styles["search-input"]}
      >
        <Input
          required
          id="shortUrl"
          value={form.values.shortUrl}
          onChange={handleChangeValue("shortUrl")}
          placeholder="my-alias"
        />
      </Form.Item>

      <Button type="primary" onClick={() => form.handleSubmit()}>
        Найти
      </Button>
    </Flex>
  );
};
