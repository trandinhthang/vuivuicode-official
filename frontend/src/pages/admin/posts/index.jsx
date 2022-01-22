import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container, Typography, Button, Stack } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import Page from '../../../components/Page';
import { setting } from '../../../resource';
import PostsTable from '../../../components/admin/posts/table';
import {
  postsAll,
  selectPostsAll,
} from '../../../features/posts/postsAllSlice';
import PostsAddDialog from '../../../components/admin/posts/add-dialog';
const PostsPage = () => {
  const dispatch = useDispatch();
  const { data: posts, loading } = useSelector(selectPostsAll);
  const [openAdd, setOpenAdd] = React.useState(false);

  useEffect(() => {
    dispatch(postsAll());
  }, [dispatch]);

  return (
    <Page title={setting.admin.posts.title}>
      <Container maxWidth='xl'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          mb={4}
        >
          <Typography variant='h4' color='text.secondary' gutterBottom>
            {setting.admin.posts.name}
          </Typography>
          <Button
            onClick={() => setOpenAdd(true)}
            variant='outlined'
            sx={{ textTransform: 'unset' }}
            startIcon={<AiOutlinePlus />}
          >
            Thêm
          </Button>
        </Stack>
        <PostsAddDialog openAdd={openAdd} setOpenAdd={setOpenAdd} />
        <Grid container>
          <PostsTable posts={posts} />
        </Grid>
      </Container>
    </Page>
  );
};

export default PostsPage;
