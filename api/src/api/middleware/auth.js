import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) throw Error('Access token not found');

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.body.created_by = decoded.userId;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
