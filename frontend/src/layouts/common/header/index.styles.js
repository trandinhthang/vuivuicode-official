import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ItemStyle = styled(Grid)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  color: theme.palette.text.secondary,
  width: 30,
  height: 30,
  margin: '0 5px',
  transition: 'all 0.4s ease 0s',
  '&:hover': {
    backgroundColor: theme.palette.background.hover,
    cursor: 'pointer',
  },
}));

export { ItemStyle };
