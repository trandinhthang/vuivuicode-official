import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, Grid } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import { Typography, Slide } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import PostsAddForm from './form';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const PostsAddDialog = ({ openAdd, setOpenAdd }) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: 'relative',
            bgcolor: 'background.paper',
            boxShadow:
              'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
          }}
        >
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant='h6'
              component='div'
              color='text.secondary'
            >
              Thêm bài viết
            </Typography>
            <Button
              color='error'
              onClick={() => setOpenAdd(false)}
              variant='outlined'
              sx={{ textTransform: 'unset', mr: 2 }}
              startIcon={<AiOutlineClose />}
            >
              Hủy
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <PostsAddForm setOpenAdd={setOpenAdd} />
        </Grid>
      </Dialog>
    </div>
  );
};
PostsAddDialog.propTypes = {
  openAdd: PropTypes.bool.isRequired,
  setOpenAdd: PropTypes.func.isRequired,
};
export default PostsAddDialog;
