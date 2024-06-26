import { styled } from '@mui/system';
import { UnstyledButton } from 'global/components/Buttons';
import { MENU_ID, TRANSITION_DURATION } from '../constants';

type ToggleExpandButtonProps = {
  onClick: () => void;
  expanded: boolean;
};

export const ToggleExpandButton = ({ onClick, expanded }: ToggleExpandButtonProps) => {
  return (
    <StyledToggleExpandButton
      aria-label={expanded ? 'collapse sidebar' : 'expand sidebar'}
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
  backgroundColor: theme.styles.elements.appbar.surface[0],
  transform: 'translateX(50%)',
  border: `1px solid ${theme.styles.elements.appbar.surface[0]}`,
  '&:hover': {
    '&::after': {
      borderLeftColor: theme.styles.elements.appbar.border[1],
    },
  },
  '&::after': {
    content: '""',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: `8px solid ${theme.styles.neutral[30]}`,
    transformOrigin: 'center',
    transition: `transform ${TRANSITION_DURATION}ms ease`,
  },
  '&.btnExpanded': {
    '&::after': {
      transform: 'rotate(180deg)',
    },
  },
}));
