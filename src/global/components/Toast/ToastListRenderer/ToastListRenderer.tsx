import { Stack, styled } from '@mui/system';
import { Toast } from '../Toast/Toast';
import { useGlobalToastState } from '../hooks/useGlobalToastState';

export const ToastListRenderer = () => {
  const { toastList } = useGlobalToastState();

  if (!toastList.length) return null;

  return (
    <StyledStack spacing={1}>
      {toastList.map((toast) => (
        <Toast
          isStaticPosition
          key={toast.id}
          {...toast}
        />
      ))}
    </StyledStack>
  );
};

export const StyledStack = styled(Stack)(({ theme }) => ({
  position: 'fixed',
  width: '100vw',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: theme.styles.zIndex.toast,
  maxHeight: '100vh',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    right: 0,
    alignItems: 'center',
  },
}));

