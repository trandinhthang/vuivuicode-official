import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import {
  Input,
  Slide,
  ClickAwayListener,
  IconButton,
  Grid,
  InputAdornment,
  Typography,
  CircularProgress,
} from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import {
  postsSearch,
  selectPostsSearch,
} from '../features/posts/postsSearchSlice';
import dayjs from 'dayjs';

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  position: 'absolute',
  minHeight: 65,
  backdropFilter: 'blur(25px)',
  WebkitBackdropFilter: 'blur(25px)',
  padding: theme.spacing(1, 5),
  boxShadow:
    'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('laptop')]: {
    padding: theme.spacing(2, 20),
  },
}));

const SearchBar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { data: dataSearch, loading } = useSelector(selectPostsSearch);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    dispatch(postsSearch(value));
    setSearch(value);
  };

  const handleClick = (posts) => {
    const slug = `/p/${posts.slug}-${posts._id}`;
    navigate(slug, { state: { title: posts.title } });
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Grid>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            <BsSearch size={15} />
          </IconButton>
        )}

        <Slide direction='down' in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder='Search…'
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
              value={search}
              onChange={handleSearch}
              startAdornment={
                <InputAdornment position='start'>
                  <BsSearch />
                </InputAdornment>
              }
            />

            <Grid mt={1}>
              {loading === 'starting' && <CircularProgress size={15} />}

              {loading === 'finish' && dataSearch.length === 0 && (
                <Typography>Không tìm thấy kết quả</Typography>
              )}

              {loading === 'finish' &&
                dataSearch.length > 0 &&
                dataSearch.map((item) => (
                  <Grid
                    key={item._id}
                    sx={{
                      border: (theme) => `1px solid ${theme.palette.grey[400]}`,
                      mb: 2,
                      p: 1,
                      borderRadius: 2,
                    }}
                    onClick={() => {
                      handleClick(item);
                      setSearch('');
                      handleClose();
                    }}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant='caption' sx={{ fontWeight: 'bold' }}>
                      {' '}
                      / {dayjs(item.created_at).format('DD-MM-YYYY')} /
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </SearchbarStyle>
        </Slide>
      </Grid>
    </ClickAwayListener>
  );
};
export default SearchBar;
