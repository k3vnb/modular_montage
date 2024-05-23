import React from 'react';
import { StyledButton, IconContainer, type StyledButtonProps, type IconProp } from './ThemeButton.elements';

export type TButtonProps = {
  text: string;
  icon?: IconProp;
} & StyledButtonProps;

export const ThemeButton = React.forwardRef<HTMLButtonElement, TButtonProps>(function ThemeButton({ text, icon, ...props }, ref) {

  const withIcon = React.useMemo(() => {
    if (!icon) return null;
    return <IconContainer icon={icon} />;
  }, [icon]);

  return (
    <StyledButton ref={ref}  {...props}>
      {withIcon}{text}
    </StyledButton>
  );
});
