import express from 'express';
import mainRouter from './routes';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors());

app.use(helmet());

app.use('/api', mainRouter);

export default app;
