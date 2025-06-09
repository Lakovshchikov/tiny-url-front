import { useLocation } from "react-router";
import { getRedirectUrl } from "@shared/lib";

export const useRedirect = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);

  window.location.href = getRedirectUrl(path);
};
