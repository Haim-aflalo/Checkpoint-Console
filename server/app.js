import express from 'express';
import { msgRouter } from './routes/msgRoutes.js';
import { logRouter } from './routes/logRoutes.js';

import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use('/api', msgRouter);
app.use('/api', logRouter);

app.listen(port, function (err) {
  console.log('Server listening on Port', port);
});
