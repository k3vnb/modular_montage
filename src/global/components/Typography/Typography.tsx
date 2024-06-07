import { Box, type BoxProps, styled } from '@mui/system';
import { fontFamily, type ThemeFontKeys } from 'theme/typography';

const UnstyledHeading = styled(Box)`
  font-family: ${fontFamily};
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	color: ${props => props.theme.styles.neutral[90]};
	vertical-align: baseline;
`;

const StyledH1 = styled(UnstyledHeading)(({ theme }) => ({
	...theme.styles.headingH1,
	[theme.breakpoints.down('sm')]: {
		...theme.styles.headingH1Mobile,
	},
}));

const StyledH2 = styled(UnstyledHeading)(({ theme }) => ({
	...theme.styles.headingH2,
	[theme.breakpoints.down('sm')]: {
		...theme.styles.headingH2Mobile,
	},
}));
		
type StyledHeadingProps = BoxProps & {
	fontKey: ThemeFontKeys;
};

const StyledHeading = styled(UnstyledHeading, {
	shouldForwardProp: (prop: string) => !['fontKey'].includes(prop),
})<StyledHeadingProps>(({ theme, fontKey }) => ({
	color: theme.styles.neutral[90],
	...theme.styles[fontKey],
}));

export const H1 = (props: BoxProps) => <StyledH1 component="h1" {...props} />;
export const H2 = (props: BoxProps) => <StyledH2 component="h2" {...props} />;
export const H3 = (props: BoxProps) => <StyledHeading component="h3" fontKey="headingH3" {...props} />;
export const H4 = (props: BoxProps) => <StyledHeading component="h4" fontKey="headingH4" {...props} />;
export const H5 = (props: BoxProps) => <StyledHeading component="h5" fontKey="headingH5" {...props} />;
export const H6 = (props: BoxProps) => <StyledHeading component="h6" fontKey="headingH6" {...props} />;
export const Body = (props: BoxProps) => <StyledHeading component="div" fontKey="textMd" {...props} sx={{ color: theme => theme.styles.neutral[95], fontSize: 14, lineHeight: 1.65, ...props.sx }} />;
export const P = (props: BoxProps) => <StyledHeading component="p" fontKey="textMd" {...props} sx={{ color: theme => theme.styles.neutral[95], fontSize: 14, lineHeight: 1.7, ...props.sx }} />;
export const Bold = (props: BoxProps) => <Box component="span" fontWeight={500} {...props} />;
