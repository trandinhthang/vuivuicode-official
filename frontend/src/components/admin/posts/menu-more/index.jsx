import React from 'react';
import {
  Popover,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { AiFillDelete, AiFillEdit, AiOutlineMore } from 'react-icons/ai';

const PostsMenuMore = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClickMore = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label='more'
        id='more'
        aria-haspopup='true'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickMore}
      >
        <AiOutlineMore />
      </IconButton>
      <Popover
        sx={{
          '.css-cwxupe-MuiPaper-root-MuiPopover-paper': {
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <ListItemIcon>
            <AiFillEdit />
          </ListItemIcon>
          <ListItemText
            primary='Chỉnh sửa'
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <ListItemIcon>
            <AiFillDelete />
          </ListItemIcon>
          <ListItemText
            primary='Xóa'
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>
      </Popover>
    </>
  );
};

export default PostsMenuMore;
