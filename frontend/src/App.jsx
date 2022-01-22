import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import routes from './routers/index';
import ThemeConfig from './theme';
import GlobalStyles from './theme/GlobalStyles';
import { user, selectUser } from './features/user/userSlice';
import { ACCESS_TOKEN } from './constant';
import { selectLogin } from './features/auth/loginSlice';

const App = () => {
  const dispatch = useDispatch();
  const { data: isLogin } = useSelector(selectLogin);
  const { data: dataUser } = useSelector(selectUser);
  const routing = useRoutes(routes({ data: dataUser }));

  useEffect(() => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) return;
    dispatch(user(accessToken));
  }, [dispatch, isLogin]);

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      {routing}
    </ThemeConfig>
  );
};
export default App;
