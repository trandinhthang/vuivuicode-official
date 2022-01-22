import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from '../item';
import { GridCard } from './index.styles';

const PostsList = ({ newPosts }) => {
  return (
    <>
      {newPosts &&
        newPosts.map((posts) => (
          <GridCard
            key={posts._id}
            item
            sx={{
              mb: 6,
              py: 1,
              px: 8,
              boxShadow:
                'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
            }}
          >
            <PostsItem posts={posts} />
          </GridCard>
        ))}
    </>
  );
};
PostsList.propTypes = {
  newPosts: PropTypes.array.isRequired,
};
export default PostsList;
