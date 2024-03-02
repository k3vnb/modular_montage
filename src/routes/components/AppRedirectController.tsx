import { Navigate, useMatch } from "react-router-dom";
import { ROUTES } from "routes";

export const AppRedirectController = () => {
  const match = useMatch(ROUTES.root.path);
  if (match) {
    return <Navigate to={ROUTES.dashboard.path} />;
  }
  return null;
};
