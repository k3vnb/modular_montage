import React from 'react';
import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
import { useGlobalContext } from 'contexts/GlobalContext';
import { THEME_IDS } from 'theme';
import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';

export const Dashboard = (): JSX.Element => {
  const ref = React.useRef<HTMLButtonElement>(null);
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Dashboard" description="Lorem Ipsum Doleres etc" />
      <Tile showBorder variant="info" elevation={1}>
        <ThemeRadioButtons />
      </Tile>
      <ThemeButton ref={ref} text="Primary" />
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
