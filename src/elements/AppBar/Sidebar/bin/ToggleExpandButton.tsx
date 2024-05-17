import { styled } from '@mui/system';
import { UnstyledButton } from 'global/components/Buttons';
import { MENU_ID, TRANSITION_DURATION } from '../constants';

type ToggleExpandButtonProps = {
  onClick: () => void;
  expanded: boolean;
};

export const ToggleExpandButton = ({ onClick, expanded }: ToggleExpandButtonProps) => {
  const ariaLabel = expanded ? 'collapse sidebar' : 'expand sidebar';
  return (
    <StyledToggleExpandButton
      aria-label={ariaLabel}
      aria-controls={MENU_ID}
      onClick={onClick}
      aria-expanded={expanded}
      className={expanded ? 'btnExpanded' : ''}
    />
  );
};

const StyledToggleExpandButton = styled(UnstyledButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: 0,
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.surface,
  transition: `all ${TRANSITION_DURATION * 2} ease`,
  transform: 'translateX(50%)',
  border: `1px solid ${theme.palette.secondary.surface}`,
  '&:hover': {
    boxShadow: `1px 0px 2px ${theme.palette.neutral[10]}`,
    '&::after': {
      borderLeftColor: theme.palette.neutral[50],
    },
  },
  '&::after': {
    content: '""',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: `8px solid ${theme.palette.neutral[30]}`,
    transformOrigin: 'center',
    transition: `transform ${TRANSITION_DURATION}ms ease`,
  },
  '&.btnExpanded': {
    '&::after': {
      transform: 'rotate(180deg)',
    },
  },
}));
