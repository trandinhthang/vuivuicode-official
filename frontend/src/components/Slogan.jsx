import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { setting } from '../resource';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  [theme.breakpoints.down('laptop')]: {
    marginLeft: 5,
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '0.725rem',
  },
}));
const SloganTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    fontSize: '0.8rem',
  },
}));

const Slogan = () => {
  return (
    <Link to='/'>
      <Title variant='button'>{setting.client.home.header.title}</Title>
      <SloganTitle variant='span'>
        {setting.client.home.header.slogan}
      </SloganTitle>
    </Link>
  );
};

export default Slogan;
