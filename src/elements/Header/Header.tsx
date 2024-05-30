import { Stack } from '@mui/system';
import { HeaderWrapper, Brand, NavMenu } from './Header.elements';
import { useGlobalContext } from 'contexts/GlobalContext';

export const Header = (): JSX.Element => {
  const { layoutStyle } = useGlobalContext();
  const shouldShowNavMenu = layoutStyle === 'classic';
  return (
    <HeaderWrapper component="header">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={theme => theme.spacing(1.5, 2)}
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <Brand />
        {shouldShowNavMenu && <NavMenu />}
      </Stack>
    </HeaderWrapper>
  );
};

