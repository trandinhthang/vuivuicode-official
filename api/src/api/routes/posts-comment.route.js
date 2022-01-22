import express from 'express';
import {
  createPostsComment,
  getAllWithIdPosts,
  updatePostsComment,
  deletePostsComment,
} from '../controllers/index.js';
import { verifyToken } from '../middleware/index.js';

const router = express.Router();
router.route('/').post(verifyToken, createPostsComment);
router.route('/').put(verifyToken, deletePostsComment);
router.route('/:id').put(verifyToken, updatePostsComment);
router.route('/all/:id').get(getAllWithIdPosts);

export default router;
