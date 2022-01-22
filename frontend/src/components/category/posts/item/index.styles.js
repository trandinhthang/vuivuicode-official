import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const TypographyTitle = styled(Typography)(({ theme }) => ({
  transition: 'all 0.4s ease 0s',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export { TypographyTitle };
