import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const MySkeleton = ({ type = 'basic' }) => {
  return (
    <>
      {type === 'basic' && (
        <Grid>
          {[1, 2, 3, 4, 5].map((index) => (
            <Box key={index} mb={5}>
              <Skeleton variant='rectangular' height={110} />
            </Box>
          ))}
        </Grid>
      )}
      {type === 'paragraph' && (
        <Box>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Skeleton key={index} sx={{ my: 1 }} />
          ))}
        </Box>
      )}
      {type === 'pulsate' && (
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Grid item key={index} mobile={12} tablet={6} laptop={4}>
              <Box sx={{ marginRight: 0.5 }}>
                <Skeleton variant='rectangular' height={260} />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width='60%' />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
MySkeleton.propTypes = {
  type: PropTypes.string,
};
export default MySkeleton;
