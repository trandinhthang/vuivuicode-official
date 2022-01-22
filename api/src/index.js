import dotenv from 'dotenv';
import { app, mongoDb } from './config/index.js';

dotenv.config();
mongoDb();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
