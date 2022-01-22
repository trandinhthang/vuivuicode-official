import React from 'react';
import { Grid, Typography } from '@mui/material';
import { BsCodeSlash } from 'react-icons/bs';
import { setting } from '../../../resource';

const Footer = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{
        width: '100%',
        height: 40,
        bgcolor: 'background.paper',
        boxShadow:
          'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
      }}
    >
      <BsCodeSlash />
      <Typography ml={1}>{setting.client.home.footer.title}</Typography>
    </Grid>
  );
};
export default Footer;
