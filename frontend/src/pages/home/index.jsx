import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  category,
  selectCategory,
} from '../../features/category/categorySlice';
import CategoryList from '../../components/home/category/list';
import Page from '../../components/Page';
import { setting } from '../../resource';
import MySkeleton from '../../components/MySkeleton';

const ClientPage = () => {
  const dispatch = useDispatch();
  const { data: categories, loading } = useSelector(selectCategory);
  useEffect(() => {
    dispatch(category());
  }, [dispatch]);

  return (
    <Page title={setting.client.home.title}>
      {loading === 'pending' || loading === 'starting' ? (
        <MySkeleton type='pulsate' />
      ) : (
        <CategoryList categories={categories} />
      )}
    </Page>
  );
};

export default ClientPage;
