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
  top: 0,
  right: 0,
  width: 32,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.neutral[10],
  transition: `background-color ${TRANSITION_DURATION} ease`,
  transform: 'translateX(50%)',
  '&:hover': {
    backgroundColor: theme.palette.neutral[20],
  },
  '&::after': {
    content: '""',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: `8px solid ${theme.palette.neutral[60]}`,
    transformOrigin: 'center',
    transition: `transform ${TRANSITION_DURATION}ms ease`,
  },
  '&.btnExpanded': {
    '&::after': {
      transform: 'rotate(180deg)',
    },
  },
}));
