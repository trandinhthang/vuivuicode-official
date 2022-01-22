import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, CardContent } from '@mui/material';
import { CardMediaStyle } from './index.styles';

const CategoryCard = ({ category }) => {
  const { name, title, image } = category;
  return (
    <>
      <Grid>
        <Grid sx={{ overflow: 'hidden', borderRadius: 4 }}>
          <CardMediaStyle
            component='img'
            height={270}
            image={image}
            alt={name}
          />
        </Grid>
        <CardContent>
          <Typography variant='button' color='text.primary'>
            {name}
          </Typography>
          <Typography variant='span' color='text.secondary'>
            {' '}
            / {title} /
          </Typography>
        </CardContent>
      </Grid>
    </>
  );
};
CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
};
export default CategoryCard;
