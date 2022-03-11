import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction, Router } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

// Run app
app.listen(process.env.APP_API_PORT, () => {
    console.log(`✅  Server is listening to: ${process.env.APP_API_URL}:${process.env.APP_API_PORT} ✅ `);
});