import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectLogin } from '../../../features/auth/loginSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, notification } = useSelector(selectLogin);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username or username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <>
      {notification}
      <FormikProvider value={formik}>
        <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
          <TextField
            margin='normal'
            fullWidth
            id='username'
            label='Tên đăng nhập / username'
            name='username'
            autoComplete='username'
            autoFocus
            {...getFieldProps('username')}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
          />
          <TextField
            margin='normal'
            fullWidth
            name='password'
            label='Mật khẩu'
            type='password'
            id='password'
            autoComplete='current-password'
            {...getFieldProps('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            sx={{
              mt: 5,
              py: 1.5,
              color: 'common.white',
            }}
            loading={loading === 'starting' ? isSubmitting : null}
          >
            Đăng nhập
          </LoadingButton>
        </Form>
      </FormikProvider>
    </>
  );
};
export default LoginForm;
