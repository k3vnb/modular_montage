import { Box, styled } from '@mui/system';
import { visuallyHidden } from '@mui/utils';
import { Button as BaseButton } from '@mui/base/Button';
import { Modal as BaseModal } from '@mui/base/Modal';
import CloseIcon from '@mui/icons-material/Close';

import { Typography } from 'global/components/Typography';
import { type ModalProps } from './types';

const FlexBox = styled(Box)(() => ({ display: 'flex' }));

export const StyledModal = styled(BaseModal)(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.styles.zIndex.modal,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledContentContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  ...theme.styles.textLg,
  lineHeight: '26.5px',
  letterSpacing: '0.35px',
  position: 'relative',
  width: '780px',
  maxWidth: '98%',
  minHeight: '300px',
  maxHeight: '94%',
  overflow: 'auto',
  outline: 'none',
  borderRadius: '8px',
  backgroundColor: theme.styles.neutral[theme.styles.isDark ? 10 : 5],
  boxShadow: theme.styles.shadow[2],
  padding: '28px 35px',
  '&:focus': {
    outline: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
    minWidth: '300px',
    width: '92%',
  },
}));

const CloseButton = ({ onClose }: Pick<ModalProps, 'onClose'>) => (
  <BaseButton
    className="modal-close-btn"
    aria-label="Close modal"
    onClick={onClose}
  >
    <CloseIcon fontSize="inherit" />
  </BaseButton>
);

const StyledHeaderContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  '& .modal-close-btn': {
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .1s cubic-bezier(.4,0,.2,1)',
    borderRadius: '4px',
    justifySelf: 'flex-end',
    alignSelf: 'flex-start',
    border: '.5px solid transparent',
    color: theme.styles.neutral[70],
    marginRight: '-4px',
    padding: '3px',
    fontSize: '32px',
    '&:hover': {
      boxShadow: `0px 0px 2px 0px ${theme.styles.hyperlink[0]}`,
      color: theme.styles.hyperlink[0],
    },
  },
}));

type HeaderProps = {
  id?: string;
  title: string;
  hideTitle?: boolean;
} & Pick<ModalProps, 'onClose'>;

export const ModalHeader = ({ id, title, hideTitle, onClose }: HeaderProps) => {
  const attrs = hideTitle ? { style: { ...visuallyHidden } } : {};
  return (
    <StyledHeaderContainer>
      <CloseButton onClose={onClose} />
      <Typography.H4 id={id} component="h3" sx={{ color: theme => theme.styles.neutral[90] }} {...attrs}>
        {title}
      </Typography.H4>
    </StyledHeaderContainer>
  );
};

export const MainContentContainer = styled(FlexBox)(() => ({
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: 'min-content',
  overflowY: 'auto',
}));

export const FooterContainer = styled(FlexBox)(() => ({
  alignItems: 'center',
}));
