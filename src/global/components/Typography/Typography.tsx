import { Box, type BoxProps, styled } from '@mui/system';
import { fontFamily, type ThemeFontKeys } from 'theme/typography';

const UnstyledHeading = styled(Box)`
  font-family: ${fontFamily};
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	color: ${props => props.theme.styles.neutral[90]};
	vertical-align: baseline;
`;

type StyledHeadingProps = BoxProps & {
	fontKey: ThemeFontKeys;
};

const options = {
	shouldForwardProp: (prop: string) => !['fontKey'].includes(prop),
}; 

const StyledHeading = styled(UnstyledHeading, options)<StyledHeadingProps>(({ theme, fontKey }) => ({
	color: theme.styles.neutral[90],
	...theme.styles[fontKey],
}));

export const H1 = (props: BoxProps) => <StyledHeading component="h1" fontKey="headingH1" {...props} />;
export const H2 = (props: BoxProps) => <StyledHeading component="h2" fontKey="headingH2" {...props} />;
export const H3 = (props: BoxProps) => <StyledHeading component="h3" fontKey="headingH3" {...props} />;
export const H4 = (props: BoxProps) => <StyledHeading component="h4" fontKey="headingH4" {...props} />;
export const H5 = (props: BoxProps) => <StyledHeading component="h5" fontKey="headingH5" {...props} />;
export const H6 = (props: BoxProps) => <StyledHeading component="h6" fontKey="headingH6" {...props} />;
export const Body = (props: BoxProps) => <StyledHeading component="p" fontKey="textMd" {...props} />;
