import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginForm from '../../components/authentication/login';
import { useSelector } from 'react-redux';
import { selectLogin } from '../../features/auth/loginSlice';

const LoginPage = () => {
  const navigation = useNavigate();
  const { loading, error } = useSelector(selectLogin);

  useEffect(() => {
    if (loading === 'finish' && !error) navigation('/');
  }, [navigation, loading, error]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5' color='text.secondary'>
          Đăng nhập
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};
export default LoginPage;
