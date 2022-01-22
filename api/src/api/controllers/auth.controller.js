import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import User from '../models/user.model.js';
import { errorHandler, successHandle } from '../utils/index.js';
/**
 * @route POST api/auth/login
 * @desc Login user
 * @access public
 */
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw { status: 400, message: 'Missing username or password' };

    const user = await User.findOne({ username });
    if (!user) throw { status: 400, message: 'Incorrect username or password' };

    const verifyPass = await argon2.verify(user.password, password);
    if (!verifyPass)
      throw { status: 400, message: 'Incorrect username or password' };

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    const data = {
      status: 200,
      message: 'Login success',
      data: { accessToken },
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
