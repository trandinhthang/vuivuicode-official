import {
  FaPalette,
  FaWindowRestore,
  FaUserAstronaut,
  FaFileCode,
} from 'react-icons/fa';

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: <FaPalette />,
  },
  {
    title: 'Category',
    path: '/admin/category',
    icon: <FaWindowRestore />,
  },
  {
    title: 'Posts',
    path: '/admin/posts',
    icon: <FaFileCode />,
  },
  {
    title: 'User',
    path: '/admin/user',
    icon: <FaUserAstronaut />,
  },
];

export default sidebarConfig;
