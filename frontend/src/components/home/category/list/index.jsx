import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import CategoryCard from '../card';

const CategoryList = ({ categories, ...other }) => {
  let navigate = useNavigate();
  const handleClick = (category) => {
    const slug = `/c/${category.slug}-${category._id}`;
    navigate(slug, { state: { title: category.name } });
  };

  return (
    <Grid container spacing={2} {...other}>
      {categories &&
        categories.map((category) => (
          <Grid
            key={category._id}
            onClick={() => {
              handleClick(category);
            }}
            item
            mobile={12}
            tablet={6}
            laptop={4}
            sx={{ cursor: 'pointer' }}
          >
            <CategoryCard category={category} />
          </Grid>
        ))}
    </Grid>
  );
};
CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default CategoryList;
