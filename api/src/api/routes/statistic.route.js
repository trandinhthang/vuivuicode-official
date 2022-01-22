import express from 'express';
import { getStatistic } from '../controllers/index.js';
import { verifyToken } from '../middleware/index.js';

const router = express.Router();
router.route('/').get(verifyToken, getStatistic);
export default router;
