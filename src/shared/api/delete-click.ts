import { apiWrapper } from "@shared/lib";
import { API_URL } from "../config";

export type DeleteClickRequestParams = {
  shortUrl: string;
};

export const deleteClick = async (
  params: DeleteClickRequestParams,
): Promise<unknown> => {
  return apiWrapper(() =>
    fetch(`${API_URL}/api/v1/url/${params.shortUrl}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }),
  );
};
