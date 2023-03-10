import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Routes
import home from './routes/home';
import cardapios from './routes/cardapios';
import { RestaurantLink, Scrapper } from './src/scrapper/scrapper';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use('/', home);
app.use('/cardapios', cardapios);

//404
app.use((req: Request, res: Response) => {
    res.status(404).send('404 - Not Found');
});


app.listen(port, () => {
    console.log(`RU API listening at http://localhost:${port}`);
});
