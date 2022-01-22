import { Navigate } from 'react-router-dom';
import CommonLayout from '../layouts/common';
import AdminLayout from '../layouts/admin';
import Home from '../pages/home';
import Category from '../pages/category';
import Posts from '../pages/posts';
import Admin from '../pages/admin';
import CategoryAdmin from '../pages/admin/category';
import PostsAdmin from '../pages/admin/posts';
import UserAdmin from '../pages/admin/user';
import Login from '../pages/login';
import NotFound from '../pages/404';
import User from '../pages/user';

const routes = ({ data }) => [
  {
    path: '/admin',
    element: data?.role === 1 ? <AdminLayout /> : <Navigate to='/login' />,
    children: [
      {
        path: '',
        element: <Admin />,
      },
      {
        path: 'category',
        element: <CategoryAdmin />,
      },
      {
        path: 'posts',
        element: <PostsAdmin />,
      },
      {
        path: 'user',
        element: <UserAdmin />,
      },
    ],
  },
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'c/:slug',
        element: <Category />,
      },
      {
        path: 'p/:slug',
        element: <Posts />,
      },
      {
        path: 'user',
        element: data?.role === 2 ? <User /> : <Navigate to='/login' />,
      },
      {
        path: 'login',
        element: !data?.role ? <Login /> : <Navigate to='/' />,
      },
    ],
  },
  { path: '404', element: <NotFound /> },
  { path: '*', element: <Navigate to='/404' replace /> },
];

export default routes;
