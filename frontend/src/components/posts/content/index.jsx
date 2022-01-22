import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { Grid, Stack, Tooltip, Typography } from '@mui/material';
import { CardMediaStyle, GridContent, ItemStyle } from './index.styles';
import { socialSharing } from '../../../assets/data';
import MySkeleton from '../../MySkeleton';
import { selectPosts } from '../../../features/posts/postsSlice';

const PostsContent = ({ postsDetail }) => {
  const { loading } = useSelector(selectPosts);
  const { title, image, content } = postsDetail;
  const { created_by = { username: 'Tên tác giả' }, created_at = new Date() } =
    postsDetail;

  return (
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <CardMediaStyle component='img' image={image} alt={title} />
      </Grid>
      <Grid container alignItems='center' justifyContent='space-between'>
        <Grid item>
          <Typography variant='overline' color='text.secondary'>
            {created_by?.username}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {' '}
            / {dayjs(created_at).format('DD-MM-YYYY')} /
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='overline' color='text.secondary'>
            Lượt xem: 35 &bull; Like: 35 &bull; Comment: 35
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant='h1' color='text.primary'>
          {title}
        </Typography>
      </Grid>
      <GridContent px={20}>
        {loading === 'pending' || loading === 'starting' ? (
          <MySkeleton type='paragraph' />
        ) : (
          <Grid item>
            <Typography
              variant='body1'
              color='text.primary'
              sx={{ fontSize: '1.125rem', lineHeight: '2.5rem' }}
            >
              {content}
            </Typography>
          </Grid>
        )}
      </GridContent>
      <Grid container justifyContent='flex-end' mt={4}>
        <Stack sx={{ w: '100%' }} direction={{ mobile: 'row' }}>
          {socialSharing.map((social, index) => (
            <Tooltip title={social.title} placement='bottom-end' key={index}>
              <ItemStyle>{social.icon}</ItemStyle>
            </Tooltip>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};
PostsContent.propTypes = {
  postsDetail: PropTypes.object.isRequired,
};
export default PostsContent;
