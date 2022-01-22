import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../../components/Page';
import { setting } from '../../resource';
import StatisticItem from '../../components/admin/dashboard/statistic';
import { selectLogin } from '../../features/auth/loginSlice';
import {
  statistic,
  selectStatistic,
} from '../../features/statistic/statisticSlice';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { data: dataLogin } = useSelector(selectLogin);
  const { data: dataStatistic } = useSelector(selectStatistic);

  useEffect(() => {
    dispatch(statistic({ accessToken: dataLogin }));
  }, [dispatch, dataLogin]);

  return (
    <Page title={setting.admin.home.title}>
      <Container maxWidth='xl'>
        <Box sx={{ pb: 5 }}>
          <Typography variant='h4' color='text.secondary'>
            {setting.admin.home.name}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {dataStatistic.length > 0 &&
            dataStatistic.map((item) => (
              <Grid item mobile={12} tablet={6} laptop={3} key={item.id}>
                <StatisticItem item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default AdminPage;
