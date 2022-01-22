import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const MainStyle = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: '80px auto 40px',
  [theme.breakpoints.down('laptop')]: {
    marginLeft: 5,
    marginRight: 5,
  },
}));

export { MainStyle };
