import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import ArrowLeft from "@mui/icons-material/WestOutlined";

export const NotFoundPage = (): JSX.Element => {
  return (
    <Stack gap="20px">
      <h2>Not Found</h2>
      <span>Sorry, the page you are looking for does not exist.</span>
      <Link to=".."><ArrowLeft /> Go Back</Link>
    </Stack>
  );
};
