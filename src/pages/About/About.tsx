import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
// import { useGlobalContext } from 'contexts/GlobalContext';
// import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import YardIcon from '@mui/icons-material/YardOutlined';

export const About = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="About" icon={YardIcon} description="Apps and assemblances" />
      <Tile showBorder variant="info" gap={1}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>What even is this?</Typography.H4>
      </Tile>
      <Tile showBorder gap={1} variant="info" elevation={1}>
        <Typography.H4>Technical Stuff</Typography.H4>
        <Typography.Body>Lorem ipsum deloras</Typography.Body>
        <ul>
          <li>React</li>
          <li>Material-UI</li>
          <li>Atomic Design</li>
          <li>Design Systems</li>
          <li>Navigation</li>
          <li>WAI-ARIA / Web Accessibility</li>
        </ul>
      </Tile>
    </Box>
  );
};
