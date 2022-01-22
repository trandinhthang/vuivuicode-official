import express from 'express';
import { getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
router.route('/').get(verifyToken, getUser);

export default router;
