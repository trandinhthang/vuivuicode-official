import express from 'express';
import { getAllCategory, createCategory } from '../controllers/index.js';
import { verifyToken } from '../middleware/index.js';

const router = express.Router();
router.route('/all').get(getAllCategory);
router.route('/').post(verifyToken, createCategory);

export default router;
