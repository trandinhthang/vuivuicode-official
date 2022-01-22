import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { TypographyTitle } from './index.styles';
import { socialSharing } from '../../../../assets/data';

const PostsItem = ({ posts }) => {
  let navigate = useNavigate();
  const handleClick = (posts) => {
    const slug = `/p/${posts.slug}-${posts._id}`;
    navigate(slug, { state: { title: posts.title } });
  };

  return (
    <>
      <Grid container alignItems='center' justifyContent='space-between'>
        <Grid item>
          <Typography variant='overline' color='text.secondary'>
            {posts.created_by.username}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='overline' color='text.secondary'>
            / {posts.category.name} /
          </Typography>
        </Grid>
      </Grid>
      <Grid
        onClick={() => {
          handleClick(posts);
        }}
      >
        <TypographyTitle variant='h5' color='text.primary'>
          {posts.title}
        </TypographyTitle>
      </Grid>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Typography variant='caption' color='text.secondary'>
            / {dayjs(posts.created_at).format('DD-MM-YYYY')} /
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent='flex-end' spacing={2}>
            <Grid item>
              {socialSharing.map((social, index) => (
                <Tooltip
                  key={index}
                  title={social.title}
                  placement='bottom-end'
                >
                  <IconButton>{social.icon}</IconButton>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
PostsItem.propTypes = {
  posts: PropTypes.object.isRequired,
};
export default PostsItem;
