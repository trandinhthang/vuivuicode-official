import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow, Checkbox } from '@mui/material';
import { stableSort, getComparator } from '../../../../../utils';
import PostsMenuMore from '../../menu-more';
import dayjs from 'dayjs';

const PostsTableBody = (props) => {
  const { rows, order, orderBy, page, rowsPerPage, isSelected, handleClick } =
    props;

  return (
    <>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              role='checkbox'
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row._id}
              selected={isItemSelected}
            >
              <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                  onClick={(event) => handleClick(event, row.name)}
                />
              </TableCell>
              <TableCell component='th' id={labelId} padding='none'>
                {row.title}
              </TableCell>
              <TableCell>{row.category.name}</TableCell>
              <TableCell>
                <img src={row.image} width={100} height={50} alt={row.name} />
              </TableCell>
              <TableCell>{row.created_by.username}</TableCell>
              <TableCell>
                {dayjs(row.created_at).format('DD-MM-YYYY')}
              </TableCell>
              <TableCell>{row.slug}</TableCell>
              <TableCell align='center'>
                <PostsMenuMore />
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};
PostsTableBody.propTypes = {};
export default PostsTableBody;
