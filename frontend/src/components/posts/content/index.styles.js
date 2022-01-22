import { styled } from '@mui/material/styles';
import { CardMedia, Grid } from '@mui/material';

const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
  height: '35vh',
  width: '50vw',
  objectFit: 'cover',
  [theme.breakpoints.down('laptop')]: {
    height: '30vh',
    width: '90vw',
  },
}));
const GridContent = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('laptop')]: {
    paddingLeft: '5px',
    paddingRight: '5px',
  },
}));
const ItemStyle = styled(Grid)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  borderRadius: 6,
  color: theme.palette.text.secondary,
  width: 40,
  height: 40,
  transition: 'all 0.4s ease 0s',
  '&:hover': {
    backgroundColor: theme.palette.background.hover,
    cursor: 'pointer',
  },
}));

export { CardMediaStyle, GridContent, ItemStyle };
