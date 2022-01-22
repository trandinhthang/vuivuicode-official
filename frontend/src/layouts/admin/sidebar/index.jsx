import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Drawer, List, IconButton } from '@mui/material';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import sidebarConfig from './SidebarConfig';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SideBar = ({ open, setOpen }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: (theme) => `1px solid ${theme.palette.grey[200]}`,
        },
      }}
      variant='persistent'
      anchor='left'
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={() => setOpen(false)}>
          {theme.direction === 'ltr' ? <HiChevronLeft /> : <HiChevronRight />}
        </IconButton>
      </DrawerHeader>

      <List>
        {sidebarConfig.map((item, index) => {
          const isActive = item.path === pathname;
          return (
            <ListItem
              button
              key={index}
              component={RouterLink}
              to={item.path}
              sx={
                isActive
                  ? {
                      color: 'primary.dark',
                      borderRight: (theme) =>
                        `3px solid ${theme.palette.primary.dark}`,
                    }
                  : { color: (theme) => theme.palette.grey[400] }
              }
            >
              <ListItemIcon
                sx={
                  isActive
                    ? { color: 'primary.dark' }
                    : { color: (theme) => theme.palette.grey[400] }
                }
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
export default SideBar;
