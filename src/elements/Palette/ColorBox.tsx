import { Box, styled } from '@mui/system';

export const ColorBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hex',
})<{ hex: string }>`
  height: 36px;
  width: 36px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background-color: ${({ hex }) => hex};
`;
