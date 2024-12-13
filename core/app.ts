import express, {Application} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
import {errorHandler} from '../middleware/errorHandler';

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(cors());
//define routes
app.use('/api/users', userRoutes);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
