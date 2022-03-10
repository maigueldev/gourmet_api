import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction, Router } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';


const app = express();

/* For test server [this will be delete] */
const usersRouter = Router();

usersRouter.get(
    '/',
    (req, res) => res.send('hello world')
);
/* END -> For test server [this will be delete] */

app.use(cors());
app.use(express.json());
app.use(usersRouter);

app.use(errors());

// Run app
app.listen(process.env.APP_API_PORT, () => {
    console.log(`✅  Server is listening to: ${process.env.APP_API_URL}:${process.env.APP_API_PORT} ✅ `);
});