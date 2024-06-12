import { Box } from '@mui/system';
import YardIcon from '@mui/icons-material/YardOutlined';
import { PageTitle } from 'global/components/PageTitle';
import { Tile } from 'global/components/Tile/Tile';
import { H4, Body } from 'global/components/Typography';

export const About = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle
        icon={YardIcon}
        title="About"
        description="Apps and assemblances"
      />
      <Tile showBorder variant="info" gap={1}  elevation={1}>
        <H4 component="h3">
          What even is this?
        </H4>
        <Body
          sx={{
            fontWeight: 400,
            color: theme => theme.styles.neutral[95],
          }}
        >
          This app has several purposes.
        </Body>
        <Box component="ul" color={theme => theme.styles.neutral[95]}>
          <li>It is a starter repo for client side of web applications.</li>
          <li>It is a sandbox for experimenting with styles, layouts, semantic markup, and the systems that support them.</li>
          <li>It is a demo space for various widgets, games, and other digital products built by the developer.</li>
        </Box>
      </Tile>
      <Tile showBorder gap={1} variant="info" elevation={1}>
        <H4 component="h4">
          Technical Stuff
        </H4>
        <Body
          sx={{
            fontWeight: 400,
            color: theme => theme.styles.neutral[95],
          }}
        >
          The tech stack for this app includes:
        </Body>
        <Box component="ul" color={theme => theme.styles.neutral[95]}>
          <li>React</li>
          <li>TypeScript</li>
          <li>Storybook</li>
          <li>MUI Base & System (highly customizable Material-UI libraries)</li>
          <li>React-Router-Dom</li>
        </Box>
        <Body
          sx={{
            fontWeight: 400,
            color: theme => theme.styles.neutral[95],
          }}
        >
          The guiding principles for this app include:
        </Body>
        <Box component="ul" color={theme => theme.styles.neutral[95]}>
          <li>WAI-ARIA Accessibility Standard</li>
          <li>Atomic Design</li>
          <li>Mobile Responsive Design</li>
        </Box>
      </Tile>
    </Box>
  );
};
