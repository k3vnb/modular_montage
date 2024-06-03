import { Box, type BoxProps, useTheme } from '@mui/system';
import { ReactComponent as _IdeaIcon } from 'global/assets/idea.svg';
import { ReactComponent as _StoryboardIcon } from 'global/assets/storyboard.svg';

const LayoutIcon = ({
  small = false,
  icon: Icon,
  ...boxProps
}: {
  small?: boolean;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
} & BoxProps) => {
  const { styles } = useTheme();
  return (
    <Box
      p={small ? 1 : 6}
      flexGrow={small ? 0 : 1}
      justifyContent="center"
      alignItems="center"
      {...boxProps}
    >
      <Box
        maxHeight={small ? 80 : 300 }
        maxWidth={small ? 80 : '100%' }
        component={Icon}
        fill={styles.neutral[80]}
      />
    </Box>
  );
};

type LayoutIconProps = {
  small?: boolean;
} & Omit<BoxProps, 'children'>;

const IdeaIcon = (props: LayoutIconProps) => <LayoutIcon icon={_IdeaIcon} {...props} />;
const StoryboardIcon = (props: LayoutIconProps) => <LayoutIcon icon={_StoryboardIcon} {...props} />;

export const LayoutIcons = {
  IdeaIcon,
  StoryboardIcon,
};
