import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import Page from '../../components/Page';
import PostsList from '../../components/category/posts/list';
import {
  postsCategory,
  selectPostsCategory,
} from '../../features/posts/postsCategorySlice';
import MySkeleton from '../../components/MySkeleton';
import MyPagination from '../../components/MyPagination';
import { setting } from '../../resource';
import ScrollToTop from '../../components/ScrollToTop';

const Category = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const { data, loading } = useSelector(selectPostsCategory);
  const slugSplited = slug.split('-');
  const idInSlug = slugSplited[slugSplited.length - 1];

  useEffect(() => {
    dispatch(postsCategory({ id: idInSlug, page: currentPage, limit }));
  }, [dispatch, idInSlug, currentPage, limit]);

  return (
    <Page title={state?.title || setting.client.category.title}>
      {loading === 'pending' || loading === 'starting' ? (
        <MySkeleton />
      ) : (
        <>
          <ScrollToTop />
          <PostsList newPosts={data.posts} />
          <MyPagination
            count={data.count}
            itemNumber={limit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </Page>
  );
};

export default Category;
