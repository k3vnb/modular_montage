import { Box, Stack } from '@mui/system';
import { Tile } from 'global/components/Tile';
import { H2, P } from 'global/components/Typography';

const PARAGRAPHS = [
  'If you\'ve tiptoed into the fray of web app development you\'ve probably had moments of reflection that you can\'t quite verbalize.  How is something so ubiquitous so disorienting to dissect?  How many acronyms can one thought contain before the thought melts into something irretrievable? My best answer is: just depends on the day.',
  'Modular Montage is by and large a "meta" app - it is an app about itself, a starter kit, a component library, a sandbox, and a demo reel. It is dedicated to the various systems that go into the architecture of a web application, including the exploration of themes, layout, and modular component structure.  It is my attempt to display the process of building cohesive digital interfaces and user experiences and maybe to explain them without melting into a sea of acronyms, though the sea of acronyms calls to me.',
  'I will be updating this site regularly with new features, components, and themes.'
];

export const IntroTile = () => {
  return (
    <Box component="section">
      <Tile showBorder gap={3} elevation={1}>
        <H2 component="h3" textAlign="center">
          Welcome to Modular Montage
        </H2>
        <Stack gap={2}>
          {PARAGRAPHS.map((text, index) => (
            <P
              key={index}
              sx={{
                fontSize: '1rem',
                textAlign: { xxs: 'center', md: 'left' }
              }}
            >
              {text}
            </P>
          ))}
        </Stack>
      </Tile>
    </Box>
  );
};
