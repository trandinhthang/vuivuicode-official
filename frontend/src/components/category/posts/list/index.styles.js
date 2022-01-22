import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const GridCard = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    paddingLeft: 6,
    paddingRight: 6,
  },
}));

export { GridCard };
