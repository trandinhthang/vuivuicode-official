import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Typography, IconButton } from '@mui/material';
import { HiMenuAlt1 } from 'react-icons/hi';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, setOpen }) => {
  return (
    <AppBar
      position='fixed'
      open={open}
      sx={{
        bgcolor: 'background.paper',
        boxShadow:
          'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setOpen(true)}
          edge='start'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <HiMenuAlt1 />
        </IconButton>
        <Typography variant='h6' noWrap component='div' color='text.secondary'>
          Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
export default TopBar;
