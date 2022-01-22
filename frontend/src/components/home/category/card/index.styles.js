import { styled } from '@mui/material/styles';
import { CardMedia } from '@mui/material';

const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
  borderRadius: 15,
  WebkitTransform: 'scale(1)',
  transform: 'scale(1)',
  WebkitTransition: '.3s ease-in-out',
  transition: '.3s ease-in-out',
  '&:hover': {
    WebkitTransform: 'scale(1.3)',
    transform: 'scale(1.3)',
  },
  [theme.breakpoints.down('laptop')]: {
    height: 230,
  },
}));

export { CardMediaStyle };
