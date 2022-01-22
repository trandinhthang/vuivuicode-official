import Category from '../models/category.model.js';
import Posts from '../models/posts.model.js';
import User from '../models/user.model.js';
import { errorHandler, successHandle } from '../utils/index.js';

/**
 * @route GET api/statistic
 * @desc Get statistic
 * @access private
 */
export const getStatistic = async (req, res) => {
  try {
    const totalCategory = await Category.count({ is_deleted: false });
    const totalPosts = await Posts.count({ is_deleted: false });
    const totalUser = await User.count({ is_deleted: false });

    if (!totalCategory || !totalPosts || !totalUser)
      throw { status: 400, message: 'Get user not success' };

    const statistic = [
      {
        id: 1,
        name: 'Categories',
        color: '254, 149, 68',
        total: totalCategory,
      },
      {
        id: 2,
        name: 'Posts',
        color: '51, 102, 255',
        total: totalPosts,
      },
      {
        id: 3,
        name: 'Users',
        color: '84, 214, 44',
        total: totalUser,
      },
      {
        id: 4,
        name: 'Bug reports',
        color: '255, 72, 66',
        total: 0,
      },
    ];
    const data = {
      status: 200,
      message: 'Get user success',
      data: statistic,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
