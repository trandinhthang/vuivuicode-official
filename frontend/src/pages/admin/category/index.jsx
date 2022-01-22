import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container, Typography, Button, Stack } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import Page from '../../../components/Page';
import { setting } from '../../../resource';
import CategoryTable from '../../../components/admin/category/table';
import {
  category,
  selectCategory,
} from '../../../features/category/categorySlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { data: categories, loading } = useSelector(selectCategory);

  useEffect(() => {
    dispatch(category());
  }, [dispatch]);

  return (
    <Page title={setting.admin.category.title}>
      <Container maxWidth='xl'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          mb={4}
        >
          <Typography variant='h4' color='text.secondary' gutterBottom>
            {setting.admin.category.name}
          </Typography>
          <Button
            variant='outlined'
            sx={{ textTransform: 'unset' }}
            startIcon={<AiOutlinePlus />}
          >
            Thêm
          </Button>
        </Stack>

        <Grid container>
          <CategoryTable categories={categories} />
        </Grid>
      </Container>
    </Page>
  );
};

export default CategoryPage;
