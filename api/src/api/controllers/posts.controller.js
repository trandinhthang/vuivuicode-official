import Posts from '../models/posts.model.js';
import { successHandle, errorHandler } from '../utils/index.js';

/**
 * @route GET api/posts/all
 * @desc Get all posts
 * @access public
 */
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find({ is_deleted: false })
      .sort({ created_at: 'desc' })
      .populate('category', ['_id', 'name'])
      .populate('created_by', ['_id', 'username']);

    if (!posts) throw { status: 400, message: 'Get all posts not success' };

    const data = {
      status: 200,
      message: 'Get all posts success',
      data: posts,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route GET api/posts/:id
 * @desc Get a posts
 * @access public
 */
export const getPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Posts.findOne({ _id: id, is_deleted: false })
      .sort({ created_at: 'desc' })
      .populate('category', ['_id', 'name'])
      .populate('created_by', ['_id', 'username']);

    if (!posts) throw { status: 400, message: 'Get a posts not success' };

    const data = {
      status: 200,
      message: 'Get a posts success',
      data: posts,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route GET api/posts/c/:id
 * @desc Get posts with category
 * @access public
 */
export const getPostsCategory = async (req, res) => {
  const PAGE = 1;
  const LIMIT = 5;
  try {
    const { id } = req.params;
    const page = parseInt(req.query.page) || PAGE;
    const limit = parseInt(req.query.limit) || LIMIT;
    const posts = await Posts.find({ category: id, is_deleted: false })
      .sort({ created_at: 'desc' })
      .populate('category', ['_id', 'name'])
      .populate('created_by', ['_id', 'username'])
      .select('-content')
      .limit(limit)
      .skip((page - 1) * limit);
    const count = await Posts.count({ category: id, is_deleted: false });

    if (!posts)
      throw { status: 400, message: 'Get posts with category not success' };

    const data = {
      status: 200,
      message: 'Get posts with category success',
      data: { posts, count },
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route POST api/posts
 * @desc Create a posts
 * @access private
 */
export const createPosts = async (req, res) => {
  try {
    const newPosts = new Posts(req.body);
    let posts = await newPosts.save();
    posts = await posts.populate('category', ['_id', 'name']);
    posts = await posts.populate('created_by', ['_id', 'username']);
    if (!posts) throw { status: 400, message: 'Add posts not success' };

    const data = {
      status: 200,
      message: 'Add posts success',
      data: posts,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route GET api/posts/search
 * @desc Search posts
 * @access public
 */
export const searchPosts = async (req, res) => {
  try {
    const posts = await Posts.find({
      $text: { $search: req.query.q },
      is_deleted: false,
    });

    if (!posts) throw { status: 400, message: 'Search posts not success' };

    const data = {
      status: 200,
      message: 'Search posts success',
      data: posts,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
