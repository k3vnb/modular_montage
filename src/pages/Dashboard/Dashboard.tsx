import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
import { useGlobalContext } from 'contexts/GlobalContext';
import { THEME_IDS } from 'theme';
import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import DashboardIcon from '@mui/icons-material/BlurOnOutlined';

export const Dashboard = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Mandala Themes" icon={DashboardIcon} description="Lorem Ipsum Doleres etc" />
      <Tile showBorder variant="info" gap={1}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>Welcome to Modular Montage</Typography.H4>
        <Typography.Body>
          This app is dedicated to the exploration of themes, layout, and components in a clientside rendered environment.
        </Typography.Body>
        <Typography.Body>
          This is a dashboard page. It is a place where you can see the themes & layout design in action.
        </Typography.Body>
        <Typography.Body>
          The 'Widgets page' will explore assortments of popups, modals, toasts and other components.
        </Typography.Body>
        <Typography.Body>
          The 'Forms page' will explore form state, styling and validation.
        </Typography.Body>
      </Tile>
      <Tile showBorder gap={1} variant="info" elevation={1}>
        <Typography.H4>Theme Selector</Typography.H4>
        <ThemeRadioButtons />
      </Tile>
      <ThemeButton filled text="Primary" size="large" />
    </Box>
  );
};

const ThemeRadioButtons = (): JSX.Element => {
  const { themeId, updateTheme } = useGlobalContext();
  return (
    <Box display="flex" flexDirection="row" gap={1}>
      {Object.values(THEME_IDS).map((key) => (
        <label key={key}>
          <input
            type="radio"
            name="theme"
            checked={themeId === THEME_IDS[key]}
            onChange={() => updateTheme(key)}
          />
          {key}
        </label>
      ))}
    </Box>
  );
};
