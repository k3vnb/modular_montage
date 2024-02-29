import { Box, styled } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: theme.palette.primary.surface,
  color: theme.palette.primary.main,
  minHeight: '100vh',
  textAlign: 'center',
}));
