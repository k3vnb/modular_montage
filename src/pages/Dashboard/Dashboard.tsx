import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
import { useGlobalContext } from 'contexts/GlobalContext';
import { THEME_IDS } from 'theme';

export const Dashboard = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Dashboard" description="Lorem Ipsum Doleres etc" />
      <ThemeRadioButtons />
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
