import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { TextField, Autocomplete } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import {
  category,
  selectCategory,
} from '../../../../../features/category/categorySlice';

const PostsAddForm = ({ setOpenAdd }) => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector(selectCategory);
  const [content, setContent] = useState('');
  const [errorContent, setErrorContent] = useState(false);

  useEffect(() => {
    dispatch(category());
  }, [dispatch]);

  const PostsSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    category: Yup.string().required('Category is required'),
    image: Yup.string().required('Image is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      image: '',
    },
    validationSchema: PostsSchema,
    onSubmit: (values) => {
      if (!content) {
        setErrorContent(true);
        return;
      }
      setErrorContent(false);
      const data = { ...values, content };
      console.log(`data`, data);
      // setOpenAdd(false);
    },
  });

  const { errors, touched, isSubmitting } = formik;
  const { handleSubmit, getFieldProps, setFieldValue } = formik;

  return (
    <Grid container spacing={5} p={5}>
      <Grid item mobile={6}>
        <Grid
          item
          sx={{
            borderRadius: 5,
            p: 3,
            minHeight: '82vh',
            boxShadow:
              'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
          }}
        >
          <FormikProvider value={formik}>
            <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
              <TextField
                margin='normal'
                fullWidth
                id='title'
                label='Tiêu đề'
                name='title'
                autoComplete='title'
                autoFocus
                {...getFieldProps('title')}
                error={Boolean(touched.title && errors.title)}
                helperText={touched.title && errors.title}
                size='small'
              />
              <Autocomplete
                id='category'
                options={categories}
                getOptionLabel={(category) => `${category?.name} `}
                onChange={(e, value) =>
                  setFieldValue('category', value?._id || '')
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={Boolean(touched.category && errors.category)}
                    fullWidth
                    helperText={touched.category && errors.category}
                    label='Danh mục'
                    name='category'
                    margin='normal'
                    size='small'
                  />
                )}
              />

              <TextField
                type='file'
                margin='normal'
                fullWidth
                name='image'
                id='image'
                autoComplete='image'
                {...getFieldProps('image')}
                error={Boolean(touched.image && errors.image)}
                helperText={touched.image && errors.image}
                sx={{ mb: 3 }}
                size='small'
              />

              <LoadingButton
                color='secondary'
                variant='outlined'
                sx={{ textTransform: 'unset', mt: 2 }}
                startIcon={<AiOutlinePlus />}
                type='submit'
              >
                Thêm
              </LoadingButton>
            </Form>
          </FormikProvider>
        </Grid>
      </Grid>
      <Grid item mobile={6}>
        <Grid
          item
          sx={{
            borderRadius: 5,
            p: 2,
            boxShadow:
              'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
            minHeight: '82vh',
          }}
        >
          <Typography color='text.secondary'>Nội dung</Typography>
          <MDEditor
            name='content'
            id='content'
            value={content}
            onChange={setContent}
            height={550}
            style={
              errorContent
                ? { border: '1px solid #FF4842' }
                : { border: 'unset' }
            }
          />
          {errorContent && (
            <Typography color='error' sx={{ ml: 2, fontSize: '0.725rem' }}>
              Content is required
            </Typography>
          )}
          {/* <MDEditor.Markdown source={content} /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};
PostsAddForm.propTypes = {
  setOpenAdd: PropTypes.func.isRequired,
};
export default PostsAddForm;
