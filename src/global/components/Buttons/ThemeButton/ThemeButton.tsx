import React from 'react';
import { StyledButton, IconContainer, type StyledButtonProps, type IconProp } from './ThemeButton.elements';

export type TButtonProps = {
  text: string;
  icon?: IconProp;
} & StyledButtonProps;

export const ThemeButton: React.FC<TButtonProps> = ({
  text,
  icon,
  ...props
}) => {

  const withIcon = React.useMemo(() => {
    if (!icon) return null;
    return <IconContainer icon={icon} />;
  }, [icon]);

  return (
    <StyledButton {...props}>
      {withIcon}{text}
    </StyledButton>
  );
};
