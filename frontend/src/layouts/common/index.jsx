import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
// import Footer from './footer';
import { MainStyle } from './index.styles';

const ClientLayout = () => {
  return (
    <>
      <Header />
      <MainStyle>
        <Outlet />
      </MainStyle>
      {/* <Footer /> */}
    </>
  );
};

export default ClientLayout;
