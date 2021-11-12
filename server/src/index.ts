import express, { Application, Request, Response, NextFunction } from 'express';

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: 'Passed!' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));