import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  Grid,
  Typography,
  IconButton,
  Popover,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { RiMoreLine, RiReplyFill } from 'react-icons/ri';
import {
  AiFillLike,
  AiFillDelete,
  AiFillEdit,
  AiOutlineLink,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../features/user/userSlice';
import { selectLogin } from '../../../../features/auth/loginSlice';
import { deletePostsComment } from '../../../../features/posts-comment/postsCommentSlice';

const CommentItem = ({ comment, onIndexTab, onContent }) => {
  const dispatch = useDispatch();
  const { _id, content, created_by, created_at } = comment;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { data } = useSelector(selectUser);

  const { data: dataLogin } = useSelector(selectLogin);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteComment = (data) => {
    const newData = { ...data, accessToken: dataLogin };
    dispatch(deletePostsComment(newData));
  };

  return (
    <Grid
      mobile={10}
      tablet={11}
      laptop={10}
      item
      sx={{
        border: (theme) => `1px solid ${theme.palette.grey[200]}`,
        ml: 2,
        mb: 2,
        p: 2,
        borderRadius: 2,
      }}
    >
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Typography variant='overline' color='text.secondary'>
            {created_by.username}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {' '}
            / {dayjs(created_at).format('DD-MM-YYYY')} /
          </Typography>
        </Grid>

        <Grid item>
          <IconButton
            aria-label='more'
            id='more'
            aria-haspopup='true'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <RiMoreLine />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {data._id === created_by._id ? (
              <>
                <MenuItem
                  onClick={() => {
                    onContent({ content, id: _id });
                    onIndexTab(1);
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
                    handleDeleteComment({ id: _id, is_deleted: true });
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
              </>
            ) : (
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AiOutlineLink />
                </ListItemIcon>
                <ListItemText
                  primary='Copy link'
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </MenuItem>
            )}
          </Popover>
        </Grid>
      </Grid>

      <Typography>{content}</Typography>
      <Grid container justifyContent='flex-end' alignItems='center' spacing={1}>
        <Grid item>
          <IconButton>
            <AiFillLike fontSize={18} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <RiReplyFill fontSize={18} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
CommentItem.propTypes = {
  comment: PropTypes.object,
  onIndexTab: PropTypes.func,
  onContent: PropTypes.func,
};
export default CommentItem;
