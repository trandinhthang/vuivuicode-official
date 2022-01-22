import PostsComment from '../models/posts-comment.model.js';
import { successHandle, errorHandler } from '../utils/index.js';

/**
 * @route GET api/posts-comment/all/:id
 * @desc Get all comment with id posts
 * @access public
 */
export const getAllWithIdPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const postsComment = await PostsComment.find({
      posts_id: id,
      is_deleted: false,
    })
      .sort({
        created_at: 'desc',
      })
      .populate('created_by', ['_id', 'username', 'avatar']);

    if (!postsComment)
      throw { status: 400, message: 'Get comment not success' };

    const data = {
      status: 200,
      message: 'Get comment success',
      data: postsComment,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route POST api/posts-comment
 * @desc Create a comment
 * @access private
 */
export const createPostsComment = async (req, res) => {
  try {
    const newPostsComment = new PostsComment(req.body);
    let postsComment = await newPostsComment.save();
    postsComment = await postsComment.populate('created_by', [
      '_id',
      'username',
      'avatar',
    ]);
    if (!postsComment)
      throw { status: 400, message: 'Add comment not success' };

    const data = {
      status: 200,
      message: 'Add comment success',
      data: postsComment,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route PUT api/posts-comment/:id
 * @desc Update a comment
 * @access private
 */
export const updatePostsComment = async (req, res) => {
  try {
    const comment = req.body;
    comment.updated_at = new Date();

    const newPostsComment = await PostsComment.findOneAndUpdate(
      {
        _id: req.params.id,
        created_by: comment.created_by,
      },
      comment,
      { new: true }
    ).populate('created_by', ['_id', 'username', 'avatar']);

    if (!newPostsComment)
      throw { status: 400, message: 'Update comment not success' };

    const data = {
      status: 200,
      message: 'Update comment success',
      data: newPostsComment,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route PUT api/posts-comment/:id
 * @desc Delete a comment
 * @access private
 */
export const deletePostsComment = async (req, res) => {
  try {
    const { id, ...comment } = req.body;
    const newPostsComment = await PostsComment.findOneAndUpdate(
      {
        _id: id,
        created_by: comment.created_by,
      },
      comment,
      { new: true }
    );

    if (!newPostsComment)
      throw { status: 400, message: 'Delete comment not success' };

    const data = {
      status: 200,
      message: 'Delete comment success',
      data: newPostsComment,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
