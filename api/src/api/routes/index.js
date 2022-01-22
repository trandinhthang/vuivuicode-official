import express from 'express';
import authRoutes from './auth.route.js';
import categoryRoutes from './category.route.js';
import postsRoutes from './posts.route.js';
import userRoutes from './user.route.js';
import postsCommentRoutes from './posts-comment.route.js';
import statisticRoutes from './statistic.route.js';

const router = express.Router();
router.use('/auth', authRoutes);
router.use('/category', categoryRoutes);
router.use('/posts', postsRoutes);
router.use('/user', userRoutes);
router.use('/posts-comment', postsCommentRoutes);
router.use('/statistic', statisticRoutes);

export default router;
