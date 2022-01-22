export const errorHandler = (error, res) => {
  if (typeof error === 'string') {
    return res.status(400).json(error);
  }
  if (error.status) {
    return res.status(error.status).json(error);
  }
  return res.status(500).json(error.message);
};
