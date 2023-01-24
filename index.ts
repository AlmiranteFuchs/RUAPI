import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Routes
import home from './routes/home';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use('/', home);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});