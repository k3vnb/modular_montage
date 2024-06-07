import { Box } from '@mui/system';
import { ColorBox } from './ColorBox';
import type { TPaletteDisplay } from 'theme/utils';

type Props = Omit<TPaletteDisplay, 'name'> & {
  reverse?: boolean;
  size?: number;
};

const DEFAULT_SIZE = 44;

export const PaletteYantra = ({
  spectrum,
  shades,
  reverse,
  size = DEFAULT_SIZE
}: Props): JSX.Element => {
  const list = reverse ? [...spectrum].reverse() : spectrum;
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={1.25} position="relative" height={size} width={size} >
      {list.map((hex, i, arr) => (
        <ColorBox
          key={hex}
          hex={hex}
          position="absolute"
          sx={{
            top: '50%',
            left: '50%',
            zIndex: i,
            transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            width: size - (i * (size / arr.length)),
            height: size - (i * (size / arr.length)),
          }}
        />
      ))}
      {shades && (
        <>
          {[...shades.neutral, ...shades.dark, shades.accent].map((hex, i, arr) => (
            <ColorBox
              key={hex}
              hex={hex}
              position="absolute"
              bottom={`${(i) * (100 / arr.length)}%`}
              left="100%"
              sx={{
                zIndex: 1,
                height: size / 8,
                width: size / 8,
                transformOrigin: 'top', transform: `translate(100%, -50%) rotate(${45}deg)`
            }} />
          ))}
        </>
      )}
    </Box>
  );
};
