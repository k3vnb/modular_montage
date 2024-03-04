import { Stack, Box, styled } from '@mui/system';
import { TRANSITION_DURATION } from './constants';

const transition = `width ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.6, 1) 0ms`;

export const RelativeWrapper = styled(Box)(() => ({
  position: 'relative',
  overflow: 'visible',
  transition, 
}));

export const OverflowWrapper = styled(Box)(() => ({
  height: '100vh',
  overflowY: 'auto',
  transition,
}));

export const SidebarContent = styled(Stack)(({ theme }) => ({
  minHeight: '100%',
  height: 'auto',
  padding: '34px 0',
  backgroundColor: theme.palette.neutral[10],
  transition,
}));
