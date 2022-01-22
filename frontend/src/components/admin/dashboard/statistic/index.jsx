import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(9, 0),
}));

const StatisticItem = ({ item }) => {
  return (
    <RootStyle sx={{ bgcolor: `rgba(${item.color}, 0.2)`, borderRadius: 4 }}>
      <Typography variant='h2' color='text.secondary'>
        {item.total}
      </Typography>
      <Typography color='text.secondary' variant='button'>
        {item.name}
      </Typography>
    </RootStyle>
  );
};
StatisticItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default StatisticItem;
