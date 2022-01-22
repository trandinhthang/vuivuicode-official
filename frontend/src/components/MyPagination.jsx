import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ItemStyle = styled(Grid)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  borderRadius: 6,
  color: theme.palette.text.secondary,
  width: 30,
  height: 30,
  transition: 'all 0.4s ease 0s',
  '&:hover': {
    cursor: 'pointer',
  },
}));

const MyPagination = ({ count, itemNumber, currentPage, setCurrentPage }) => {
  const pageItems = [];
  for (let i = 0; i < Math.ceil(count / itemNumber); i++) {
    pageItems.push(i + 1);
  }
  return (
    <Grid container justifyContent='center' alignItems='center'>
      {pageItems.map((item) => (
        <Grid sx={{ mx: 1 }} key={item}>
          <ItemStyle
            sx={
              currentPage === item
                ? {
                    bgcolor: 'primary.light',
                  }
                : {
                    bgcolor: 'unset',
                    '&:hover': {
                      bgcolor: 'background.hover',
                    },
                  }
            }
            onClick={() => setCurrentPage(item)}
          >
            {' '}
            {item}
          </ItemStyle>
        </Grid>
      ))}
    </Grid>
  );
};
MyPagination.propTypes = {
  count: PropTypes.number.isRequired,
  itemNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default MyPagination;
