import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import accountsRouter from './routes/api/accounts';


// Boot express
const app: Application = express();
const port = 5000;

// connect DB
connectDB(app);

// init middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cors
app.use(cors({origin: true, credentials: true}));

// Application routing
app.use('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: 'Passed!' });
});

// set up routes
app.use('/accounts', accountsRouter);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));