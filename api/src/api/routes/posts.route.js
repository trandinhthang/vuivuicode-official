import express from 'express';
import {
  createPosts,
  getPosts,
  getPostsCategory,
  searchPosts,
  getAllPosts,
} from '../controllers/index.js';
import { verifyToken } from '../middleware/index.js';

const router = express.Router();

router.route('/').post(verifyToken, createPosts);
router.route('/all').get(getAllPosts);
router.route('/search').get(searchPosts);
router.route('/:id').get(getPosts);
router.route('/c/:id').get(getPostsCategory);

export default router;
