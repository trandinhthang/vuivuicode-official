export const successHandle = (data, res) =>
  res.status(data.status).json({ message: data.message, data: data.data });
