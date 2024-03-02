import { Box, Stack } from "@mui/system";
import { Outlet } from "react-router-dom";

type Props = {
  title: string;
  isSubroute?: boolean;
  hasSubroutes?: boolean;
};

export const PlaceholderPage = ({ title, isSubroute = false, hasSubroutes = false }: Props): JSX.Element => {
  return (
    <Stack gap="20px">
      <Box component={isSubroute ? "h3" : "h2"}>{title}</Box>
      {hasSubroutes && <Outlet />}
    </Stack>
  );
};
