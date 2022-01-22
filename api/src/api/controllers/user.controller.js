import User from '../models/user.model.js';
import { successHandle, errorHandler } from '../utils/index.js';

/**
 * @route GET api/user
 * @desc Get a user
 * @access private
 * @returns
 */
export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.body.created_by,
      is_deleted: false,
    }).select('-password');
    if (!user) throw { status: 400, message: 'Get user not success' };

    const data = {
      status: 200,
      message: 'Get user success',
      data: user,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
