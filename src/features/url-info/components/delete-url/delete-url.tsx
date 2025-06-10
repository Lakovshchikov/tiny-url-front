import { Button, Flex, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useUnit } from "effector-react";
import { deleteUrlModel, searchUrlFormModel } from "../../model";

export const DeleteShortUrlButton = () => {
  const [deleteUrl, isLoading] = useUnit([
    deleteUrlModel.clickDeleted,
    deleteUrlModel.$isLoading,
  ]);
  const [url] = useUnit([searchUrlFormModel.$url]);

  const handleDelete = async () => {
    try {
      await deleteUrl();
      message.success("Ссылка удалена");
    } catch {
      message.error("Ошибка при удалении");
    }
  };

  return (
    <Flex justify="end" align="center" gap={8}>
      {url && (
        <Popconfirm
          title="Удалить ссылку?"
          description="Это действие необратимо"
          onConfirm={handleDelete}
          okText="Удалить"
          cancelText="Отмена"
        >
          <Button danger icon={<DeleteOutlined />} loading={isLoading}>
            Удалить
          </Button>
        </Popconfirm>
      )}
    </Flex>
  );
};
