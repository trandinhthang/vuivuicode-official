import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import Page from '../../components/Page';
import PostsContent from '../../components/posts/content';
import Comment from '../../components/posts/comment';
import { setting } from '../../resource';
import { posts, selectPosts } from '../../features/posts/postsSlice';
import {
  postsComment,
  selectPostsComment,
} from '../../features/posts-comment/postsCommentSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { state } = useLocation();
  const { data: postsDetail } = useSelector(selectPosts);
  const { data: comments } = useSelector(selectPostsComment);
  const slugSplited = slug.split('-');
  const idInSlug = slugSplited[slugSplited.length - 1];

  useEffect(() => {
    dispatch(posts({ id: idInSlug }));
    dispatch(postsComment({ id: idInSlug }));
  }, [dispatch, idInSlug]);

  return (
    <Page title={state?.title || setting.client.posts.title}>
      <PostsContent postsDetail={postsDetail} />
      <Comment comments={comments} />
    </Page>
  );
};

export default Posts;
