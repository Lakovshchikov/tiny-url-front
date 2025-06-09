import { API_URL } from "../config";

export const getRedirectUrl = (shortUrl: string) => {
  return `${API_URL}/${shortUrl}`;
};
