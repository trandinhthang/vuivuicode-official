import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppBar, Grid, Stack, Avatar } from '@mui/material';
import { BsFillPersonFill } from 'react-icons/bs';
import Slogan from '../../../components/Slogan';
import { selectUser, user } from '../../../features/user/userSlice';
import { ItemStyle } from './index.styles';
import { logout, selectLogout } from '../../../features/auth/logoutSlice';
import { login } from '../../../features/auth/loginSlice';

import SearchBar from '../../../components/SearchBar';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: dataUser } = useSelector(selectUser);
  const { error, loading } = useSelector(selectLogout);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (loading === 'finish' && !error) {
      dispatch(user());
      dispatch(login());
    }
  }, [dispatch, error, loading]);

  return (
    <>
      <AppBar
        sx={{
          width: '100%',
          height: 40,
          bgcolor: 'background.paper',
          boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
        }}
      >
        <Grid
          container
          alignItems='center'
          justifyContent='space-between'
          sx={{
            maxWidth: 1200,
            m: '0 auto',
            height: '100%',
          }}
        >
          <Slogan />
          <Grid>
            <Stack sx={{ w: '100%' }} direction={{ mobile: 'row' }}>
              <ItemStyle>
                <SearchBar />
              </ItemStyle>
              {!dataUser?.role ? (
                <ItemStyle>
                  <BsFillPersonFill
                    size={20}
                    onClick={() => navigate('/login')}
                  />
                </ItemStyle>
              ) : dataUser?.role === 1 ? (
                <Avatar
                  src={dataUser.avatar}
                  sx={{ width: 28, height: 28, cursor: 'pointer' }}
                  onClick={() => navigate('/admin')}
                />
              ) : (
                <>
                  <Avatar
                    src={dataUser.avatar}
                    sx={{ width: 28, height: 28, cursor: 'pointer' }}
                    onClick={() => navigate('/user')}
                  />{' '}
                  {/* <Typography variant='button' onClick={handleLogout}>
                    Logout
                  </Typography> */}
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
export default Header;
